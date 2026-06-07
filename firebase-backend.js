(function () {
  const SDK_VERSION = "10.13.2";
  const PLACEHOLDER = "YOUR_";
  let enabled = false;
  let ready = false;
  let auth = null;
  let db = null;
  let firebaseUser = null;
  let firestore = null;
  let authFns = null;
  let saveTimer = null;

  function hasConfig() {
    const config = window.CARIDREAM_FIREBASE_CONFIG;
    return Boolean(
      config &&
      config.apiKey &&
      !config.apiKey.includes(PLACEHOLDER) &&
      config.projectId &&
      !config.projectId.includes(PLACEHOLDER)
    );
  }

  async function init() {
    if (!hasConfig()) {
      return { enabled: false, status: "Local prototype storage. Firebase config is missing." };
    }

    const appMod = await import(`https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-app.js`);
    authFns = await import(`https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-auth.js`);
    firestore = await import(`https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-firestore.js`);

    const app = appMod.initializeApp(window.CARIDREAM_FIREBASE_CONFIG);
    auth = authFns.getAuth(app);
    db = firestore.getFirestore(app);
    await authFns.setPersistence(auth, authFns.browserLocalPersistence);

    firebaseUser = auth.currentUser || (await authFns.signInAnonymously(auth)).user;
    enabled = true;
    ready = true;
    return { enabled: true, uid: firebaseUser.uid, status: "Connected to Firebase Auth and Firestore." };
  }

  async function signInProfile(profile) {
    if (!enabled || !ready) return null;
    firebaseUser = auth.currentUser || (await authFns.signInAnonymously(auth)).user;
    await firestore.setDoc(
      firestore.doc(db, "users", firebaseUser.uid),
      {
        name: profile?.name || "CariDream listener",
        email: profile?.email || "",
        updatedAt: firestore.serverTimestamp()
      },
      { merge: true }
    );
    return firebaseUser.uid;
  }

  async function loadState() {
    if (!enabled || !ready || !firebaseUser) return null;
    const snapshot = await firestore.getDoc(firestore.doc(db, "appState", firebaseUser.uid));
    return snapshot.exists() ? snapshot.data().state : null;
  }

  async function loadAdminStatus(profile) {
    if (!enabled || !ready || !firebaseUser) return false;
    const configuredEmails = window.CARIDREAM_ADMIN_EMAILS || [];
    const profileEmail = (profile?.email || "").trim().toLowerCase();
    if (configuredEmails.map((email) => email.toLowerCase()).includes(profileEmail)) {
      return true;
    }

    const snapshot = await firestore.getDoc(firestore.doc(db, "users", firebaseUser.uid));
    const user = snapshot.exists() ? snapshot.data() : {};
    return user.role === "admin" || user.admin === true;
  }

  async function loadStories() {
    if (!enabled || !ready) return [];
    const snapshot = await firestore.getDocs(firestore.collection(db, "stories"));
    return snapshot.docs.map((docSnapshot) => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    }));
  }

  async function loadFavorites() {
    if (!enabled || !ready || !firebaseUser) return [];
    const snapshot = await firestore.getDocs(firestore.collection(db, "users", firebaseUser.uid, "favorites"));
    return snapshot.docs.map((docSnapshot) => docSnapshot.id);
  }

  async function saveFavorites(favorites, favoriteDetails = []) {
    if (!enabled || !ready || !firebaseUser || !Array.isArray(favorites)) return;
    const favoriteIds = new Set(favorites);
    const details = new Map(favoriteDetails.map((item) => [item.id, item]));
    const collectionRef = firestore.collection(db, "users", firebaseUser.uid, "favorites");
    const snapshot = await firestore.getDocs(collectionRef);
    const batch = firestore.writeBatch(db);

    snapshot.docs.forEach((docSnapshot) => {
      if (!favoriteIds.has(docSnapshot.id)) {
        batch.delete(docSnapshot.ref);
      }
    });

    favorites.forEach((id) => {
      const item = details.get(id) || { id };
      batch.set(
        firestore.doc(db, "users", firebaseUser.uid, "favorites", id),
        {
          storyId: id,
          title: item.title || "",
          category: item.category || "",
          island: item.island || "",
          episodeCount: item.episodeCount || 0,
          updatedAt: firestore.serverTimestamp()
        },
        { merge: true }
      );
    });

    await batch.commit();
  }

  async function seedStories(stories) {
    if (!enabled || !ready || !Array.isArray(stories)) return { seeded: false, count: 0 };
    const snapshot = await firestore.getDocs(firestore.collection(db, "stories"));
    if (!snapshot.empty) return { seeded: false, count: snapshot.size };

    await Promise.all(stories.map((story) =>
      firestore.setDoc(
        firestore.doc(db, "stories", story.id),
        {
          ...story,
          audioUrl: story.audioUrl || "",
          createdAt: firestore.serverTimestamp(),
          updatedAt: firestore.serverTimestamp()
        },
        { merge: true }
      )
    ));
    return { seeded: true, count: stories.length };
  }

  function saveState(state) {
    if (!enabled || !ready || !firebaseUser) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      const cloudState = {
        selectedSeriesId: state.selectedSeriesId,
        selectedEpisodeId: state.selectedEpisodeId,
        favorites: state.favorites,
        subscribed: state.subscribed,
        packageId: state.packageId,
        selectedPackId: state.selectedPackId,
        selectedOfferId: state.selectedOfferId,
        selectedShoutoutProductId: state.selectedShoutoutProductId,
        comments: state.comments,
        shoutouts: state.shoutouts,
        submissions: state.submissions,
        reports: state.reports,
        approvedSubmissions: state.approvedSubmissions,
        publishedEpisodes: state.publishedEpisodes,
        reviewedPayouts: state.reviewedPayouts,
        timer: state.timer,
        listens: state.listens,
        listeningHistory: state.listeningHistory,
        language: state.language,
        elapsedSeconds: state.elapsedSeconds,
        progress: state.progress,
        lastPlayed: state.lastPlayed,
        user: state.user,
        guest: state.guest
      };
      await firestore.setDoc(
        firestore.doc(db, "appState", firebaseUser.uid),
        { state: cloudState, updatedAt: firestore.serverTimestamp() },
        { merge: true }
      );
    }, 350);
  }

  function status() {
    return enabled
      ? "Connected to Firebase Auth and Firestore."
      : "Local prototype storage. Firebase is not connected yet.";
  }

  window.CariDreamBackend = {
    init,
    loadState,
    loadAdminStatus,
    loadFavorites,
    loadStories,
    seedStories,
    saveFavorites,
    saveState,
    signInProfile,
    status,
    isEnabled: () => enabled
  };
})();
