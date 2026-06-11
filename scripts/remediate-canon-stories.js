require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");
const admin = require("firebase-admin");

const APPLY = String(process.env.CANON_REMEDIATION_APPLY || "").toLowerCase() === "true";
const CANON_VERSION = "2.4";

function requiredEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) throw new Error(`Missing required environment variable: ${name}`);
  return value.trim();
}

function loadServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }
  const filePath = path.resolve(requiredEnv("FIREBASE_SERVICE_ACCOUNT_PATH"));
  if (!fs.existsSync(filePath)) throw new Error(`Firebase service account file not found: ${filePath}`);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function initFirestore() {
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(loadServiceAccount()) });
  }
  return admin.firestore();
}

const plans = {
  "aruba-trade-wind-hummingbird": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule"],
    note: "Center Aruba's east-to-west trade winds and Divi-Divi direction.",
    metadata: {
      canonThread: "Trade Wind Guidance",
      canonGuardian: "Divi-Divi Spirits",
      spiritAffinity: [],
      description: "Across Aruba's open western horizon, the steady east-to-west trade wind guides a tired hummingbird toward the shelter of the Divi-Divi trees."
    }
  },
  "aruba-trade-wind-ep2-cactus-shadows": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Caribbean First", "Island Rule"],
    note: "Let desert patience emerge through image rather than explanation.",
    metadata: {
      canonThread: "Aruban Desert Nights",
      canonGuardian: "",
      spiritAffinity: ["Forest Spirit"],
      description: "In Aruba's moonlit desert, Noa discovers the quiet beauty held inside unfamiliar cactus shadows."
    },
    replacements: [[
      `Grandmother told him that people, too, could have prickly days. A tired person might speak sharply. A worried friend might seem distant. But inside, there might be a tender place waiting for kindness.

Noa leaned against her shoulder. The cacti stood around them like guardians.

On the walk home, the shadows no longer frightened him. They moved beside him in moonlight, long and gentle.

That night, Noa dreamed of cactus flowers opening under the stars. He dreamed that every sharp thing had a story, and every story deserved a little patience before fear decided what it saw.`,
      `Noa leaned against Grandmother's shoulder. Around them, the cacti held the last cool drops of forgotten rain, their long shadows resting across the pale desert stones.

On the walk home, those shadows no longer seemed sharp. They moved beside him in the moonlight, long and gentle, while the trade wind carried the faint scent of the sea.

That night, Noa dreamed of cactus flowers opening beneath the Aruban stars, soft petals unfolding where the desert had seemed still.`
    ]]
  },
  "aruba-trade-wind-ep3-palm-beach-midnight": {
    priority: "P2",
    rules: ["Island Rule"],
    note: "Distinguish Aruba's dry western coast from other worry-release stories.",
    metadata: {
      canonThread: "Aruban Western Shore",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"],
      description: "On Aruba's dry western coast, the cooling trade wind and wide midnight horizon help Palm Beach release the last warmth of the day."
    }
  },
  "aruba-trade-wind-ep4-lighthouse-goodnight": {
    priority: "P2",
    rules: ["Island Rule", "Caribbean First"],
    note: "Make maritime distance and the traveler-facing shore distinctive.",
    metadata: {
      canonThread: "Aruban Western Shore",
      canonGuardian: "",
      spiritAffinity: ["Fire Spirit"],
      description: "From Aruba's western shore, a lighthouse sends a quiet goodnight across the dark water to travelers far from home."
    }
  },
  "aruba-sleepy-divi-divi-tree": {
    priority: "P1",
    rules: ["Canon Hierarchy"],
    note: "The tree is a natural neighbor within the Divi-Divi Spirits' domain, not a new Guardian.",
    metadata: {
      canonThread: "Divi-Divi Nights",
      canonGuardian: "Divi-Divi Spirits",
      canonRoleNote: "The individual tree is a sacred natural neighbor, not a separate Guardian.",
      spiritAffinity: ["Forest Spirit"]
    }
  },
  "aruba-sleepy-divi-divi-tree-ep2": {
    priority: "P2",
    rules: ["Island Rule", "Major Series"],
    note: "Center the Shoco's distinctly Aruban night perspective.",
    metadata: {
      canonThread: "Divi-Divi Nights",
      canonGuardian: "Divi-Divi Spirits",
      spiritAffinity: ["Forest Spirit"],
      description: "A sleepy Shoco settles into the wind-shaped branches of a Divi-Divi tree and watches Aruba's desert night grow still."
    }
  },
  "bahamas-turtle-beneath-stars": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Canon Hierarchy", "Major Series", "Island Rule"],
    note: "Align the turtle with the Keeper of Ocean Stories and keep the lesson implicit.",
    metadata: {
      series: "Whispers of Stars Beneath the Sea",
      seriesTitle: "Whispers of Stars Beneath the Sea",
      episode: 1,
      episodeNumber: 1,
      canonGuardian: "The Sea Turtle",
      spiritAffinity: ["Water Spirit", "Star Spirit"]
    },
    replacements: [[
      `"You were steady," said Grandmother Turtle. "That is even better."

Luma looked up at the bright star and felt warmth in her little turtle heart. She understood then that not every journey must be rushed. Some paths are meant to be taken slowly, with the moon beside you and the stars showing just enough light for the next gentle stroke.`,
      `Grandmother Turtle touched her nose gently to Luma's shell, and together they looked toward the bright star reflected in the cove.

Luma remembered every quiet curve of sand, every silver ripple, and every gentle stroke that had brought her home. The route now rested inside her like an ocean story she could carry beneath her shell.`
    ]]
  },
  "bahamas-turtle-midnight-journey-ep2": {
    priority: "P1",
    rules: ["Caribbean First", "Canon Hierarchy", "Major Series"],
    note: "Place Maya within the Sea Turtle's canonical ocean-story series.",
    metadata: {
      series: "Whispers of Stars Beneath the Sea",
      seriesTitle: "Whispers of Stars Beneath the Sea",
      episode: 2,
      episodeNumber: 2,
      canonGuardian: "The Sea Turtle",
      canonRoleNote: "Maya carries and reveals ocean stories beneath the Bahamian moon.",
      spiritAffinity: ["Water Spirit", "Dream Spirit"],
      description: "Leo dreams of following Maya, keeper of a quiet ocean story, through Exuma's moonlit coral gardens and resting seagrass."
    }
  },
  "bahamas-whispering-casuarina-trees": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule"],
    note: "Preserve Eleuthera's Atlantic-edge and pink-sand identity.",
    metadata: {
      canonThread: "Eleuthera Shore Whispers",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit", "Forest Spirit"],
      description: "Along Eleuthera's pink-sand Atlantic shore, Chloe hears the Casuarina trees weave the night wind into a soft island lullaby."
    }
  },
  "bahamas-whispering-casuarina-trees-ep2": {
    priority: "P2",
    rules: ["Island Rule", "Major Series"],
    note: "Distinguish the sand-and-water song from the Casuarina episode.",
    metadata: {
      canonThread: "Eleuthera Shore Whispers",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit", "Dream Spirit"],
      description: "Chloe follows the Casuarina whisper to Eleuthera's moonlit pink sand, where tiny bubbles sing as the Atlantic meets the shore."
    }
  },
  "dominican-river-hummed": {
    priority: "P2",
    rules: ["Island Rule", "Caribbean First"],
    note: "Ground emotional release in a distinct Dominican river soundscape.",
    metadata: {
      canonThread: "River Lullabies",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"],
      description: "Beside a moonlit Dominican river, a child listens as the current hums through smooth stones and carries the evening gently onward."
    }
  },
  "dominican-river-ep2-mangoes-windowsill": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Major Series"],
    note: "Move the home-life story out of the river sequence and keep gratitude implicit.",
    metadata: {
      series: "Quisqueya Home Lullabies",
      seriesTitle: "Quisqueya Home Lullabies",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Home and Harvest",
      canonGuardian: "",
      spiritAffinity: ["Forest Spirit"]
    },
    replacements: [[
      `"It came," Lucia whispered.

"Yes," Grandmother said. "And while we waited, we noticed all the blessings already keeping us company."

That night, Lucia fell asleep to rain on the roof and the river below. She dreamed of mangoes glowing on windowsills, of clouds arriving kindly, and of gratitude turning a simple evening into something golden.`,
      `"It came," Lucia whispered.

Grandmother smiled and placed the last golden slice between them.

That night, Lucia fell asleep to rain on the roof and the river below. She dreamed of mangoes glowing on windowsills, of her grandmother's quiet laughter, and of one simple evening shining softly in her memory.`
    ]]
  },
  "dominican-river-ep3-soft-road-samana": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule", "Major Series"],
    note: "Separate the Samana journey from river and anti-hurry stories.",
    metadata: {
      series: "Roads of Quisqueya",
      seriesTitle: "Roads of Quisqueya",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Samana Journey",
      canonGuardian: "",
      spiritAffinity: ["Star Spirit"],
      description: "A soft road winds toward Samana through green hills, coconut shadows, and the first salt breeze from the bay."
    }
  },
  "dominican-river-ep4-rain-over-yunque-del-sur": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Caribbean First", "Island Rule"],
    note: "Let the southern rain hold the emotion without explaining it.",
    metadata: {
      series: "Rain Songs of Quisqueya",
      seriesTitle: "Rain Songs of Quisqueya",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Southern Hills",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"]
    },
    replacements: [[
      `"What if the feeling stays?" she asked.

Father held out his hand and let rain gather in his palm. "Then we sit with it kindly. We do not chase it. We do not shame it. We let it speak, and then we let it move."`,
      `"What if the feeling stays?" she asked.

Father held out his hand and let rain gather in his palm. "Then I will sit here with you for as long as the rain wishes to stay."`
    ], [
      `"See?" Father said. "The sky is still the sky, even when clouds pass over it. You are still you, even when feelings pass through."

That night, Elena slept with the window open. Drops fell from the roof in a slow rhythm. The hills rested under mist, washed and peaceful.

She dreamed of clouds becoming rain, rain becoming river, and river becoming song. And in the dream she knew that every feeling could be held with tenderness until it found its way onward.`,
      `Father squeezed her hand. Beyond the wet leaves, the pale moonlight widened quietly across the hills.

That night, Elena slept with the window open. Drops fell from the roof in a slow rhythm. The hills rested under mist, washed and peaceful.

She dreamed of clouds becoming rain, rain becoming river, and river becoming a low, silver song beneath the Dominican moon.`
    ]]
  },
  "dominican-republic-constanza-blanket-stars": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule", "Major Series"],
    note: "Center Constanza's altitude, fog, farms, and cool air.",
    metadata: {
      series: "Constanza Valley Nights",
      seriesTitle: "Constanza Valley Nights",
      episode: 1,
      episodeNumber: 1,
      canonThread: "High Valley",
      canonGuardian: "",
      spiritAffinity: ["Star Spirit", "Dream Spirit"]
    }
  },
  "dominican-republic-constanza-stars-ep2": {
    priority: "P2",
    rules: ["Island Rule", "Major Series"],
    note: "Make the field chorus the sequel's defining identity.",
    metadata: {
      series: "Constanza Valley Nights",
      seriesTitle: "Constanza Valley Nights",
      episode: 2,
      episodeNumber: 2,
      canonThread: "High Valley",
      canonGuardian: "",
      spiritAffinity: ["Dream Spirit"],
      description: "Across Constanza's cool cultivated valley, a chorus of tiny field crickets rises beneath the fog and stars."
    }
  },
  "dominican-river-ep6-jarabacoa-mist": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule", "Major Series"],
    note: "Distinguish Jarabacoa's pine country and waterfall-carried mist.",
    metadata: {
      series: "Jarabacoa Mountain Dreams",
      seriesTitle: "Jarabacoa Mountain Dreams",
      episode: 2,
      episodeNumber: 2,
      canonThread: "Mountain Water",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit", "Dream Spirit"]
    }
  },
  "dominican-river-ep5-jarabacoa-waltz": {
    priority: "P3",
    rules: ["Major Series"],
    note: "Keep the Jarabacoa waterfall and mist episodes together in chronological order.",
    metadata: {
      series: "Jarabacoa Mountain Dreams",
      seriesTitle: "Jarabacoa Mountain Dreams",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Mountain Water",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"]
    }
  },
  "haiti-citadel-moonlight": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Caribbean First", "Lore Vault Rule"],
    note: "Let the Citadel's post-independence meaning emerge through place and family memory.",
    metadata: {
      canonThread: "Northern Freedom Memory",
      canonGuardian: "",
      spiritAffinity: ["Star Spirit"],
      culturalReview: "Reviewed conservatively against UNESCO National History Park context."
    },
    replacements: [[
      `Grandfather placed a gentle hand on Jonas's shoulder.

"Strength can be peaceful too," he said.

Jonas listened to the mountain.`,
      `Grandfather placed a gentle hand on Jonas's shoulder.

"Listen," he said softly. "The old stones are quiet tonight."

Jonas listened to the mountain.`
    ]]
  },
  "haiti-citadel-ep2-lanterns-cap-haitien": {
    priority: "P1",
    rules: ["Caribbean First", "Island Rule", "Lore Vault Rule"],
    note: "Keep memory rooted in Cap-Haitien rather than a universal lantern lesson.",
    metadata: {
      canonThread: "Northern Freedom Memory",
      canonGuardian: "",
      spiritAffinity: ["Fire Spirit", "Star Spirit"],
      culturalReview: "Historical language kept broad and respectful; no new factual claim added."
    },
    replacements: [[
      `"History is not only in books," he said. "It is also in the way a place remembers footsteps."

Solene looked down at the stones beneath her sandals. She imagined all the feet that had passed there, all the hopes, all the songs, all the tired people who still found a way to greet the morning.`,
      `"These stones have heard many footsteps," he said.

Solene looked down beneath her sandals. She imagined baskets passing in the morning, fishing ropes drawn across the harbor, songs drifting from open windows, and generations greeting one another along the same Cap-Haitien streets.`
    ], [
      `"Some stories are heavy," he said. "But we carry them with care, not fear. We carry them like lanterns."`,
      `Grandfather watched the lantern glow against the harbor water. "We hold these stories carefully," he said.`
    ]]
  },
  "haiti-citadel-ep3-mountain-keeps-watch": {
    priority: "P1",
    rules: ["Canon Hierarchy", "Caribbean First", "Island Rule"],
    note: "Keep the mountain as landscape and memory, not an undeclared Guardian.",
    metadata: {
      canonThread: "Northern Freedom Memory",
      canonGuardian: "",
      canonRoleNote: "The mountain is a symbolic landscape, not a formal Guardian.",
      spiritAffinity: ["Star Spirit"]
    },
    replacements: [[
      `They reached a lookout as the sun began to lift. The valleys opened below them, soft with mist. Birds crossed the pale sky. The mountain seemed to breathe.`,
      `They reached a lookout as the sun began to lift. The valleys opened below them, soft with mist. Birds crossed the pale sky, and a cool breath of wind moved along the mountain grass.`
    ], [
      `"The mountain keeps watch," she said. "But we keep memory."`,
      `"The mountain gives us a wide view," she said. "We are the ones who carry the memory."`
    ], [
      `That night, tucked beneath his blanket, he dreamed of a mountain under moonlight. It watched without fear. It remembered without anger. It stood with patience, teaching that courage can be quiet and still be strong.`,
      `That night, tucked beneath his blanket, he dreamed of the mountain under moonlight, its old paths pale and quiet above the sleeping valleys.`
    ]]
  },
  "haiti-citadel-ep4-drums-beneath-stars": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Caribbean First", "Lore Vault Rule"],
    note: "Keep the intimate family rhythm while avoiding a generic cultural moral.",
    metadata: {
      canonThread: "Northern Freedom Memory",
      canonGuardian: "",
      spiritAffinity: ["Fire Spirit", "Star Spirit"],
      culturalReview: "The revision makes no claim about a named sacred rhythm or ceremony."
    },
    replacements: [[
      `He told a story of people who held on to song when days were hard, who passed courage through rhythm, who taught children that memory could be carried with dignity.`,
      `He told a family story his own grandmother had shared with him, pausing whenever the drum paused and smiling whenever the children recognized a familiar name.`
    ], [
      `"Yes," Mother said. "A very old heart. Still loving us."`,
      `"Yes," Mother said. "And tonight, you are resting close enough to hear it."`
    ], [
      `She dreamed that every rhythm was a reminder: you belong, you are loved, and you come from people whose hearts kept time beneath the stars.`,
      `She dreamed of the rhythm moving gently through the circle, from Grandmother's listening hands to Mother's quiet smile, and at last into her own sleeping heart.`
    ]]
  },
  "haiti-firefly-dance-jacmel": {
    priority: "P1",
    rules: ["Major Series", "Caribbean First", "Island Rule"],
    note: "Separate Jacmel's southern artistic identity from Citadel Dreams.",
    metadata: {
      series: "Golden Nights of Jacmel",
      seriesTitle: "Golden Nights of Jacmel",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Jacmel Art and Light",
      canonGuardian: "",
      spiritAffinity: ["Dream Spirit"]
    }
  },
  "haiti-firefly-dance-jacmel-ep2": {
    priority: "P1",
    rules: ["Major Series", "Caribbean First", "Island Rule"],
    note: "Make coastal reflection the second Jacmel episode.",
    metadata: {
      series: "Golden Nights of Jacmel",
      seriesTitle: "Golden Nights of Jacmel",
      episode: 2,
      episodeNumber: 2,
      canonThread: "Jacmel Art and Light",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit", "Dream Spirit"]
    }
  },
  "anansi-adventures-ep1-moonlight-mango": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule"],
    note: "Let sharing transform the scene without a stated moral.",
    metadata: {
      canonThread: "Anansi Community Adventures",
      canonGuardian: "",
      canonRoleNote: "Anansi is a Folk Figure, not a Guardian.",
      spiritAffinity: ["Dream Spirit"]
    },
    replacements: [[
      `That night Anansi learned that joy does not shrink when shared. Joy grows. It grows like fruit after rain, like laughter in a yard, like moonlight over the sea.

And from then on, whenever the moon was full and mangoes smelled sweet in the hills, Anansi invited the village to climb with him.`,
      `Anansi looked from the empty peels to the smiling faces around him. The mango in his own hand was smaller than the one he had hidden beside his bed, yet the whole hillside felt wonderfully full.

And after that, whenever the moon was full and mangoes smelled sweet in the hills, Anansi found himself calling the village before anyone could ask.`
    ]]
  },
  "SvxzCUPfaAC9u1Rcr0Rl": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule", "Major Series"],
    note: "Let Anansi's unusual stillness reveal the shared magic.",
    metadata: {
      canonThread: "Anansi Community Adventures",
      canonGuardian: "",
      canonRoleNote: "Anansi is a Folk Figure, not a Guardian.",
      spiritAffinity: ["Dream Spirit"]
    },
    replacements: [[
      `And Anansi learned that the best kind of magic is often the kind everyone can share.`,
      `Across the village, no basket could hold the moonlight, yet every roof, mango leaf, and resting window received its silver glow. Anansi smiled at that.`
    ]]
  },
  "anansi-adventures-ep3-firefly-lantern": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule", "Caribbean First"],
    note: "Keep the firefly episode rooted in Anansi's promise and community.",
    metadata: {
      canonThread: "Anansi Community Adventures",
      canonGuardian: "",
      canonRoleNote: "Anansi is a Folk Figure, not a Guardian.",
      spiritAffinity: ["Fire Spirit"]
    },
    replacements: [[
      `"You see?" said the firefly. "One little light is small. But many little lights can make a place feel safe."`,
      `The firefly blinked once beside Anansi. Around them, hundreds of answering lights opened and closed among the guava leaves until the whole hill felt warm and near.`
    ], [
      `That night, as the children walked home, the fireflies floated beside them like tiny blessings. And Anansi learned that the best light is not always the one we hold. Sometimes it is the one we follow, the one we share, the one that helps everyone find the path home.`,
      `That night, as the children walked home, the fireflies floated beside them like tiny blessings. Anansi carried no jar at all. He carried the sound of the children's laughter and one new story already growing clever inside him.`
    ]]
  },
  "anansi-adventures-ep4-talking-breadfruit": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Canon Hierarchy", "Island Rule"],
    note: "Keep the breadfruit playful rather than giving it a Guardian's authority.",
    metadata: {
      canonThread: "Anansi Community Adventures",
      canonGuardian: "",
      canonRoleNote: "The talking breadfruit is a playful story character, not a Guardian or Great Spirit.",
      spiritAffinity: ["Forest Spirit"]
    },
    replacements: [[
      `"Good. Listening is a doorway. Wisdom often waits on the other side."

Anansi rubbed his chin. "So if I listen, I may learn more?"

"Yes. And if you listen before you speak, your words may become kinder."`,
      `"Well now," the breadfruit murmured, "you heard all of that while your own mouth was resting."

Anansi rubbed his chin. He had never considered that silence might be playing a trick on him.`
    ], [
      `Above them, the breadfruit tree rustled proudly.

And from that day on, whenever Anansi felt a speech growing too big in his mouth, he sat beneath the breadfruit tree, breathed softly, and remembered that wisdom does not always shout.

Sometimes it hangs quietly in the leaves, waiting for a listening heart.`,
      `Above them, the breadfruit leaves rustled, though Anansi could not tell whether the tree was laughing or simply enjoying the breeze.

And whenever a speech grew too big in his mouth after that, Anansi sometimes returned to the same shady place. He would listen just long enough for a better story to find room beside his own.`
    ]]
  },
  "jamaica-blue-mountain-peak-moon": {
    priority: "P1",
    rules: ["Island Rule", "Major Series"],
    note: "Use as the landscape prelude to the Doctor Bird sequence.",
    metadata: {
      series: "Doctor Bird: Blue Mountain Whispers",
      seriesTitle: "Doctor Bird: Blue Mountain Whispers",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Blue Mountain Prelude",
      canonGuardian: "",
      spiritAffinity: ["Forest Spirit", "Dream Spirit"]
    }
  },
  "jamaica-lullaby-doctor-bird": {
    priority: "P1",
    rules: ["Island Rule", "Major Series", "Canon Hierarchy"],
    note: "Establish the definitive Doctor Bird origin episode.",
    metadata: {
      series: "Doctor Bird: Blue Mountain Whispers",
      seriesTitle: "Doctor Bird: Blue Mountain Whispers",
      episode: 2,
      episodeNumber: 2,
      canonThread: "Doctor Bird Origin",
      canonGuardian: "",
      canonRoleNote: "The Doctor Bird is an Island Legend, not a Guardian.",
      spiritAffinity: ["Forest Spirit"]
    }
  },
  "jamaica-golden-glow-treasure-beach": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule", "Major Series"],
    note: "Preserve Treasure Beach's working-coast identity.",
    metadata: {
      series: "Treasure Beach Moon Tides",
      seriesTitle: "Treasure Beach Moon Tides",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Working Coast",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"]
    }
  },
  "jamaica-golden-glow-treasure-beach-ep2": {
    priority: "P2",
    rules: ["Island Rule", "Major Series"],
    note: "Distinguish canoe craft and pebble-shore sounds.",
    metadata: {
      series: "Treasure Beach Moon Tides",
      seriesTitle: "Treasure Beach Moon Tides",
      episode: 2,
      episodeNumber: 2,
      canonThread: "Working Coast",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit"],
      description: "Brightly painted fishing canoes settle above the tide while moonlight and rolling pebbles quiet Treasure Beach."
    }
  },
  "jamaica-lullaby-doctor-bird-ep2": {
    priority: "P1",
    rules: ["Island Rule", "Major Series"],
    note: "Position as the moonlight-mist sequel to the Doctor Bird origin.",
    metadata: {
      series: "Doctor Bird: Blue Mountain Whispers",
      seriesTitle: "Doctor Bird: Blue Mountain Whispers",
      episode: 3,
      episodeNumber: 3,
      canonThread: "Doctor Bird Moonlight Sequel",
      canonGuardian: "",
      canonRoleNote: "The Doctor Bird is an Island Legend, not a Guardian.",
      spiritAffinity: ["Forest Spirit", "Dream Spirit"]
    }
  },
  "jamaica-sleepy-blue-mountains": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule", "Major Series"],
    note: "Position as a breathing meditation sequel; defer optional remaster.",
    metadata: {
      series: "Doctor Bird: Blue Mountain Whispers",
      seriesTitle: "Doctor Bird: Blue Mountain Whispers",
      episode: 4,
      episodeNumber: 4,
      canonThread: "Blue Mountain Breathing Meditation",
      canonGuardian: "",
      canonRoleNote: "The Doctor Bird is an Island Legend, not a Guardian.",
      spiritAffinity: ["Forest Spirit", "Dream Spirit"]
    }
  },
  "saint-lucia-lantern-castries-bay": {
    priority: "P2",
    rules: ["Caribbean First", "Island Rule"],
    note: "Center Castries harbor life and Saint Lucian homecoming.",
    metadata: {
      canonThread: "Castries Harbor Nights",
      canonGuardian: "",
      spiritAffinity: ["Fire Spirit", "Water Spirit"],
      description: "A familiar lantern glows across Castries Bay as boats settle in the harbor and the city turns gently toward home."
    }
  },
  "saint-lucia-shadows-twin-pitons": {
    priority: "P2",
    rules: ["Canon Hierarchy"],
    note: "The Pitons are a monumental landscape, not formal Guardians.",
    metadata: {
      canonThread: "Piton Moon",
      canonGuardian: "",
      canonRoleNote: "The Pitons are a revered landscape and symbolic presence, not formal Guardians.",
      spiritAffinity: ["Forest Spirit", "Star Spirit"]
    }
  },
  "saint-lucia-shadows-twin-pitons-ep2": {
    priority: "P2",
    rules: ["Island Rule", "Major Series"],
    note: "Make boats, tide, and the moonbeam define the sequel.",
    metadata: {
      canonThread: "Piton Moon",
      canonGuardian: "",
      spiritAffinity: ["Water Spirit", "Star Spirit"],
      description: "A long moonbeam crosses Soufrière Bay, touching resting boats and the water beneath the silent Twin Pitons."
    }
  },
  "saint-lucia-secrets-rainforest-trail": {
    priority: "P2",
    rules: ["Major Series", "Caribbean First", "Island Rule"],
    note: "Separate Saint Lucia's wet-forest music from the Piton sequence.",
    metadata: {
      series: "Rainforest Songs of Saint Lucia",
      seriesTitle: "Rainforest Songs of Saint Lucia",
      episode: 1,
      episodeNumber: 1,
      canonThread: "Wet Forest Nights",
      canonGuardian: "",
      spiritAffinity: ["Forest Spirit", "Water Spirit"]
    }
  },
  "saint-lucia-secrets-rainforest-trail-ep2": {
    priority: "P1",
    rules: ["Island Rule", "Canon Hierarchy", "Major Series"],
    note: "Define bamboo as Saint Lucian natural music rather than a teaching Guardian.",
    metadata: {
      series: "Rainforest Songs of Saint Lucia",
      seriesTitle: "Rainforest Songs of Saint Lucia",
      episode: 2,
      episodeNumber: 2,
      canonThread: "Wet Forest Music",
      canonGuardian: "",
      canonRoleNote: "The bamboo is a natural instrument of the wind, not a Guardian or teacher.",
      spiritAffinity: ["Forest Spirit", "Dream Spirit"]
    }
  },
  "trinidad-papa-bois-whispering-silk-cotton": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Caribbean First", "Lore Vault Rule"],
    note: "Preserve the gentle Silk Cotton exchange while reducing direct listener instruction.",
    metadata: {
      canonThread: "Forest Wisdom",
      canonGuardian: "Papa Bois",
      spiritAffinity: ["Forest Spirit"],
      culturalReview: "CariDream interpretation; no claim of a universal Trinidadian belief."
    },
    replacements: [[
      `Simply notice them.

Then breathe in slowly.

And breathe out gently.

Imagine the warm night wind moving through the leaves.

Shhh...

Let it lift one worry.

Then another.

Then another.

Watch them float softly into the moonlit sky until your branches feel lighter and your thoughts become still.

The night is here to help you rest.

The moon is watching quietly.

The earth is holding you safely.

And just as the Trinidad rainforest rests beneath the stars, you can rest too.

Good night, little dreamer.`,
      `The warm night wind moved through the Silk Cotton leaves.

Shhh...

One silver leaf lifted.

Then another.

Then another.

Papa Bois watched them turn slowly through the moonlight until the great branches rested easily above him.

The rainforest breathed beneath the stars.

The moon shone quietly through the canopy.

And in that deep, gentle stillness, the old tree, Papa Bois, and every listening heart were free to rest.

Good night, little dreamer.`
    ]]
  },
  "trinidad-papa-bois-sleeping-bamboo": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule", "Major Series"],
    note: "Let the canonical bamboo relationship reveal rest through action.",
    metadata: {
      canonThread: "Forest Wisdom",
      canonGuardian: "Papa Bois",
      spiritAffinity: ["Forest Spirit"]
    },
    replacements: [[
      `All through the night, the bamboo's peaceful melody reminded the forest that rest is not weakness.

Rest is how roots gather strength.

Rest is how new leaves prepare to open.

Rest is part of growing.

So if you have been moving all day, little dreamer, you may become still now.

The wind will remember you.

The moon will remain above you.

And morning will find you rested, renewed, and ready to grow.`,
      `All through the night, the bamboo's peaceful melody moved between the trees.

Deep below the earth, its roots rested in the cool soil.

High above, one new leaf remained folded beneath the moon, waiting quietly for morning.

The wind still knew the grove.

The moon still found every silver-green stalk.

Nothing had been forgotten while the bamboo slept.`
    ]]
  },
  "trinidad-papa-bois-moonlit-river": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule"],
    note: "Keep Papa Bois relational and remove the direct anti-hurry instruction before first narration.",
    metadata: {
      canonThread: "Forest Wisdom",
      canonGuardian: "Papa Bois",
      spiritAffinity: ["Forest Spirit", "Water Spirit"]
    },
    replacements: [[
      `And if your thoughts are rushing tonight, little dreamer, imagine placing them upon this moonlit river.

You do not need to carry them all the way to tomorrow.

Let them float gently around each bend while you rest safely here.

Your journey will continue when morning comes.

For now, there is nowhere else you need to be.`,
      `Papa Bois watched the river touch the fern roots, circle the resting stones, and carry a fallen flower gently around the bend.

Nothing along its banks asked it to arrive sooner.

The river simply held each part of the forest for one quiet moment before flowing on.`
    ]]
  },
  "trinidad-papa-bois-firefly-path": {
    priority: "P1",
    rules: ["Never Teach the Lesson", "Island Rule"],
    note: "Let the agouti discover the next step without an explanatory conclusion before first narration.",
    metadata: {
      canonThread: "Forest Wisdom",
      canonGuardian: "Papa Bois",
      spiritAffinity: ["Forest Spirit", "Star Spirit"]
    },
    replacements: [[
      `And if the way ahead feels uncertain for you, little dreamer, remember the firefly path.

You do not need to see the whole journey before you close your eyes.

There will be light when it is time to take the next step.

For now, let the darkness be soft around you.

Let each quiet breath be a tiny golden lantern leading you deeper into rest.`,
      `The agouti looked back once at the winding trail.

It could not see every turn from its doorway.

But one firefly still glowed beside the first tree, and farther away another tiny light answered.

The darkness between them felt soft now, filled with quiet places where the next light could appear.`
    ]]
  }
};

function applyReplacements(text, replacements, id, field) {
  let revised = text;
  for (const [oldText, newText] of replacements || []) {
    if (revised.includes(oldText)) {
      revised = revised.replace(oldText, newText);
      continue;
    }
    if (!revised.includes(newText)) {
      throw new Error(`${id}.${field}: expected text was not found; no partial revision was applied.`);
    }
  }
  return revised;
}

function sanitizeForBackup(value) {
  if (value && typeof value.toDate === "function") return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(sanitizeForBackup);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, sanitizeForBackup(item)]));
  }
  return value;
}

async function main() {
  const db = initFirestore();
  const ids = Object.keys(plans);
  const snapshot = await db.collection("stories").get();
  const docsById = new Map(snapshot.docs.map((doc) => [doc.id, doc]));
  const missing = ids.filter((id) => !docsById.has(id));
  if (missing.length) throw new Error(`Missing Firestore documents: ${missing.join(", ")}`);

  const backup = {};
  const changes = [];
  for (const id of ids) {
    const doc = docsById.get(id);
    const current = doc.data();
    const plan = plans[id];
    backup[id] = sanitizeForBackup(current);

    const update = {
      ...plan.metadata,
      canonVersion: CANON_VERSION,
      canonPriority: plan.priority,
      canonRulesAffected: plan.rules,
      canonRevisionNote: plan.note,
      canonReviewStatus: "aligned",
      canonUpdatedAt: admin.firestore.FieldValue.serverTimestamp()
    };

    let textChanged = false;
    for (const field of ["storyContent", "story"]) {
      if (typeof current[field] !== "string" || !current[field].trim() || !plan.replacements) continue;
      const revised = applyReplacements(current[field], plan.replacements, id, field);
      if (revised !== current[field]) {
        update[field] = revised;
        textChanged = true;
      }
    }

    if (textChanged) {
      update.narrationStatus = "pending";
      update.narrationTextRevision = `Canon ${CANON_VERSION}`;
      update.narrationTextUpdatedAt = admin.firestore.FieldValue.serverTimestamp();
    }

    changes.push({
      id,
      title: current.title || "",
      priority: plan.priority,
      textChanged,
      hasAudio: typeof current.audioUrl === "string" && /^https?:\/\//i.test(current.audioUrl.trim()),
      update
    });
  }

  const backupDir = path.resolve("backups");
  fs.mkdirSync(backupDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(backupDir, `canon-remediation-${stamp}.json`);
  fs.writeFileSync(backupPath, JSON.stringify({
    createdAt: new Date().toISOString(),
    canonVersion: CANON_VERSION,
    applied: APPLY,
    stories: backup
  }, null, 2));

  console.log(`Mode: ${APPLY ? "APPLY" : "DRY RUN"}`);
  console.log(`Backup: ${backupPath}`);
  console.table(changes.map(({ id, title, priority, textChanged, hasAudio }) => ({
    id, title, priority, textChanged, hasAudio
  })));

  if (!APPLY) {
    console.log("Dry run complete. Set CANON_REMEDIATION_APPLY=true to write these updates.");
    return;
  }

  for (const change of changes) {
    await docsById.get(change.id).ref.update(change.update);
    console.log(`Updated ${change.id}: ${change.title}`);
  }

  console.log(`Canon remediation complete: ${changes.length} stories updated.`);
  console.log(`Text revisions requiring narration: ${changes.filter((item) => item.textChanged).length}`);
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
