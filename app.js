const categories = [
  ["Caribbean Folktales", "*"],
  ["Island History", "O"],
  ["Bedtime Stories", "C"],
  ["Inspirational Stories", "+"],
  ["Family Stories", "&"],
  ["Funny Stories", ":)"],
  ["Cultural Legends", "<>"]
];

const fallbackSeries = [
  {
    id: "anansi-moonlight-tricks",
    title: "Anansi's Moonlight Tricks",
    category: "Caribbean Folktales",
    island: "Jamaica",
    mood: "Playful",
    narrator: "Auntie Marva",
    icon: "*",
    package: "Dreamer Plus",
    summary: "A gentle folklore series where Anansi learns that cleverness feels better when it is kind.",
    detail: "Soft drums, night insects, and a warm island voice carry this family-friendly folktale season about cleverness, humility, and sharing light.",
    episodes: [
      { id: "anansi-ep1", title: "The Net for Moonbeams", duration: 14, free: true, description: "Anansi tries to catch moonlight for the village children." },
      { id: "anansi-ep2", title: "The Mango Tree Promise", duration: 16, free: true, description: "A sleepy promise becomes a lesson in patience." },
      { id: "anansi-ep3", title: "Crab's Quiet Bargain", duration: 18, free: false, description: "Crab helps Anansi slow down before a plan goes too far." },
      { id: "anansi-ep4", title: "The Drum Under the Stars", duration: 21, free: false, description: "The village gathers for a moonlit ending." }
    ]
  },
  {
    id: "blue-mountain-sleep",
    title: "Blue Mountain Sleep Season",
    category: "Bedtime Stories",
    island: "Jamaica",
    mood: "Sleepy",
    narrator: "Noel Ellis",
    icon: "C",
    package: "Dreamer Plus",
    summary: "Mist, tea leaves, rainfall, and quiet wishes for listeners who want a slow bedtime ritual.",
    detail: "A breath-led bedtime series with soft rainfall, mountain air, and calm pacing made for winding down.",
    episodes: [
      { id: "blue-ep1", title: "Fireflies Above the Tea Leaves", duration: 17, free: true, description: "A child counts fireflies while the mountains settle." },
      { id: "blue-ep2", title: "Rain on the Zinc Roof", duration: 22, free: true, description: "A slow rainy-night story with gentle breathing pauses." },
      { id: "blue-ep3", title: "The Lantern Road Home", duration: 24, free: false, description: "Moonlit paths guide the listener toward sleep." },
      { id: "blue-ep4", title: "Mist Before Morning", duration: 29, free: false, description: "A longer premium episode for deep rest." }
    ]
  },
  {
    id: "queen-nanny-resilience",
    title: "Queen Nanny: Night Lessons",
    category: "Island History",
    island: "Jamaica",
    mood: "Reflective",
    narrator: "Dr. Elise Baptiste",
    icon: "O",
    package: "Heritage Premium",
    summary: "A reverent history series about courage, memory, and Maroon resilience.",
    detail: "History becomes intimate in this narrated experience, told with care for families, diaspora listeners, and curious adults.",
    episodes: [
      { id: "nanny-ep1", title: "A Mountain Keeps a Secret", duration: 19, free: true, description: "An accessible opening to Nanny's world and legacy." },
      { id: "nanny-ep2", title: "Signals in the Valley", duration: 27, free: false, description: "A premium episode about strategy, community, and courage." },
      { id: "nanny-ep3", title: "The Wind Remembers", duration: 31, free: false, description: "A reflective story about memory carried across generations." }
    ]
  },
  {
    id: "douen-shore-legends",
    title: "Moonlit Legends of the Shore",
    category: "Cultural Legends",
    island: "Trinidad",
    mood: "Mysterious",
    narrator: "Talia Joseph",
    icon: "<>",
    package: "Dreamer Plus",
    summary: "Softened legends about listening to elders, following safe paths, and finding your way home.",
    detail: "Folklore is shaped into a safe bedtime atmosphere with ocean hushes, bamboo creaks, and a caring narrator.",
    episodes: [
      { id: "douen-ep1", title: "The Footprints at Low Tide", duration: 15, free: true, description: "A gentle first legend about listening closely." },
      { id: "douen-ep2", title: "Bamboo That Sang Back", duration: 19, free: false, description: "A premium legend with soft soundscapes and a calm ending." },
      { id: "douen-ep3", title: "Home Before the Moon Sets", duration: 23, free: false, description: "A reassuring family episode about returning home." }
    ]
  },
  {
    id: "sunday-kitchen-family",
    title: "Sunday Kitchen Stories",
    category: "Funny Stories",
    island: "Barbados",
    mood: "Light",
    narrator: "Uncle Ren",
    icon: ":)",
    package: "Family Premium",
    summary: "Sleepy, funny family tales full of plantain, cousins, and small kitchen surprises.",
    detail: "A smile-before-sleep series for children and families, full of gentle humor and familiar kitchen sounds.",
    episodes: [
      { id: "kitchen-ep1", title: "The Plantain Pancake Parade", duration: 13, free: true, description: "A breakfast mix-up turns into a neighborhood laugh." },
      { id: "kitchen-ep2", title: "Cousin Jo and the Pepper Pot", duration: 15, free: true, description: "A soft comic story about helping too quickly." },
      { id: "kitchen-ep3", title: "The Sleepy Market Basket", duration: 18, free: false, description: "A premium family episode for winding down together." }
    ]
  },
  {
    id: "letters-from-castries",
    title: "Letters from Castries",
    category: "Family Stories",
    island: "Saint Lucia",
    mood: "Tender",
    narrator: "Mireille James",
    icon: "&",
    package: "Family Premium",
    summary: "A grandmother's letters connect three generations across water, memory, and bedtime rituals.",
    detail: "A family story series about migration, belonging, and the comfort of hearing home in someone's voice.",
    episodes: [
      { id: "castries-ep1", title: "The First Letter", duration: 18, free: true, description: "A child hears a bedtime letter from Saint Lucia." },
      { id: "castries-ep2", title: "The Voice Note", duration: 24, free: false, description: "A premium episode about missing home and making ritual." },
      { id: "castries-ep3", title: "Three Windows Open", duration: 28, free: false, description: "Three generations share the same night sky." }
    ]
  },
  {
    id: "mangrove-breath",
    title: "Mangrove Breath",
    category: "Inspirational Stories",
    island: "Belize",
    mood: "Grounding",
    narrator: "Kai Alvarez",
    icon: "+",
    package: "Dreamer Plus",
    summary: "Meditative stories about roots, tides, and beginning again after a hard day.",
    detail: "Part guided reflection and part nature story, designed for adults who want a calm reset before sleep.",
    episodes: [
      { id: "mangrove-ep1", title: "Roots Below the Water", duration: 16, free: true, voice: "Browser Voice", description: "A grounding story with slow breathing cues." },
      { id: "mangrove-ep2", title: "The Tide Comes Softly", duration: 20, free: false, voice: "Browser Voice", description: "A premium meditation on change and rest." },
      { id: "mangrove-ep3", title: "Morning Can Wait", duration: 25, free: false, voice: "Browser Voice", description: "A longer wind-down episode for anxious nights." }
    ]
  },
  {
    id: "haiti-citadel-dreams",
    title: "Citadel Dreams",
    category: "Island History",
    island: "Haiti",
    mood: "Majestic",
    narrator: "Browser Voice",
    icon: "O",
    package: "Heritage Premium",
    summary: "Quiet historical journeys through Haitian resilience, mountain air, and moonlit stone.",
    detail: "A calm history series that honors Haiti's strength while keeping the tone restful and accessible.",
    episodes: [
      { id: "haiti-ep1", title: "Steps Toward the Citadel", duration: 18, free: true, voice: "Browser Voice", description: "A soft introduction to a mountain path and the stories held in stone." },
      { id: "haiti-ep2", title: "Lanterns of Cap-Haitien", duration: 24, free: false, voice: "Browser Voice", description: "A premium night walk through memory, sea breeze, and historic streets." },
      { id: "haiti-ep3", title: "Drums Beneath the Stars", duration: 28, free: false, voice: "Browser Voice", description: "A reflective episode about freedom, rhythm, and remembrance." }
    ]
  },
  {
    id: "dominican-river-lullabies",
    title: "River Lullabies of Quisqueya",
    category: "Bedtime Stories",
    island: "Dominican Republic",
    mood: "Restful",
    narrator: "Browser Voice",
    icon: "C",
    package: "Dreamer Plus",
    summary: "Gentle bedtime stories carried by river sounds, palms, and warm Dominican nights.",
    detail: "A Spanish Caribbean-inspired sleep series with soft pacing, family warmth, and calm nature imagery.",
    episodes: [
      { id: "dr-ep1", title: "The River That Hummed", duration: 15, free: true, voice: "Browser Voice", description: "A child follows a humming river toward a peaceful dream." },
      { id: "dr-ep2", title: "Mangoes on the Windowsill", duration: 19, free: false, voice: "Browser Voice", description: "A premium family story about gratitude and sleepy summer rain." },
      { id: "dr-ep3", title: "The Soft Road to Samana", duration: 23, free: false, voice: "Browser Voice", description: "A long, soothing coastal journey designed for winding down." }
    ]
  },
  {
    id: "puerto-rico-coqui-nights",
    title: "Coqui Nights",
    category: "Family Stories",
    island: "Puerto Rico",
    mood: "Tender",
    narrator: "Browser Voice",
    icon: "&",
    package: "Family Premium",
    summary: "Family bedtime stories where coqui songs, abuelas, and moonlit balconies bring everyone close.",
    detail: "A gentle Puerto Rican family series for children, adults, and diaspora listeners missing familiar night sounds.",
    episodes: [
      { id: "pr-ep1", title: "The First Coqui Song", duration: 14, free: true, voice: "Browser Voice", description: "A small coqui helps a child feel safe away from home." },
      { id: "pr-ep2", title: "Abuela's Blue Balcony", duration: 20, free: false, voice: "Browser Voice", description: "A premium episode about stories passed down in the evening air." },
      { id: "pr-ep3", title: "Rain Over El Yunque", duration: 25, free: false, voice: "Browser Voice", description: "A dreamy rainforest episode with a slow, sleepy cadence." }
    ]
  },
  {
    id: "cuba-malecon-moon",
    title: "Moon Over the Malecon",
    category: "Inspirational Stories",
    island: "Cuba",
    mood: "Hopeful",
    narrator: "Browser Voice",
    icon: "+",
    package: "Dreamer Plus",
    summary: "Reflective stories about sea walls, music drifting at night, and beginning again.",
    detail: "A soothing Cuban-inspired series for adults who want calm encouragement before sleep.",
    episodes: [
      { id: "cuba-ep1", title: "The Wall That Listened", duration: 16, free: true, voice: "Browser Voice", description: "A quiet sea wall receives the worries of the day." },
      { id: "cuba-ep2", title: "Guitar in the Courtyard", duration: 21, free: false, voice: "Browser Voice", description: "A premium episode about music, patience, and softer mornings." },
      { id: "cuba-ep3", title: "Salt Air Promise", duration: 24, free: false, voice: "Browser Voice", description: "A calming story about hope arriving slowly." }
    ]
  },
  {
    id: "grenada-spice-dreams",
    title: "Spice Island Dreams",
    category: "Bedtime Stories",
    island: "Grenada",
    mood: "Warm",
    narrator: "Browser Voice",
    icon: "C",
    package: "Dreamer Plus",
    summary: "Nutmeg, cocoa, rain, and gentle market memories become cozy bedtime episodes.",
    detail: "A Grenadian sleep series filled with warm sensory details and soft family rhythms.",
    episodes: [
      { id: "grenada-ep1", title: "Nutmeg Under the Pillow", duration: 13, free: true, voice: "Browser Voice", description: "A gentle bedtime tale scented with nutmeg and rain." },
      { id: "grenada-ep2", title: "The Cocoa House at Dusk", duration: 20, free: false, voice: "Browser Voice", description: "A premium story about patience, sweetness, and rest." },
      { id: "grenada-ep3", title: "Market Baskets Sleeping", duration: 22, free: false, voice: "Browser Voice", description: "A quiet market closes under a soft island moon." }
    ]
  },
  {
    id: "dominica-rainforest-whispers",
    title: "Rainforest Whispers",
    category: "Inspirational Stories",
    island: "Dominica",
    mood: "Grounding",
    narrator: "Browser Voice",
    icon: "+",
    package: "Dreamer Plus",
    summary: "Nature Island meditations about waterfalls, rainforests, and breathing with the earth.",
    detail: "A calm Dominica-inspired series for stress relief, sleep preparation, and emotional reset.",
    episodes: [
      { id: "dominica-ep1", title: "Waterfall Breath", duration: 15, free: true, voice: "Browser Voice", description: "A waterfall teaches a tired listener to breathe slowly." },
      { id: "dominica-ep2", title: "The Fern Path", duration: 19, free: false, voice: "Browser Voice", description: "A premium guided story through a cooling green path." },
      { id: "dominica-ep3", title: "Clouds Rest on Morne Trois Pitons", duration: 26, free: false, voice: "Browser Voice", description: "A longer sleep episode for deep calm." }
    ]
  },
  {
    id: "antigua-harbor-lights",
    title: "Harbor Lights of Antigua",
    category: "Island History",
    island: "Antigua and Barbuda",
    mood: "Reflective",
    narrator: "Browser Voice",
    icon: "O",
    package: "Heritage Premium",
    summary: "Soft historical walks through harbors, trade winds, and stories of endurance.",
    detail: "A reflective island history series that keeps learning gentle enough for nighttime listening.",
    episodes: [
      { id: "antigua-ep1", title: "A Harbor Goes Quiet", duration: 17, free: true, voice: "Browser Voice", description: "A calm introduction to moonlit harbor history." },
      { id: "antigua-ep2", title: "Wind Through Old Stone", duration: 24, free: false, voice: "Browser Voice", description: "A premium episode about memory, labor, and sea wind." },
      { id: "antigua-ep3", title: "Barbuda's Pink Sand Dream", duration: 23, free: false, voice: "Browser Voice", description: "A soft coastal story about quiet beauty and protection." }
    ]
  },
  {
    id: "bahamas-junkanoo-dream",
    title: "Junkanoo Dream Parade",
    category: "Funny Stories",
    island: "The Bahamas",
    mood: "Joyful",
    narrator: "Browser Voice",
    icon: ":)",
    package: "Family Premium",
    summary: "Gentle, funny stories where parade colors, cousins, and sleepy drums become bedtime fun.",
    detail: "A Bahamas-inspired family series that keeps the joy soft enough for bedtime.",
    episodes: [
      { id: "bahamas-ep1", title: "The Feather That Wouldn't Sleep", duration: 12, free: true, voice: "Browser Voice", description: "A playful costume feather keeps floating through bedtime." },
      { id: "bahamas-ep2", title: "Cousin Milo's Quiet Drum", duration: 16, free: false, voice: "Browser Voice", description: "A premium funny story about learning when to soften the rhythm." },
      { id: "bahamas-ep3", title: "Conch Shell Wishes", duration: 20, free: false, voice: "Browser Voice", description: "A family story that ends with a sleepy seaside wish." }
    ]
  },
  {
    id: "guyana-river-moon",
    title: "River Moon of Guyana",
    category: "Cultural Legends",
    island: "Guyana",
    mood: "Wondering",
    narrator: "Browser Voice",
    icon: "<>",
    package: "Heritage Premium",
    summary: "River legends and rainforest memories from the Caribbean coast of South America.",
    detail: "A calm Guyanese legend series with river journeys, night birds, and respectful wonder.",
    episodes: [
      { id: "guyana-ep1", title: "The Moon in the River", duration: 17, free: true, voice: "Browser Voice", description: "A child sees the moon floating in dark water and learns to listen." },
      { id: "guyana-ep2", title: "Kaieteur's Evening Mist", duration: 25, free: false, voice: "Browser Voice", description: "A premium story inspired by waterfall mist and ancestral memory." },
      { id: "guyana-ep3", title: "The Boat That Knew the Stars", duration: 27, free: false, voice: "Browser Voice", description: "A slow river journey toward sleep." }
    ]
  },
  {
    id: "aruba-trade-wind-lullabies",
    title: "Trade Wind Lullabies",
    category: "Bedtime Stories",
    island: "Aruba",
    mood: "Breezy",
    narrator: "Browser Voice",
    icon: "C",
    package: "Dreamer Plus",
    summary: "Soft desert-island bedtime stories with trade winds, stars, and calm shorelines.",
    detail: "An Aruba-inspired sleep series with spacious pacing and quiet coastal imagery.",
    episodes: [
      { id: "aruba-ep1", title: "The Wind Finds a Hummingbird", duration: 14, free: true, voice: "Browser Voice", description: "A trade wind guides a tired hummingbird toward a moonlit garden." },
      { id: "aruba-ep2", title: "Cactus Shadows at Dusk", duration: 19, free: false, voice: "Browser Voice", description: "A premium episode about quiet desert shapes and rest." },
      { id: "aruba-ep3", title: "Palm Beach After Midnight", duration: 22, free: false, voice: "Browser Voice", description: "A soft shoreline walk designed for sleep." }
    ]
  },
  {
    id: "curacao-colorful-dreams",
    title: "Curacao Color Dreams",
    category: "Family Stories",
    island: "Curacao",
    mood: "Bright",
    narrator: "Browser Voice",
    icon: "&",
    package: "Family Premium",
    summary: "Colorful family stories that slow down into gentle dreams beside the harbor.",
    detail: "A Curacao-inspired family series about color, language, belonging, and bedtime calm.",
    episodes: [
      { id: "curacao-ep1", title: "The Yellow House Dream", duration: 15, free: true, voice: "Browser Voice", description: "A child imagines each bright house closing its eyes for sleep." },
      { id: "curacao-ep2", title: "Papiamentu Goodnight", duration: 18, free: false, voice: "Browser Voice", description: "A premium family episode about language and love at bedtime." },
      { id: "curacao-ep3", title: "Harbor Colors Fade Softly", duration: 23, free: false, voice: "Browser Voice", description: "A sleepy walk through color, water, and moonlight." }
    ]
  }
];

const packages = [
  {
    id: "dreamer",
    name: "Dreamer Plus",
    price: "$4.99/month",
    description: "Unlock premium bedtime, folklore, legend, and inspirational episodes.",
    revenue: "Recurring subscription"
  },
  {
    id: "family",
    name: "Family Premium",
    price: "$7.99/month",
    description: "Includes Dreamer Plus, family listening profiles, and family story series.",
    revenue: "Family subscription"
  },
  {
    id: "heritage",
    name: "Heritage Premium",
    price: "$9.99/month",
    description: "Includes every series plus deeper Caribbean history collections.",
    revenue: "Premium cultural library"
  }
];

const storyPacks = [
  {
    id: "jamaica-folktales",
    name: "Jamaican Folktales Pack",
    price: "$6.99",
    description: "A one-time pack of Anansi, Blue Mountain, and family bedtime episodes."
  },
  {
    id: "history-family",
    name: "Caribbean History for Families",
    price: "$12.99",
    description: "Calm history collections from Haiti, Jamaica, Antigua, Guyana, and Saint Kitts."
  },
  {
    id: "kids-sleep",
    name: "Sleep Stories for Kids",
    price: "$8.99",
    description: "Gentle family-friendly episodes with timers, soft voiceover, and bedtime pacing."
  }
];

const shoutoutProducts = [
  {
    id: "basic-shoutout",
    name: "Basic Shoutout Story",
    price: "$9.99",
    description: "Turn a listener comment into a short narrated story idea."
  },
  {
    id: "family-keepsake",
    name: "Family Keepsake Story",
    price: "$24.99",
    description: "A personalized family memory turned into a bedtime story concept."
  },
  {
    id: "custom-narrated",
    name: "Custom Narrated Keepsake",
    price: "$49-$99",
    description: "Premium custom story package for dedications, families, and diaspora memories."
  }
];

const businessOffers = [
  {
    id: "school-license",
    name: "School and Library License",
    price: "$299/year",
    description: "Group access for classrooms, homeschool groups, libraries, and cultural programs."
  },
  {
    id: "sponsor-collection",
    name: "Sponsored Story Collection",
    price: "Custom",
    description: "Calm branded collections for Caribbean festivals, tourism boards, museums, or bookshops."
  }
];

const legalPolicies = [
  {
    title: "Terms of Service",
    summary: "Rules for using CariDream, subscriptions, account behavior, and platform access.",
    detail: "Draft required before launch. Include account terms, acceptable use, payment terms, cancellation, disclaimers, and dispute process."
  },
  {
    title: "Privacy Policy",
    summary: "Explains what CariDream collects, why it is collected, and how users can request deletion.",
    detail: "Draft required before launch. Cover Firebase/Auth data, comments, submissions, payment processors, analytics, children/family use, and data retention."
  },
  {
    title: "Creator Agreement",
    summary: "Defines creator submissions, approval, payout share, rights granted, and removal rules.",
    detail: "Use for paid story publishing. Include originality promises, cultural respect, revenue share, payout schedule, taxes, and termination."
  },
  {
    title: "Copyright and IP Policy",
    summary: "Protects Caribbean stories, original submissions, takedown requests, and licensing.",
    detail: "Add DMCA-style takedown flow, proof of ownership, permissions for folklore/history adaptations, and repeat-infringer rules."
  },
  {
    title: "Subscription Cancellation Policy",
    summary: "Explains renewal, cancellation, refunds, Apple/Google billing, and Stripe billing.",
    detail: "Clarify where users cancel depending on purchase channel and when access ends."
  },
  {
    title: "Community Guidelines",
    summary: "Sets rules for comments, shoutouts, child-safe requests, respectful cultural discussion, and no hate/harassment.",
    detail: "Needed for comments, submissions, and family-safe community spaces."
  }
];

const storeRequirements = [
  {
    title: "Capacitor native wrapper",
    status: "Needed",
    detail: "Wrap the PWA into iOS and Android projects, then test native WebView behavior."
  },
  {
    title: "App icons and splash screens",
    status: "Partially ready",
    detail: "PWA icons exist. Native app splash assets still need final export sizes."
  },
  {
    title: "Native builds",
    status: "Needed",
    detail: "Generate Xcode and Android Studio builds for device testing."
  },
  {
    title: "Apple Developer account",
    status: "Needed",
    detail: "Required for TestFlight and App Store submission."
  },
  {
    title: "Google Play Developer account",
    status: "Needed",
    detail: "Required for internal testing and Play Store submission."
  },
  {
    title: "Payments compliance",
    status: "Needed",
    detail: "Use Apple/Google in-app purchases for mobile digital content; Stripe can be used for web."
  }
];

const defaultComments = [
  {
    id: "comment-1",
    seriesId: "anansi-moonlight-tricks",
    author: "Leah",
    text: "My son asked if Anansi could meet a little girl who is afraid of the dark.",
    date: "Tonight"
  },
  {
    id: "comment-2",
    seriesId: "blue-mountain-sleep",
    author: "Andre",
    text: "The rain episode reminded me of sleeping at my grandmother's house in Portland.",
    date: "Yesterday"
  },
  {
    id: "comment-3",
    seriesId: "letters-from-castries",
    author: "Nadia",
    text: "Please make a story about cousins in different countries hearing the same bedtime prayer.",
    date: "This week"
  }
];

const safetyRules = [
  "Comments and submissions should be reviewed before being featured.",
  "Block sexual, graphic, exploitative, hateful, frightening, or unsafe content for children.",
  "Limit repeated comments, duplicate submissions, and suspicious links.",
  "Flag comments, shoutouts, episodes, or creator submissions that need owner review.",
  "Only the owner can approve, reject, publish, resolve, or escalate launch-sensitive content."
];

const timers = [0, 15, 30, 45];
const languages = [
  { code: "en", label: "English", voiceLang: "en-US" },
  { code: "es", label: "Spanish", voiceLang: "es-ES" },
  { code: "fr", label: "French", voiceLang: "fr-FR" },
  { code: "ht", label: "Haitian Creole", voiceLang: "fr-FR" },
  { code: "pap", label: "Papiamento", voiceLang: "nl-NL" }
];

const narratorPreferences = [
  { id: "moonlight", label: "Moonlight Narrator", description: "Gentle bedtime storyteller", voiceProvider: "elevenlabs", voiceName: "CariDream Moonlight Narrator" },
  { id: "island", label: "Island Storyteller", description: "Warm Caribbean narrator", voiceProvider: "elevenlabs", voiceName: "CariDream Island Storyteller" },
  { id: "twilight", label: "Twilight Storyteller", description: "Relaxed humor and folktales", voiceProvider: "elevenlabs", voiceName: "CariDream Twilight Storyteller" },
  { id: "browser", label: "Browser Voice", description: "Basic fallback voice", voiceProvider: "browser", voiceName: "Browser Voice" }
];

const languageCopy = {
  en: {
    free: "Free Listener",
    calmVoice: "Browser Voice",
    intro: (episode, item) => `${episode.title}. ${episode.description} From ${item.title}, a ${item.island} ${item.category.toLowerCase()} series. Settle in, breathe slowly, and let the story carry you toward rest.`,
    description: (episode) => episode.description
  },
  es: {
    free: "Oyente gratis",
    calmVoice: "Voz calmada con IA",
    intro: (episode, item) => `${episode.title}. Una historia tranquila del Caribe inspirada en ${item.island}. Respira despacio y deja que esta serie te lleve al descanso.`,
    description: (episode, item) => `Una version tranquila en espanol inspirada en ${item.island}: ${episode.description}`
  },
  fr: {
    free: "Auditeur gratuit",
    calmVoice: "Voix calme IA",
    intro: (episode, item) => `${episode.title}. Une histoire caribeenne apaisante inspiree par ${item.island}. Respirez lentement et laissez cette serie vous guider vers le repos.`,
    description: (episode, item) => `Une version douce en francais inspiree par ${item.island}: ${episode.description}`
  },
  ht: {
    free: "Oditè gratis",
    calmVoice: "Vwa kalm IA",
    intro: (episode, item) => `${episode.title}. Yon istwa Karayib dous ki enspire pa ${item.island}. Respire dousman epi kite istwa a mennen ou repoze.`,
    description: (episode, item) => `Yon vèsyon dous an kreyòl ayisyen ki enspire pa ${item.island}: ${episode.description}`
  },
  pap: {
    free: "Oyente grátis",
    calmVoice: "Bos kalmo AI",
    intro: (episode, item) => `${episode.title}. Un kuenta Karibense trankil inspira pa ${item.island}. Hala rosea poko poko i laga e kuenta hiba bo den sosiego.`,
    description: (episode, item) => `Un version trankil na Papiamento inspira pa ${item.island}: ${episode.description}`
  }
};

const episodeTitleTranslations = {
  "aruba-ep1": {
    en: "The Wind Finds a Hummingbird",
    es: "El viento encuentra un colibri",
    fr: "Le vent trouve un colibri",
    ht: "Van an jwenn yon zwazo kolibri",
    pap: "E bientu ta haya un blenchi"
  }
};

const freeListenerLabels = {
  en: "Free Listener",
  es: "Oyente gratis",
  fr: "Auditeur gratuit",
  ht: "Odite gratis",
  pap: "Oyente gratis"
};

function bedtimeNarration(episode, item, text) {
  const scripts = {
    en: [
      `Tonight, we begin with ${text.title}.`,
      "Let your shoulders soften... and let the room grow quiet around you.",
      `This story comes from ${item.island}, from the heart of ${item.title}.`,
      text.description,
      "Listen as if someone who loves you is speaking near the window, with a gentle smile in their voice.",
      "There is no hurry here. Only moonlight, memory, sea breeze, and rest.",
      "Breathe in slowly... breathe out softly... and drift with the story."
    ],
    es: [
      `Esta noche comenzamos con ${text.title}.`,
      "Suelta los hombros... y deja que el cuarto se vuelva tranquilo.",
      `Esta historia llega desde ${item.island}, con el calor suave de ${item.title}.`,
      text.description,
      "Escucha como si una voz querida te hablara bajito, con ternura y una sonrisa suave.",
      "No hay prisa. Solo luna, mar, recuerdo, y descanso.",
      "Respira despacio... suelta el dia... y dejate llevar por la historia."
    ],
    fr: [
      `Ce soir, nous commencons avec ${text.title}.`,
      "Relachez doucement les epaules... et laissez le silence entrer dans la piece.",
      `Cette histoire vient de ${item.island}, portee par la douceur de ${item.title}.`,
      text.description,
      "Ecoutez comme si une voix familiere vous parlait tout pres, avec chaleur et tendresse.",
      "Il n'y a aucune urgence ici. Seulement la lune, la mer, les souvenirs, et le repos.",
      "Respirez lentement... laissez partir la journee... et suivez l'histoire."
    ],
    ht: [
      `Aswe a, nou ap koumanse ak ${text.title}.`,
      "Lage zepol ou dousman... kite kay la vin trankil.",
      `Istwa sa a soti nan ${item.island}, ak chale dous ${item.title}.`,
      text.description,
      "Koute tankou yon moun lakay ap pale ave ou tou dousman, ak lanmou nan vwa li.",
      "Pa gen prese isit la. Se selman lalin, lanme, memwa, ak repo.",
      "Respire dousman... lage jounen an... epi kite istwa a pote ou."
    ],
    pap: [
      `E anochi aki, nos ta kuminsa ku ${text.title}.`,
      "Laga bo skouder baha poko poko... i laga e kamber bira trankil.",
      `E kuenta aki ta bini for di ${item.island}, ku e kalor suave di ${item.title}.`,
      text.description,
      "Skucha manera un bos familiar ta papia ku bo suave, ku karino den kada palabra.",
      "No tin prisa aki. Tin luna, laman, memoria, i sosiego.",
      "Hala rosea poko poko... laga e dia bai... i sigui e kuenta."
    ]
  };
  return (scripts[state.language] || scripts.en).join(" ");
}

let series = fallbackSeries;

const allEpisodes = () => series.flatMap((item) => item.episodes.map((episode) => ({ ...episode, series: item })));
const initialSeries = series[0];
const initialEpisode = initialSeries.episodes[0];

function slugify(value) {
  return String(value || "story")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "story";
}

function categoryIcon(category) {
  return categories.find(([name]) => name === category)?.[1] || "C";
}

const countryOrder = ["Jamaica", "Haiti", "Dominican Republic", "Aruba", "Bahamas", "Saint Lucia"];
const backgroundThemes = {
  "Bedtime Stories": { className: "bg-bedtime", image: "" },
  "Island History": { className: "bg-history", image: "" },
  "Caribbean Folktales": { className: "bg-folktales", image: "" }
};
const anansiEpisodeOrder = {
  "the moonlight mango": 1,
  "anansi and the moonlit tricks": 2,
  "the firefly lantern": 3,
  "the talking breadfruit": 4,
  "moon over blue mountain peak": 5
};

function normalizedCountry(story) {
  return story.country || story.island || "Caribbean";
}

function normalizedSeriesTitle(story, country, category) {
  const rawSeries = story.series || story.seriesTitle || `${country} ${category}`;
  const title = String(story.title || "").toLowerCase();
  const seriesText = String(rawSeries).toLowerCase();
  if (country === "Jamaica" && (seriesText.includes("anansi") || anansiEpisodeOrder[title])) {
    return "Anansi Adventures";
  }
  return rawSeries;
}

function normalizedEpisodeNumber(story) {
  const title = String(story.title || "").toLowerCase();
  return Number(anansiEpisodeOrder[title] || story.episodeNumber || story.episode || 999);
}

function storyCoverUrl(story = {}) {
  return story.coverUrl || story.imageUrl || story.coverImage || story.artUrl || "";
}

function languageAudioFields(code) {
  const fields = {
    en: ["audioUrl", "audioUrl_en", "englishAudioUrl", "audioUrlEnglish"],
    es: ["audioUrl_es", "spanishAudioUrl", "audioUrlSpanish"],
    fr: ["audioUrl_fr", "frenchAudioUrl", "audioUrlFrench"],
    ht: ["audioUrl_ht", "haitianCreoleAudioUrl", "audioUrlHaitianCreole"],
    pap: ["audioUrl_pap", "papiamentoAudioUrl", "audioUrlPapiamento"]
  };
  return fields[code] || [];
}

function audioUrlForLanguage(source = {}, code = state.language) {
  const localizedMap = source.audioUrls || source.localizedAudioUrls || {};
  const mappedUrl = localizedMap[code] || localizedMap[code?.toLowerCase?.()];
  if (mappedUrl) return mappedUrl;

  for (const field of languageAudioFields(code)) {
    if (source[field]) return source[field];
  }

  return localizedMap.en || source.audioUrl_en || source.englishAudioUrl || source.audioUrl || "";
}

function selectedEpisodeAudioUrl(episode = selectedEpisode()) {
  return audioUrlForLanguage(episode, state.language);
}

function usableNarratorName(value) {
  const name = String(value || "").trim();
  if (!name || name.toLowerCase() === "ai calm voice") return "";
  return name;
}

function narratorNameFrom(...sources) {
  for (const source of sources) {
    const name = usableNarratorName(source);
    if (name) return name;
  }
  return "";
}

function flattenFallbackStories() {
  return fallbackSeries.flatMap((item) => item.episodes.map((episode, index) => ({
    id: episode.id,
    title: episode.title,
    description: episode.description,
    category: item.category,
    island: item.island,
    duration: episode.duration,
    audioUrl: episode.audioUrl || "",
    audioUrls: episode.audioUrls || {},
    audioUrl_en: episode.audioUrl_en || "",
    audioUrl_es: episode.audioUrl_es || "",
    audioUrl_fr: episode.audioUrl_fr || "",
    audioUrl_ht: episode.audioUrl_ht || "",
    audioUrl_pap: episode.audioUrl_pap || "",
    seriesId: item.id,
    seriesTitle: item.title,
    seriesDescription: item.detail || item.summary,
    summary: item.summary,
    mood: item.mood,
    narrator: narratorNameFrom(episode.voiceName, episode.voice, item.voiceName, item.narrator) || "Browser Voice",
    narratorType: episode.narratorType || "browser",
    voiceProvider: episode.voiceProvider || "browser",
    voiceName: narratorNameFrom(episode.voiceName, episode.voice, item.voiceName, item.narrator) || "Browser Voice",
    icon: item.icon,
    coverUrl: storyCoverUrl(episode) || storyCoverUrl(item),
    free: episode.free !== false,
    episodeNumber: index + 1,
    hasCliffhanger: episode.hasCliffhanger === true,
    nextEpisodeHint: episode.nextEpisodeHint || ""
  })));
}

function hydrateSeriesFromStories(stories) {
  const groups = new Map();
  stories
    .filter((story) => story?.title)
    .sort((a, b) => {
      const countryA = normalizedCountry(a);
      const countryB = normalizedCountry(b);
      const countryCompare = (countryOrder.indexOf(countryA) === -1 ? 999 : countryOrder.indexOf(countryA))
        - (countryOrder.indexOf(countryB) === -1 ? 999 : countryOrder.indexOf(countryB));
      if (countryCompare) return countryCompare;
      const seriesA = normalizedSeriesTitle(a, countryA, a.category || "Bedtime Stories");
      const seriesB = normalizedSeriesTitle(b, countryB, b.category || "Bedtime Stories");
      return seriesA.localeCompare(seriesB) || normalizedEpisodeNumber(a) - normalizedEpisodeNumber(b) || a.title.localeCompare(b.title);
    })
    .forEach((story) => {
      const category = story.category || "Bedtime Stories";
      const island = normalizedCountry(story);
      const seriesTitle = normalizedSeriesTitle(story, island, category);
      const seriesId = slugify(`${island}-${seriesTitle}`);
      const coverUrl = storyCoverUrl(story);
      const storyNarrator = narratorNameFrom(story.voiceName, story.narrator, story.voice) || "Browser Voice";
      const existing = groups.get(seriesId) || {
        id: seriesId,
        title: seriesTitle,
        category,
        island,
        mood: story.mood || "Calm",
        narrator: storyNarrator,
        narratorType: story.narratorType || "browser",
        voiceProvider: story.voiceProvider || (story.audioUrl ? "elevenlabs" : "browser"),
        voiceName: storyNarrator,
        icon: story.icon || categoryIcon(category),
        coverUrl,
        package: "Free Listener",
        summary: story.summary || story.description || "A calming CariDream story from the Firestore collection.",
        detail: story.seriesDescription || story.description || "A calming CariDream story from the Firestore collection.",
        episodes: []
      };
      existing.episodes.push({
        id: story.id,
        episodeNumber: normalizedEpisodeNumber(story),
        title: story.title,
        description: story.description || "A calming CariDream story from the Firestore collection.",
        story: story.story || "",
        storyContent: story.storyContent || story.story || "",
        duration: Number(story.duration) || 10,
        audioUrl: story.audioUrl || "",
        audioUrls: story.audioUrls || {},
        audioUrl_en: story.audioUrl_en || "",
        audioUrl_es: story.audioUrl_es || "",
        audioUrl_fr: story.audioUrl_fr || "",
        audioUrl_ht: story.audioUrl_ht || "",
        audioUrl_pap: story.audioUrl_pap || "",
        spanishAudioUrl: story.spanishAudioUrl || "",
        frenchAudioUrl: story.frenchAudioUrl || "",
        haitianCreoleAudioUrl: story.haitianCreoleAudioUrl || "",
        papiamentoAudioUrl: story.papiamentoAudioUrl || "",
        coverUrl,
        free: story.free !== false && story.isPremium !== true,
        voice: storyNarrator,
        narrator: storyNarrator,
        narratorType: story.narratorType || "browser",
        voiceProvider: story.voiceProvider || (story.audioUrl ? "elevenlabs" : "browser"),
        voiceName: storyNarrator,
        hasCliffhanger: story.hasCliffhanger === true,
        nextEpisodeHint: story.nextEpisodeHint || ""
      });
      if (!existing.coverUrl && coverUrl) {
        existing.coverUrl = coverUrl;
      }
      if (existing.narrator === "Browser Voice" && storyNarrator !== "Browser Voice") {
        existing.narrator = storyNarrator;
        existing.voiceName = storyNarrator;
      }
      groups.set(seriesId, existing);
    });
  return [...groups.values()].map((item) => ({
    ...item,
    episodes: item.episodes.sort((a, b) => (a.episodeNumber || 999) - (b.episodeNumber || 999) || a.title.localeCompare(b.title))
  }));
}

function applyStoryCatalog(nextSeries) {
  if (!nextSeries.length) return;
  series = nextSeries;
  if (!series.some((item) => item.id === state.selectedSeriesId)) {
    state.selectedSeriesId = series[0].id;
    state.selectedEpisodeId = series[0].episodes[0]?.id || "";
    state.progress = 0;
    state.elapsedSeconds = 0;
    return;
  }
  const item = selectedSeries();
  if (!item.episodes.some((episode) => episode.id === state.selectedEpisodeId)) {
    state.selectedEpisodeId = item.episodes[0]?.id || "";
    state.progress = 0;
    state.elapsedSeconds = 0;
  }
}

const state = {
  screen: "home",
  category: "",
  query: "",
  selectedSeriesId: initialSeries.id,
  selectedEpisodeId: initialEpisode.id,
  user: JSON.parse(localStorage.getItem("caridream:user") || "null"),
  favorites: JSON.parse(localStorage.getItem("caridream:favorites") || "[]"),
  subscribed: JSON.parse(localStorage.getItem("caridream:subscribed") || "false"),
  packageId: localStorage.getItem("caridream:package") || "",
  selectedPackId: localStorage.getItem("caridream:selectedPack") || "",
  selectedOfferId: localStorage.getItem("caridream:selectedOffer") || "",
  selectedShoutoutProductId: localStorage.getItem("caridream:selectedShoutoutProduct") || "",
  comments: JSON.parse(localStorage.getItem("caridream:comments") || JSON.stringify(defaultComments)),
  shoutouts: JSON.parse(localStorage.getItem("caridream:shoutouts") || "[]"),
  submissions: JSON.parse(localStorage.getItem("caridream:submissions") || "[]"),
  reports: JSON.parse(localStorage.getItem("caridream:reports") || "[]"),
  approvedSubmissions: JSON.parse(localStorage.getItem("caridream:approvedSubmissions") || "[]"),
  publishedEpisodes: JSON.parse(localStorage.getItem("caridream:publishedEpisodes") || "[]"),
  reviewedPayouts: JSON.parse(localStorage.getItem("caridream:reviewedPayouts") || "[]"),
  ownerUnlocked: false,
  isAdmin: false,
  guest: JSON.parse(localStorage.getItem("caridream:guest") || "false"),
  timer: Number(localStorage.getItem("caridream:timer") || 0),
  listens: Number(localStorage.getItem("caridream:listens") || 0),
  lastPlayed: JSON.parse(localStorage.getItem("caridream:lastPlayed") || "null"),
  listeningHistory: JSON.parse(localStorage.getItem("caridream:listeningHistory") || "[]"),
  language: localStorage.getItem("caridream:language") || "en",
  narratorPreference: localStorage.getItem("caridream:narratorPreference") || "moonlight",
  profileAvatarUrl: localStorage.getItem("caridream:profileAvatarUrl") || "",
  editingProfile: false,
  autoplayNext: JSON.parse(localStorage.getItem("caridream:autoplayNext") || "false"),
  playing: false,
  progress: 0,
  elapsedSeconds: 0
};

let progressInterval = null;
let sleepTimerTimeout = null;
let audioEngine = null;
let storyAudio = null;
let voiceUtterance = null;
let narrationChunks = [];
let narrationChunkIndex = 0;
let narrationChunkWeights = [];
let narrationCompletedWeight = 0;
let narrationChunkStartedAt = 0;
let narrationEstimatedChunkSeconds = 1;
let narrationGeneration = 0;
let narrationManualStop = false;
let narrationDone = false;
let narrationWatchdog = null;
let narrationLastActivityAt = 0;
let narrationRetryCount = 0;
let backendReady = false;
let playbackStartedAt = 0;
let progressFrame = null;
let isSeekingPlayback = false;
let activeSeekPointerId = null;
let audioSeekInProgress = false;
let audioSeekResumeAfter = false;
let pendingAudioSeekSeconds = null;
let catalogSource = "Offline library";
let catalogStoryCount = flattenFallbackStories().length;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function save() {
  localStorage.setItem("caridream:user", JSON.stringify(state.user));
  localStorage.setItem("caridream:favorites", JSON.stringify(state.favorites));
  localStorage.setItem("caridream:subscribed", JSON.stringify(state.subscribed));
  localStorage.setItem("caridream:package", state.packageId);
  localStorage.setItem("caridream:selectedPack", state.selectedPackId);
  localStorage.setItem("caridream:selectedOffer", state.selectedOfferId);
  localStorage.setItem("caridream:selectedShoutoutProduct", state.selectedShoutoutProductId);
  localStorage.setItem("caridream:comments", JSON.stringify(state.comments));
  localStorage.setItem("caridream:shoutouts", JSON.stringify(state.shoutouts));
  localStorage.setItem("caridream:submissions", JSON.stringify(state.submissions));
  localStorage.setItem("caridream:reports", JSON.stringify(state.reports));
  localStorage.setItem("caridream:approvedSubmissions", JSON.stringify(state.approvedSubmissions));
  localStorage.setItem("caridream:publishedEpisodes", JSON.stringify(state.publishedEpisodes));
  localStorage.setItem("caridream:reviewedPayouts", JSON.stringify(state.reviewedPayouts));
  localStorage.setItem("caridream:guest", JSON.stringify(state.guest));
  localStorage.setItem("caridream:timer", String(state.timer));
  localStorage.setItem("caridream:listens", String(state.listens));
  localStorage.setItem("caridream:lastPlayed", JSON.stringify(state.lastPlayed));
  localStorage.setItem("caridream:listeningHistory", JSON.stringify(state.listeningHistory));
  localStorage.setItem("caridream:language", state.language);
  localStorage.setItem("caridream:narratorPreference", state.narratorPreference);
  localStorage.setItem("caridream:profileAvatarUrl", state.profileAvatarUrl);
  localStorage.setItem("caridream:autoplayNext", JSON.stringify(state.autoplayNext));
  if (backendReady) {
    window.CariDreamBackend?.saveState(state);
  }
}

function selectedSeries() {
  return series.find((item) => item.id === state.selectedSeriesId) || initialSeries;
}

function selectedEpisode() {
  const item = selectedSeries();
  return item.episodes.find((episode) => episode.id === state.selectedEpisodeId) || item.episodes[0];
}

function canPlay(episode = selectedEpisode()) {
  return true;
}

function currentBackgroundTheme() {
  const item = selectedSeries();
  const key = state.category || (state.screen === "detail" ? item.category : "");
  return backgroundThemes[key] || backgroundThemes[item.category] || backgroundThemes["Bedtime Stories"];
}

function applyBackgroundTheme() {
  const phone = $(".phone");
  if (!phone) return;
  const theme = currentBackgroundTheme();
  Object.values(backgroundThemes).forEach((item) => phone.classList.remove(item.className));
  phone.classList.add(theme.className);
  if (theme.image) {
    phone.style.setProperty("--category-background-image", `url("${theme.image}")`);
  } else {
    phone.style.removeProperty("--category-background-image");
  }
}

function totalMinutes(item) {
  return item.episodes.reduce((sum, episode) => sum + episode.duration, 0);
}

function episodeDurationSeconds(episode = selectedEpisode()) {
  return Math.max(1, episode.duration * 60);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function packageName() {
  return "Free Listener";
}

async function refreshAdminAccess() {
  try {
    state.isAdmin = Boolean(state.user && await window.CariDreamBackend?.loadAdminStatus?.(state.user));
  } catch (error) {
    console.warn("Admin status unavailable.", error);
    state.isAdmin = false;
  }
  state.ownerUnlocked = state.isAdmin;
}

async function loadFirebaseStories() {
  if (!backendReady) return;
  try {
    let cloudStories = await window.CariDreamBackend.loadStories();
    if (!cloudStories.length) {
      await window.CariDreamBackend.seedStories(flattenFallbackStories());
      cloudStories = await window.CariDreamBackend.loadStories();
    }
    const firebaseSeries = hydrateSeriesFromStories(cloudStories);
    if (firebaseSeries.length) {
      catalogSource = "Live library";
      catalogStoryCount = cloudStories.length;
      applyStoryCatalog(firebaseSeries);
    }
  } catch (error) {
    catalogSource = "Offline library";
    catalogStoryCount = flattenFallbackStories().length;
    console.warn("Firebase stories unavailable, using fallback stories.", error);
  }
}

function currentLanguage() {
  return languages.find((language) => language.code === state.language) || languages[0];
}

function currentNarratorPreference() {
  return narratorPreferences.find((narrator) => narrator.id === state.narratorPreference) || narratorPreferences[0];
}

function episodeNarratorLabel(episode, item = selectedSeries()) {
  return narratorNameFrom(
    episode?.voiceName,
    episode?.narrator,
    episode?.voice,
    item?.voiceName,
    item?.narrator
  ) || "Browser Voice";
}

function seriesNarratorLabel(item) {
  return narratorNameFrom(
    item?.voiceName,
    item?.narrator,
    item?.episodes?.[0]?.voiceName,
    item?.episodes?.[0]?.narrator,
    item?.episodes?.[0]?.voice
  ) || "Browser Voice";
}

function localizedEpisodeText(episode, item = selectedSeries()) {
  const copy = languageCopy[state.language] || languageCopy.en;
  const translatedTitle = episodeTitleTranslations[episode.id]?.[state.language] || episode.title;
  const description = copy.description(episode, item);
  const text = { title: translatedTitle, description };
  return {
    title: translatedTitle,
    description,
    free: freeListenerLabels[state.language] || freeListenerLabels.en,
    calmVoice: copy.calmVoice,
    intro: bedtimeNarration(episode, item, text)
  };
}

function selectedShoutoutProduct() {
  return shoutoutProducts.find((product) => product.id === state.selectedShoutoutProductId) || shoutoutProducts[0];
}

function favoriteDetails() {
  return series
    .filter((item) => state.favorites.includes(item.id))
    .map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      island: item.island,
      episodeCount: item.episodes.length
    }));
}

async function syncFavoritesFromFirestore() {
  if (!backendReady) return;
  try {
    const firestoreFavorites = await window.CariDreamBackend.loadFavorites();
    if (firestoreFavorites.length) {
      state.favorites = firestoreFavorites;
      return;
    }
    if (state.favorites.length) {
      await window.CariDreamBackend.saveFavorites(state.favorites, favoriteDetails());
    }
  } catch (error) {
    console.warn("Firestore favorites unavailable, using local favorites.", error);
  }
}

async function saveFavoritesToFirestore() {
  if (!backendReady) return;
  try {
    await window.CariDreamBackend.saveFavorites(state.favorites, favoriteDetails());
  } catch (error) {
    console.warn("Could not save favorites to Firestore.", error);
  }
}

function saveLastPlayed() {
  const item = selectedSeries();
  const episode = selectedEpisode();
  const text = localizedEpisodeText(episode, item);
  state.lastPlayed = {
    seriesId: item.id,
    episodeId: episode.id,
    seriesTitle: item.title,
    episodeTitle: text.title,
    language: state.language,
    elapsedSeconds: Math.floor(state.elapsedSeconds),
    durationSeconds: episodeDurationSeconds(episode)
  };
  state.listeningHistory = state.listeningHistory.map((entry) =>
    entry.seriesId === item.id && entry.episodeId === episode.id && entry.language === state.language
      ? {
        ...entry,
        episodeTitle: text.title,
        elapsedSeconds: Math.floor(state.elapsedSeconds),
        durationSeconds: episodeDurationSeconds(episode)
      }
      : entry
  );
}

function recordListeningHistory() {
  const item = selectedSeries();
  const episode = selectedEpisode();
  const text = localizedEpisodeText(episode, item);
  const entry = {
    seriesId: item.id,
    episodeId: episode.id,
    seriesTitle: item.title,
    episodeTitle: text.title,
    language: state.language,
    playedAt: new Date().toISOString(),
    elapsedSeconds: Math.floor(state.elapsedSeconds),
    durationSeconds: episodeDurationSeconds(episode)
  };
  state.listeningHistory = [
    entry,
    ...state.listeningHistory.filter((history) => !(history.seriesId === item.id && history.episodeId === episode.id && history.language === state.language))
  ].slice(0, 12);
  saveLastPlayed();
}

function listenerName() {
  return state.user?.name || "Guest listener";
}

function hasValidSession() {
  return Boolean(state.user?.name || state.user?.email || state.guest);
}

function preserveLocalSession(localSession) {
  if (!hasValidSession() && (localSession.user || localSession.guest)) {
    state.user = localSession.user;
    state.guest = Boolean(localSession.guest);
  }
  if (state.user) {
    state.guest = false;
  }
}

function speechSupportIssue() {
  const userAgent = navigator.userAgent || "";
  const isDuckDuckGo = /DuckDuckGo|DDG/i.test(userAgent) || Boolean(navigator.duckduckgo);
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return "Voice narration is not supported in this browser. For beta testing, please use Chrome, Safari, or Edge.";
  }
  if (isDuckDuckGo) {
    return "DuckDuckGo may block or limit browser voice narration. If you do not hear audio, please use Chrome for the best beta experience.";
  }
  return "";
}

function clearSessionProfile() {
  state.user = null;
  state.guest = false;
  state.isAdmin = false;
  state.ownerUnlocked = false;
  state.editingProfile = false;
  state.profileAvatarUrl = "";
  state.subscribed = false;
  state.packageId = "";
  state.selectedPackId = "";
  state.selectedOfferId = "";
  state.selectedShoutoutProductId = "";
  localStorage.removeItem("caridream:user");
  localStorage.removeItem("caridream:guest");
  localStorage.removeItem("caridream:subscribed");
  localStorage.removeItem("caridream:package");
  localStorage.removeItem("caridream:selectedPack");
  localStorage.removeItem("caridream:selectedOffer");
  localStorage.removeItem("caridream:selectedShoutoutProduct");
  localStorage.removeItem("caridream:profileAvatarUrl");
}

async function switchAccount() {
  const confirmed = window.confirm("Switch account or sign out?");
  if (!confirmed) return;

  stopPlayback({ reset: true });
  clearSessionProfile();

  try {
    await window.CariDreamBackend?.signOut?.();
  } catch (error) {
    console.warn("Firebase sign out failed; local session was cleared.", error);
  }

  $("#authForm").reset();
  save();
  navigate("auth");
}

function commentsForSeries(seriesId = selectedSeries().id) {
  return state.comments.filter((comment) => comment.seriesId === seriesId);
}

function shoutoutTitle(comment) {
  const words = comment.text.replace(/[^a-z0-9 ]/gi, "").split(" ").filter(Boolean).slice(0, 5);
  return words.length ? words.join(" ") : "Community Dream";
}

function startAudioBed() {
  if (audioEngine) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const gain = context.createGain();
  const oscillator = context.createOscillator();
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const samples = context.sampleRate * 2;
  const buffer = context.createBuffer(1, samples, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < samples; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.08;
  }

  oscillator.type = "sine";
  oscillator.frequency.value = 174;
  noise.buffer = buffer;
  noise.loop = true;
  filter.type = "lowpass";
  filter.frequency.value = 520;
  gain.gain.value = 0.035;

  oscillator.connect(gain);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  noise.start();
  audioEngine = { context, oscillator, noise, gain };
}

function stopAudioBed() {
  if (!audioEngine) return;
  try {
    audioEngine.oscillator.stop();
    audioEngine.noise.stop();
    audioEngine.context.close();
  } catch (error) {
    // Playback may already be stopped by the browser.
  }
  audioEngine = null;
}

function cleanNarrationText(value) {
  return String(value || "")
    .replace(/^#+\s*/gm, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function episodeNarrationText(episode, item = selectedSeries()) {
  const localized = localizedEpisodeText(episode, item);
  const storyText = cleanNarrationText(episode.storyContent || episode.story || "");
  if (!storyText) return localized.intro;
  return `${localized.intro}\n\n${storyText}`;
}

function splitLongParagraph(paragraph, maxLength = 520) {
  const sentences = paragraph
    .replace(/\s+/g, " ")
    .match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [paragraph];
  const chunks = [];
  let current = "";

  sentences.forEach((sentence) => {
    const next = sentence.trim();
    if (!next) return;
    if ((current + " " + next).trim().length > maxLength && current) {
      chunks.push(current.trim());
      current = next;
      return;
    }
    current = `${current} ${next}`.trim();
  });

  if (current) chunks.push(current.trim());
  return chunks;
}

function splitNarrationIntoChunks(text) {
  const paragraphs = cleanNarrationText(text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const chunks = [];

  paragraphs.forEach((paragraph) => {
    if (paragraph.length <= 520) {
      chunks.push(paragraph);
      return;
    }
    chunks.push(...splitLongParagraph(paragraph));
  });

  return chunks.length ? chunks : splitLongParagraph(text);
}

function narrationTotalWeight() {
  return Math.max(1, narrationChunkWeights.reduce((sum, value) => sum + value, 0));
}

function narrationElapsedSeconds() {
  const duration = episodeDurationSeconds();
  if (!narrationChunks.length) {
    return Math.min(duration, Math.max(0, state.elapsedSeconds));
  }
  const currentWeight = narrationChunkWeights[narrationChunkIndex] || 0;
  const chunkElapsed = state.playing && !narrationDone
    ? Math.min(1, Math.max(0, (Date.now() - narrationChunkStartedAt) / 1000 / narrationEstimatedChunkSeconds))
    : 0;
  const spokenWeight = narrationCompletedWeight + currentWeight * chunkElapsed;
  return Math.min(duration, Math.max(0, (spokenWeight / narrationTotalWeight()) * duration));
}

function seekNarrationToElapsed(seconds) {
  const duration = episodeDurationSeconds();
  const targetWeight = Math.min(1, Math.max(0, seconds / duration)) * narrationTotalWeight();
  narrationCompletedWeight = 0;
  narrationChunkIndex = 0;

  while (
    narrationChunkIndex < narrationChunkWeights.length - 1
    && narrationCompletedWeight + narrationChunkWeights[narrationChunkIndex] < targetWeight
  ) {
    narrationCompletedWeight += narrationChunkWeights[narrationChunkIndex];
    narrationChunkIndex += 1;
  }
}

function selectedCalmVoice() {
  const voices = window.speechSynthesis.getVoices();
  const voiceLang = currentLanguage().voiceLang.toLowerCase();
  return voices.find((voice) => voice.lang?.toLowerCase().startsWith(voiceLang.slice(0, 2)))
    || voices.find((voice) => /female|samantha|zira|aria|natural|serena/i.test(voice.name))
    || voices.find((voice) => voice.lang?.startsWith("en"))
    || voices[0];
}

function startNarrationWatchdog() {
  clearInterval(narrationWatchdog);
  narrationWatchdog = setInterval(() => {
    if (!state.playing || storyAudio || narrationDone || !narrationChunks.length || !("speechSynthesis" in window)) return;
    const engineIdle = !window.speechSynthesis.speaking && !window.speechSynthesis.pending;
    const quietFor = Date.now() - narrationLastActivityAt;
    if (engineIdle && quietFor > 2500) {
      console.warn("Speech synthesis stopped unexpectedly. Recovering narration chunk.");
      speakNarrationChunk(narrationGeneration, { recovery: true });
    }
  }, 1500);
}

function speakNarrationChunk(generation, { recovery = false } = {}) {
  if (!state.playing || generation !== narrationGeneration || storyAudio || !("speechSynthesis" in window)) return;
  if (narrationChunkIndex >= narrationChunks.length) {
    narrationDone = true;
    handlePlaybackEnded();
    return;
  }

  if (recovery) {
    narrationRetryCount += 1;
    if (narrationRetryCount > 2) {
      narrationCompletedWeight += narrationChunkWeights[narrationChunkIndex] || 0;
      narrationChunkIndex += 1;
      narrationRetryCount = 0;
    }
  } else {
    narrationRetryCount = 0;
  }

  const chunk = narrationChunks[narrationChunkIndex];
  if (!chunk) {
    narrationChunkIndex += 1;
    speakNarrationChunk(generation);
    return;
  }

  narrationManualStop = false;
  narrationChunkStartedAt = Date.now();
  narrationLastActivityAt = Date.now();
  narrationEstimatedChunkSeconds = Math.max(3, (chunk.split(/\s+/).length / 115) * 60);

  try {
    window.speechSynthesis.cancel();
    voiceUtterance = new SpeechSynthesisUtterance(chunk);
    voiceUtterance.lang = currentLanguage().voiceLang;
    voiceUtterance.rate = 0.7;
    voiceUtterance.pitch = 0.9;
    voiceUtterance.volume = 0.78;

    const calmVoice = selectedCalmVoice();
    if (calmVoice) {
      voiceUtterance.voice = calmVoice;
    }

    voiceUtterance.onstart = () => {
      narrationLastActivityAt = Date.now();
    };
    voiceUtterance.onboundary = () => {
      narrationLastActivityAt = Date.now();
    };
    voiceUtterance.onend = () => {
      if (generation !== narrationGeneration || narrationManualStop || !state.playing) return;
      narrationLastActivityAt = Date.now();
      narrationCompletedWeight += narrationChunkWeights[narrationChunkIndex] || chunk.length;
      narrationChunkIndex += 1;
      narrationRetryCount = 0;
      speakNarrationChunk(generation);
    };
    voiceUtterance.onerror = (event) => {
      if (generation !== narrationGeneration || narrationManualStop || !state.playing) return;
      const errorName = event?.error || "unknown";
      if (["canceled", "interrupted"].includes(errorName)) return;
      console.warn("Speech synthesis narration error.", errorName);
      window.setTimeout(() => speakNarrationChunk(generation, { recovery: true }), 400);
    };

    window.speechSynthesis.speak(voiceUtterance);
  } catch (error) {
    console.warn("Speech synthesis chunk could not start.", error);
    window.setTimeout(() => speakNarrationChunk(generation, { recovery: true }), 400);
  }
}

function startVoiceover() {
  const episode = selectedEpisode();
  const audioUrl = selectedEpisodeAudioUrl(episode);
  const startBrowserNarration = () => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      console.warn("Speech synthesis is not available in this browser.");
      return;
    }
    narrationGeneration += 1;
    narrationManualStop = true;
    window.speechSynthesis.cancel();

    const narration = episodeNarrationText(episode);
    narrationChunks = splitNarrationIntoChunks(narration);
    narrationChunkWeights = narrationChunks.map((chunk) => Math.max(1, chunk.length));
    narrationDone = false;
    seekNarrationToElapsed(state.elapsedSeconds);
    startNarrationWatchdog();
    speakNarrationChunk(narrationGeneration);
  };

  if (!audioUrl) {
    startBrowserNarration();
    return;
  }

  storyAudio = new Audio(audioUrl);
  let audioFallbackStarted = false;
  const fallBackToBrowserNarration = (message, error = null) => {
    if (audioFallbackStarted) return;
    audioFallbackStarted = true;
    console.warn(message, error || "");
    storyAudio = null;
    startBrowserNarration();
  };
  storyAudio.currentTime = Math.min(state.elapsedSeconds, episodeDurationSeconds(episode) - 1);
  storyAudio.volume = 0.9;
  storyAudio.preload = "auto";
  storyAudio.addEventListener("loadedmetadata", () => {
    if (pendingAudioSeekSeconds !== null) {
      applyAudioSeek(pendingAudioSeekSeconds);
      pendingAudioSeekSeconds = null;
    }
  });
  storyAudio.addEventListener("seeked", finishAudioSeek);
  storyAudio.addEventListener("canplay", finishAudioSeek);
  storyAudio.addEventListener("playing", () => {
    audioSeekInProgress = false;
    audioSeekResumeAfter = false;
  });
  storyAudio.addEventListener("stalled", () => {
    console.warn("Story audio stalled while loading or seeking.");
  });
  storyAudio.addEventListener("waiting", () => {
    if (audioSeekInProgress) {
      console.warn("Story audio is buffering after seek.");
    }
  });
  storyAudio.addEventListener("ended", handlePlaybackEnded, { once: true });
  storyAudio.addEventListener("error", () => {
    fallBackToBrowserNarration("Story audio could not load. Falling back to browser narration.");
  }, { once: true });
  storyAudio.play().catch((error) => {
    fallBackToBrowserNarration("Story audio could not start. Falling back to browser narration.", error);
  });
}

function stopVoiceover() {
  if (storyAudio) {
    storyAudio.pause();
    storyAudio = null;
  }
  audioSeekInProgress = false;
  audioSeekResumeAfter = false;
  pendingAudioSeekSeconds = null;
  clearInterval(narrationWatchdog);
  narrationWatchdog = null;
  narrationGeneration += 1;
  narrationManualStop = true;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  voiceUtterance = null;
  narrationChunks = [];
  narrationChunkWeights = [];
  narrationChunkIndex = 0;
  narrationCompletedWeight = 0;
  narrationDone = false;
}

function scheduleSleepTimer() {
  clearTimeout(sleepTimerTimeout);
  if (!state.timer || !state.playing) return;
  sleepTimerTimeout = setTimeout(() => {
    stopPlayback({ reset: true });
  }, state.timer * 60 * 1000);
}

function nextEpisodeInSeries() {
  const item = selectedSeries();
  const currentEpisode = selectedEpisode();
  const currentNumber = Number(currentEpisode.episodeNumber || 0);
  const orderedEpisodes = item.episodes
    .slice()
    .sort((a, b) => Number(a.episodeNumber || 999) - Number(b.episodeNumber || 999) || a.title.localeCompare(b.title));
  return orderedEpisodes.find((episode) => Number(episode.episodeNumber || 999) > currentNumber) || null;
}

function beginSelectedEpisode({ incrementListen = true } = {}) {
  state.progress = 0;
  state.elapsedSeconds = 0;
  state.playing = true;
  if (incrementListen) {
    state.listens += 1;
  }
  recordListeningHistory();
  startAudioBed();
  startVoiceover();
  scheduleSleepTimer();
  startProgressLoop();
  render();
}

function playNextEpisode() {
  const nextEpisode = nextEpisodeInSeries();
  if (!nextEpisode || !canPlay(nextEpisode)) return;
  stopPlayback({ reset: true });
  state.selectedEpisodeId = nextEpisode.id;
  beginSelectedEpisode();
}

function handlePlaybackEnded() {
  state.playing = false;
  clearInterval(progressInterval);
  cancelAnimationFrame(progressFrame);
  clearTimeout(sleepTimerTimeout);
  stopAudioBed();
  stopVoiceover();

  const nextEpisode = state.autoplayNext ? nextEpisodeInSeries() : null;
  if (nextEpisode && canPlay(nextEpisode)) {
    state.selectedEpisodeId = nextEpisode.id;
    beginSelectedEpisode();
    return;
  }

  state.progress = 0;
  state.elapsedSeconds = 0;
  saveLastPlayed();
  render();
}

function updatePlaybackProgress() {
  if (!state.playing) return;
  const duration = episodeDurationSeconds();
  if (isSeekingPlayback || audioSeekInProgress) {
    renderPlayer();
    progressFrame = requestAnimationFrame(updatePlaybackProgress);
    return;
  }
  state.elapsedSeconds = storyAudio
    ? Math.min(duration, Math.max(0, storyAudio.currentTime || 0))
    : narrationChunks.length
      ? narrationElapsedSeconds()
      : Math.min(duration, Math.max(0, state.elapsedSeconds));
  state.progress = Math.min(100, (state.elapsedSeconds / duration) * 100);
  saveLastPlayed();

  if (state.elapsedSeconds >= duration) {
    handlePlaybackEnded();
    return;
  }

  renderPlayer();
  progressFrame = requestAnimationFrame(updatePlaybackProgress);
}

function startProgressLoop() {
  clearInterval(progressInterval);
  cancelAnimationFrame(progressFrame);
  playbackStartedAt = Date.now() - state.elapsedSeconds * 1000;
  updatePlaybackProgress();
  progressInterval = setInterval(() => {
    if (state.playing) {
      save();
    }
  }, 1000);
}

function stopPlayback({ reset = false } = {}) {
  state.playing = false;
  clearInterval(progressInterval);
  cancelAnimationFrame(progressFrame);
  clearTimeout(sleepTimerTimeout);
  stopAudioBed();
  stopVoiceover();

  if (reset) {
    state.progress = 0;
    state.elapsedSeconds = 0;
  }
  saveLastPlayed();

  render();
}

function replayEpisode() {
  const episode = selectedEpisode();
  if (!canPlay(episode)) {
    navigate("premium");
    return;
  }

  stopPlayback({ reset: true });
  state.listens += 1;
  recordListeningHistory();
  state.playing = true;
  startAudioBed();
  startVoiceover();
  scheduleSleepTimer();
  startProgressLoop();
  render();
}

function seekSecondsFromPointer(event) {
  const control = $("#progressControl");
  if (!control) return state.elapsedSeconds;
  const rect = control.getBoundingClientRect();
  const x = Math.min(rect.right, Math.max(rect.left, event.clientX || rect.left));
  const ratio = rect.width ? (x - rect.left) / rect.width : 0;
  return Math.round(ratio * episodeDurationSeconds());
}

function beginProgressSeek(event) {
  if (event.button !== undefined && event.button !== 0) return;
  event.preventDefault();
  isSeekingPlayback = true;
  activeSeekPointerId = event.pointerId;
  event.currentTarget.setPointerCapture?.(event.pointerId);
  updateSeekPreview(seekSecondsFromPointer(event));
}

function moveProgressSeek(event) {
  if (!isSeekingPlayback || event.pointerId !== activeSeekPointerId) return;
  event.preventDefault();
  updateSeekPreview(seekSecondsFromPointer(event));
}

function finishProgressSeek(event) {
  if (!isSeekingPlayback || event.pointerId !== activeSeekPointerId) return;
  event.preventDefault();
  const nextSeconds = seekSecondsFromPointer(event);
  isSeekingPlayback = false;
  activeSeekPointerId = null;
  event.currentTarget.releasePointerCapture?.(event.pointerId);
  seekPlayback(nextSeconds);
}

function audioReadyForSeek(audio = storyAudio) {
  return Boolean(audio && Number.isFinite(audio.duration) && audio.readyState >= 1);
}

function finishAudioSeek() {
  if (!storyAudio || !audioSeekInProgress) return;
  audioSeekInProgress = false;
  if (audioSeekResumeAfter && state.playing && storyAudio.paused) {
    storyAudio.play().catch((error) => {
      console.warn("Story audio could not resume after seeking.", error);
    });
  }
  audioSeekResumeAfter = false;
  startProgressLoop();
  renderPlayer();
}

function applyAudioSeek(seconds) {
  if (!storyAudio) return false;
  if (!audioReadyForSeek(storyAudio)) {
    pendingAudioSeekSeconds = seconds;
    storyAudio.load();
    return false;
  }

  const duration = episodeDurationSeconds();
  const target = Math.min(duration - 0.25, Math.max(0, Number(seconds) || 0));
  audioSeekInProgress = true;
  audioSeekResumeAfter = state.playing && !storyAudio.paused;
  clearInterval(progressInterval);
  cancelAnimationFrame(progressFrame);

  if (audioSeekResumeAfter) {
    storyAudio.pause();
  }

  try {
    storyAudio.currentTime = target;
  } catch (error) {
    audioSeekInProgress = false;
    audioSeekResumeAfter = false;
    console.warn("Story audio seek failed.", error);
    return false;
  }

  window.setTimeout(finishAudioSeek, 1600);
  return true;
}

function seekPlayback(seconds) {
  const duration = episodeDurationSeconds();
  state.elapsedSeconds = Math.min(duration - 0.25, Math.max(0, Number(seconds) || 0));
  state.progress = Math.min(100, (state.elapsedSeconds / duration) * 100);
  saveLastPlayed();

  if (storyAudio) {
    applyAudioSeek(state.elapsedSeconds);
  }

  if (state.playing && !storyAudio) {
    stopVoiceover();
    startVoiceover();
    startProgressLoop();
  }

  renderPlayer();
  save();
}

function updateSeekPreview(seconds) {
  const duration = episodeDurationSeconds();
  state.elapsedSeconds = Math.min(duration - 0.25, Math.max(0, Number(seconds) || 0));
  state.progress = Math.min(100, (state.elapsedSeconds / duration) * 100);
  renderPlayer();
}

function navigate(screen) {
  if (["admin", "legal", "store"].includes(screen) && !state.ownerUnlocked) {
    screen = "profile";
  }
  state.screen = screen;
  $$(".screen").forEach((section) => section.classList.toggle("active", section.dataset.screen === screen));
  $$(".bottom-nav button").forEach((button) => button.classList.toggle("active", button.dataset.nav === screen));
  render();
}

function filteredSeries() {
  return series.filter((item) => {
    const query = state.query.trim().toLowerCase();
    const matchesCategory = !state.category || item.category === state.category;
    const episodeText = item.episodes.map((episode) => `${episode.title} ${episode.description}`).join(" ");
    const haystack = `${item.title} ${item.category} ${item.island} ${item.narrator} ${item.summary} ${episodeText}`.toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function coverArtMarkup(item, className = "story-art") {
  if (item.coverUrl) {
    return `<span class="${className} has-cover" data-fallback-icon="${item.icon}"><img src="${item.coverUrl}" alt="" loading="lazy" /></span>`;
  }
  return `<span class="${className}">${item.icon}</span>`;
}

function detailArtMarkup(item, episode) {
  const coverUrl = episode.coverUrl || item.coverUrl;
  if (coverUrl) {
    return `<div class="detail-art has-cover" data-fallback-icon="${item.icon}"><img src="${coverUrl}" alt="" /></div>`;
  }
  return `<div class="detail-art">${item.icon}</div>`;
}

function cliffhangerMarkup(episode) {
  if (!episode.hasCliffhanger || !episode.nextEpisodeHint) return "";
  return `
    <div class="cliffhanger-note">
      <span class="chip">For another night</span>
      <p>${episode.nextEpisodeHint}</p>
    </div>
  `;
}

function seriesButton(item) {
  const freeCount = item.episodes.filter((episode) => episode.free).length;
  const narrator = seriesNarratorLabel(item);
  return `
    <button class="story-card" type="button" data-series="${item.id}">
      ${coverArtMarkup(item)}
      <span>
        <h4>${item.title}</h4>
        <p>${item.category} | ${item.episodes.length} episodes | ${freeCount} free listener episodes</p>
        <small>Narrator: ${narrator}</small>
      </span>
      <span>></span>
    </button>
  `;
}

function countrySections(list) {
  const groups = new Map();
  list.forEach((item) => {
    const country = item.island || "Caribbean";
    if (!groups.has(country)) {
      groups.set(country, []);
    }
    groups.get(country).push(item);
  });
  return [...groups.entries()]
    .sort(([countryA], [countryB]) => {
      const rankA = countryOrder.indexOf(countryA);
      const rankB = countryOrder.indexOf(countryB);
      return (rankA === -1 ? 999 : rankA) - (rankB === -1 ? 999 : rankB) || countryA.localeCompare(countryB);
    })
    .map(([country, countrySeries]) => {
      const episodeCount = countrySeries.reduce((sum, item) => sum + item.episodes.length, 0);
      return `
        <section class="country-section">
          <div class="country-head">
            <div>
              <p class="eyebrow">${country}</p>
              <h4>${countrySeries.length} ${countrySeries.length === 1 ? "series" : "series"}</h4>
            </div>
            <span class="count">${episodeCount} episodes</span>
          </div>
          <div class="story-list">
            ${countrySeries.map(seriesButton).join("")}
          </div>
        </section>
      `;
    }).join("");
}

function episodeButton(episode, item) {
  const text = localizedEpisodeText(episode, item);
  const isSelected = episode.id === state.selectedEpisodeId;
  const isPlaying = isSelected && state.playing;
  const playLabel = isPlaying ? "Now Playing" : (isSelected && state.elapsedSeconds > 0 ? "Resume" : "Play");
  return `
    <article class="episode-card ${isSelected ? "selected" : ""} ${isPlaying ? "playing" : ""}" data-episode-card="${episode.id}">
      <button class="episode-main" type="button" data-episode="${episode.id}">
        <span class="episode-number">${episode.episodeNumber || item.episodes.indexOf(episode) + 1}</span>
        <span>
          <strong>${text.title}</strong>
          <small>${text.description}</small>
          <small>Narrator: ${episodeNarratorLabel(episode, item)}</small>
        </span>
      </button>
      <button class="episode-play-btn" type="button" data-play-episode="${episode.id}">
        ${playLabel}
      </button>
    </article>
  `;
}

function commentCard(comment, allowShoutout = true) {
  const item = series.find((seriesItem) => seriesItem.id === comment.seriesId);
  const alreadyChosen = state.shoutouts.some((shoutout) => shoutout.commentId === comment.id);
  const reported = state.reports.some((report) => report.targetId === comment.id && report.status !== "Resolved");
  return `
    <article class="comment-card">
      <div>
        <strong>${comment.author}</strong>
        <small>${comment.date}${item ? ` | ${item.title}` : ""}</small>
      </div>
      <p>${comment.text}</p>
      ${allowShoutout || state.ownerUnlocked ? `
        <div class="action-row ${state.ownerUnlocked && allowShoutout ? "" : "single"}">
          ${allowShoutout ? `<button class="secondary-btn" type="button" data-shoutout="${comment.id}">${alreadyChosen ? "Story drafted" : "Turn into story"}</button>` : ""}
          ${state.ownerUnlocked ? `<button class="secondary-btn" type="button" data-report="comment" data-report-id="${comment.id}">${reported ? "Flagged" : "Owner flag"}</button>` : ""}
        </div>
      ` : ""}
    </article>
  `;
}

function shoutoutCard(shoutout) {
  return `
    <article class="comment-card shoutout-card">
      <span class="chip premium-chip">Shoutout story</span>
      <h4>${shoutout.title}</h4>
      <p>${shoutout.storyIdea}</p>
      <small>Inspired by ${shoutout.author} | ${shoutout.product || "Basic Shoutout Story"} | ${shoutout.price || "$9.99"} | ${shoutout.status}</small>
    </article>
  `;
}

function submissionCard(submission) {
  const approved = state.approvedSubmissions.includes(submission.id);
  const payoutReviewed = state.reviewedPayouts.includes(submission.id);
  const reported = state.reports.some((report) => report.targetId === submission.id && report.status !== "Resolved");
  return `
    <article class="comment-card">
      <span class="chip">${approved ? "Approved for publishing" : submission.status}</span>
      <h4>${submission.title}</h4>
      <p>${submission.pitch}</p>
      <small>${submission.category} | ${submission.island} | ${submission.payout}${payoutReviewed ? " | Payout reviewed" : ""}</small>
      ${state.ownerUnlocked ? `<button class="secondary-btn" type="button" data-report="submission" data-report-id="${submission.id}">${reported ? "Flagged" : "Owner flag"}</button>` : ""}
    </article>
  `;
}

function adminReportCard(report) {
  return `
    <article class="comment-card">
      <span class="chip premium-chip">${report.type}</span>
      <h4>${report.reason}</h4>
      <p>${report.preview}</p>
      <small>${report.date} | ${report.status}</small>
      <div class="action-row">
        <button class="secondary-btn" type="button" data-resolve-report="${report.id}">Resolve</button>
        <button class="secondary-btn" type="button" data-escalate-report="${report.id}">Escalate</button>
      </div>
    </article>
  `;
}

function adminSubmissionCard(submission) {
  const approved = state.approvedSubmissions.includes(submission.id);
  return `
    <article class="comment-card">
      <span class="chip">${approved ? "Approved" : submission.status}</span>
      <h4>${submission.title}</h4>
      <p>${submission.pitch}</p>
      <small>${submission.category} | ${submission.island} | ${submission.payout}</small>
      <div class="action-row">
        <button class="secondary-btn" type="button" data-approve-submission="${submission.id}">${approved ? "Approved" : "Approve story"}</button>
        <button class="secondary-btn" type="button" data-review-payout="${submission.id}">Review payout</button>
      </div>
    </article>
  `;
}

function adminEpisodeCard(episode) {
  const published = state.publishedEpisodes.includes(episode.id);
  return `
    <article class="comment-card">
      <span class="chip">${published ? "Published" : "Draft"}</span>
      <h4>${episode.title}</h4>
      <p>${episode.series.title}</p>
      <small>${episode.series.island} | ${episode.duration} min | ${episode.free ? "Free" : "Paid"}</small>
      <button class="secondary-btn" type="button" data-publish-episode="${episode.id}">${published ? "Published" : "Publish episode"}</button>
    </article>
  `;
}

function legalCard(policy) {
  return `
    <article class="comment-card">
      <span class="chip">Required before launch</span>
      <h4>${policy.title}</h4>
      <p>${policy.summary}</p>
      <small>${policy.detail}</small>
    </article>
  `;
}

function checklistCard(item) {
  return `
    <article class="comment-card">
      <span class="chip ${item.status === "Needed" ? "premium-chip" : ""}">${item.status}</span>
      <h4>${item.title}</h4>
      <p>${item.detail}</p>
    </article>
  `;
}

function renderHome() {
  const featured = series[1] || series[0];
  const freeCount = featured.episodes.filter((episode) => episode.free).length;
  $("#featuredCard").innerHTML = `
    <span class="chip">Featured series</span>
    <span class="chip">${catalogSource}</span>
    <h3>${featured.title}</h3>
    <p>${featured.summary}</p>
    <div class="meta-row">
      <span class="chip">${featured.episodes.length} episodes</span>
      <span class="chip">${catalogStoryCount} stories loaded</span>
      <span class="chip">${freeCount} free</span>
      <span class="chip">${featured.island}</span>
    </div>
    <button class="primary-btn" type="button" data-series="${featured.id}">View series</button>
  `;

  $("#categoryRow").innerHTML = categories.map(([name, icon]) => `
    <button class="category-pill ${state.category === name ? "active" : ""}" type="button" data-category="${name}">
      <span>${icon}</span>
      ${name}
    </button>
  `).join("");

  const list = filteredSeries();
  const countryCount = new Set(list.map((item) => item.island || "Caribbean")).size;
  $("#storyListTitle").textContent = state.category ? `${state.category} by country` : "Countries";
  $("#storyCount").textContent = `${countryCount} countries | ${list.length} series | ${catalogSource}`;
  $("#storyList").innerHTML = list.length ? countrySections(list) : `<div class="empty-state">No stories found.</div>`;
  $("#greeting").textContent = state.user ? `Good evening, ${state.user.name}` : "Good evening";
}

function renderDetail() {
  const item = selectedSeries();
  const episode = selectedEpisode();
  const nextEpisode = nextEpisodeInSeries();
  const episodeText = localizedEpisodeText(episode, item);
  const freeCount = item.episodes.filter((itemEpisode) => itemEpisode.free).length;
  const comments = commentsForSeries(item.id);
  $("#favoriteBtn").textContent = state.favorites.includes(item.id) ? "♥" : "♡";
  $("#detailCard").innerHTML = `
    ${detailArtMarkup(item, episode)}
    <div class="meta-row">
      <span class="chip">${item.category}</span>
      <span class="chip">${item.episodes.length} episodes</span>
      <span class="chip">${freeCount} free</span>
      <span class="chip">${totalMinutes(item)} min</span>
    </div>
    <h2>${item.title}</h2>
    <p>${item.detail}</p>
    <div class="meta-row">
      <span class="chip">${item.island}</span>
      <span class="chip">${item.mood}</span>
      <span class="chip">${episodeNarratorLabel(episode, item)}</span>
    </div>
    <div class="episode-list">
      ${item.episodes.map((itemEpisode) => episodeButton(itemEpisode, item)).join("")}
    </div>
    <div class="active-episode">
      <span class="chip">${episodeText.free}</span>
      <span class="chip">${episodeNarratorLabel(episode, item)}</span>
      <span class="chip">${currentLanguage().label}</span>
      <span class="chip">${selectedEpisodeAudioUrl(episode) ? "Recorded narration" : "Browser voice"}</span>
      ${state.playing ? `<span class="chip now-playing-chip">Now Playing</span>` : ""}
      <h3>${episodeText.title}</h3>
      <p>${episodeText.description}</p>
    </div>
    <div class="detail-actions">
      <button class="primary-btn" id="detailPlayBtn" type="button">${state.playing ? "Pause episode" : (state.elapsedSeconds > 0 ? "Resume episode" : "Play episode")}</button>
      ${nextEpisode ? `<button class="secondary-btn" id="detailNextBtn" type="button">Next Episode</button>` : `<button class="secondary-btn" type="button" disabled>End of series</button>`}
      <button class="secondary-btn" id="detailTimerBtn" type="button">${state.timer ? `${state.timer} min timer` : "Timer off"}</button>
    </div>
    ${cliffhangerMarkup(episode)}
    <div class="comment-section">
      <div class="section-head">
        <h3>Listener Comments</h3>
        <span class="count">${comments.length}</span>
      </div>
      <form class="comment-form" data-comment-form>
        <textarea rows="3" placeholder="Leave a memory, request, or dream idea for this series." required></textarea>
        <button class="secondary-btn" type="submit">Post comment</button>
      </form>
      <div class="comment-list">
        ${comments.length ? comments.map((comment) => commentCard(comment, false)).join("") : `<div class="empty-state">No comments yet.</div>`}
      </div>
    </div>
  `;
}

function renderFavorites() {
  const savedSeries = series.filter((item) => state.favorites.includes(item.id));
  $("#favoritesList").innerHTML = savedSeries.length
    ? savedSeries.map(seriesButton).join("")
    : `<div class="empty-state">Favorited stories will rest here after you tap the heart on a story page.</div>`;
}

function renderPremium() {
  $("#planLabel").textContent = state.subscribed ? `${packageName()} active` : "Free listener";
  $("#subscribeBtn").textContent = state.subscribed ? "Cancel subscription" : "Subscribe to selected package";
  $("#premiumList").innerHTML = `
    <div class="revenue-strip">
      <span><strong>$4.99+</strong> subscriptions</span>
      <span><strong>$6.99+</strong> story packs</span>
      <span><strong>$299+</strong> licenses</span>
    </div>
    <div class="section-head">
      <h3>Memberships</h3>
      <span class="count">Recurring</span>
    </div>
    <div class="package-list">
      ${packages.map((pack) => `
        <button class="package-card ${state.packageId === pack.id ? "active" : ""}" type="button" data-package="${pack.id}">
          <span>
            <strong>${pack.name}</strong>
            <small>${pack.description}</small>
            <small>${pack.revenue}</small>
          </span>
          <span>${pack.price}</span>
        </button>
      `).join("")}
    </div>
    <div class="section-head">
      <h3>Paid Story Packs</h3>
      <span class="count">One-time</span>
    </div>
    <div class="package-list">
      ${storyPacks.map((pack) => `
        <button class="package-card ${state.selectedPackId === pack.id ? "active" : ""}" type="button" data-pack="${pack.id}">
          <span>
            <strong>${pack.name}</strong>
            <small>${pack.description}</small>
          </span>
          <span>${pack.price}</span>
        </button>
      `).join("")}
    </div>
    <div class="section-head">
      <h3>Partners</h3>
      <span class="count">B2B</span>
    </div>
    <div class="package-list">
      ${businessOffers.map((offer) => `
        <button class="package-card ${state.selectedOfferId === offer.id ? "active" : ""}" type="button" data-offer="${offer.id}">
          <span>
            <strong>${offer.name}</strong>
            <small>${offer.description}</small>
          </span>
          <span>${offer.price}</span>
        </button>
      `).join("")}
    </div>
    <div class="section-head">
      <h3>Paid episodes</h3>
      <span class="count">${allEpisodes().filter((episode) => !episode.free).length} locked</span>
    </div>
    ${series.filter((item) => item.episodes.some((episode) => !episode.free)).map(seriesButton).join("")}
  `;
}

function renderCommunity() {
  const allComments = state.comments.slice().reverse();
  $("#shoutoutList").innerHTML = `
    <div class="section-head">
      <h3>Paid shoutouts</h3>
      <span class="count">Custom</span>
    </div>
    <div class="package-list">
      ${shoutoutProducts.map((product) => `
        <button class="package-card ${state.selectedShoutoutProductId === product.id ? "active" : ""}" type="button" data-shoutout-product="${product.id}">
          <span>
            <strong>${product.name}</strong>
            <small>${product.description}</small>
          </span>
          <span>${product.price}</span>
        </button>
      `).join("")}
    </div>
    ${state.shoutouts.length ? state.shoutouts.map(shoutoutCard).join("") : `<div class="empty-state">No shoutout stories yet. Choose a comment from a series page to create one.</div>`}
    <div class="section-head">
      <h3>Recent comments</h3>
      <span class="count">${allComments.length}</span>
    </div>
    ${allComments.length ? allComments.map((comment) => commentCard(comment)).join("") : ""}
  `;

  $("#creatorIntro").textContent = state.subscribed
    ? "Subscribers can publish approved stories and earn 50-70% of creator revenue from packs, tips, or licensed collections."
    : "Subscribe to unlock paid publication submissions and creator revenue sharing.";
  $("#creatorForm").classList.toggle("locked", !state.subscribed);
  $("#creatorSubmitBtn").textContent = state.subscribed ? "Submit for paid review" : "Subscribe to submit";
  $("#submissionList").innerHTML = state.submissions.length
    ? state.submissions.map(submissionCard).join("")
    : `<div class="empty-state">Subscriber story submissions will appear here. Approved creators can earn 50-70% revenue share.</div>`;
}

function renderProfile() {
  const user = state.user || { name: "Guest listener", email: "Not signed in" };
  $("#profileName").textContent = user.name;
  $("#profileEmail").textContent = user.email;
  const initials = user.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "CD";
  $("#avatar").classList.toggle("has-photo", Boolean(state.profileAvatarUrl));
  $("#avatar").innerHTML = state.profileAvatarUrl
    ? `<img src="${state.profileAvatarUrl}" alt="" />`
    : initials;
  $("#favoriteCount").textContent = state.favorites.length;
  $("#listenCount").textContent = state.listens;
  renderContinueListening();
  renderLanguageOptions();
  renderNarratorOptions();
  renderListeningHistory();
  $("#loginAgainBtn").textContent = state.user ? "Switch account" : "Sign in";
  $("#editProfileBtn").classList.toggle("hidden", !hasValidSession());
  $("#profileEditForm").classList.toggle("hidden", !state.editingProfile);
  $("#profileNameInput").value = user.name;
  $("#profileEmailInput").value = user.email === "Not signed in" ? "" : user.email;
  $("#profileAvatarInput").value = state.profileAvatarUrl;
  $("#developerStatusPanel").classList.toggle("hidden", !state.isAdmin);
  $("#dataStatus").textContent = state.isAdmin
    ? (window.CariDreamBackend?.status?.() || "Local prototype storage. Firebase is not connected yet.")
    : "";
  $("#ownerAccessPanel").classList.toggle("hidden", !state.isAdmin);
  $("#ownerStatus").textContent = state.isAdmin
    ? "Admin account verified. Owner tools are available."
    : "Admin tools are hidden.";
  $("#ownerTools").classList.toggle("hidden", !state.isAdmin);
  $("#autoplayToggle").classList.toggle("active", state.autoplayNext);
  $("#autoplayToggle").setAttribute("aria-pressed", String(state.autoplayNext));
  const supportIssue = speechSupportIssue();
  $("#speechSupportNotice").textContent = supportIssue;
  $("#speechSupportNotice").classList.toggle("hidden", !supportIssue);
  $("#timerOptions").innerHTML = timers.map((minutes) => `
    <button class="${state.timer === minutes ? "active" : ""}" type="button" data-timer="${minutes}">
      ${minutes ? `${minutes}m` : "Off"}
    </button>
  `).join("");
}

function renderContinueListening() {
  const last = state.lastPlayed || {
    seriesId: "aruba-trade-wind-lullabies",
    episodeId: "aruba-ep1",
    seriesTitle: "Trade Wind Lullabies",
    episodeTitle: "The Wind Finds a Hummingbird",
    elapsedSeconds: 10,
    durationSeconds: 14 * 60
  };
  $("#continueListening").innerHTML = `
    <article class="comment-card continue-card">
      <span class="chip">Continue Listening</span>
      <h4>${last.episodeTitle}</h4>
      <p>${formatTime(last.elapsedSeconds)} / ${formatTime(last.durationSeconds)}</p>
      <button class="primary-btn" type="button" data-resume-episode="${last.seriesId}|${last.episodeId}|${last.elapsedSeconds}">Resume</button>
    </article>
  `;
}

function renderLanguageOptions() {
  $("#languageOptions").innerHTML = languages.map((language) => `
    <button class="${state.language === language.code ? "active" : ""}" type="button" data-language="${language.code}">
      ${language.label}
    </button>
  `).join("");
}

function renderNarratorOptions() {
  $("#narratorOptions").innerHTML = narratorPreferences.map((narrator) => `
    <button class="${state.narratorPreference === narrator.id ? "active" : ""}" type="button" data-narrator-preference="${narrator.id}">
      <strong>${narrator.label}</strong>
      <small>${narrator.description}</small>
    </button>
  `).join("");
}

function renderListeningHistory() {
  $("#listeningHistory").innerHTML = state.listeningHistory.length
    ? state.listeningHistory.map((entry) => {
      const language = languages.find((item) => item.code === entry.language) || languages[0];
      const playedDate = entry.playedAt ? new Date(entry.playedAt).toLocaleDateString([], { month: "short", day: "numeric" }) : "Recent";
      return `
        <article class="comment-card history-card">
          <span class="chip">${language.label}</span>
          <h4>${entry.episodeTitle}</h4>
          <p>${entry.seriesTitle}</p>
          <small>${playedDate} | ${formatTime(entry.elapsedSeconds || 0)} / ${formatTime(entry.durationSeconds || 1)}</small>
          <button class="secondary-btn" type="button" data-resume-episode="${entry.seriesId}|${entry.episodeId}|${entry.elapsedSeconds || 0}">Resume</button>
        </article>
      `;
    }).join("")
    : `<div class="empty-state">Episodes you play will appear here.</div>`;
}

function renderAdmin() {
  const activeReports = state.reports.filter((report) => report.status !== "Resolved");
  $("#moderationQueue").innerHTML = activeReports.length
    ? activeReports.map(adminReportCard).join("")
    : `<div class="empty-state">No active owner flags. Flag comments or submissions while owner tools are unlocked.</div>`;
  $("#adminEpisodes").innerHTML = allEpisodes().slice(0, 12).map(adminEpisodeCard).join("");
  $("#adminSafetyRules").innerHTML = safetyRules.map((rule) => `
    <article class="comment-card">
      <span class="chip">Owner rule</span>
      <p>${rule}</p>
    </article>
  `).join("");
}

function renderLegal() {
  $("#legalPages").innerHTML = legalPolicies.map(legalCard).join("");
}

function renderStore() {
  $("#storeChecklist").innerHTML = storeRequirements.map(checklistCard).join("");
}

function renderPlayer() {
  const item = selectedSeries();
  const episode = selectedEpisode();
  const nextEpisode = nextEpisodeInSeries();
  const text = localizedEpisodeText(episode, item);
  const duration = episodeDurationSeconds(episode);
  $("#miniPlayer").classList.toggle("hidden", !state.playing && state.elapsedSeconds === 0);
  $("#playPauseBtn").textContent = state.playing ? "II" : ">";
  $("#playerTitle").textContent = `${text.title} - ${item.title}`;
  const visibleProgress = state.elapsedSeconds > 0 ? Math.max(state.progress, 1.25) : 0;
  $("#progressBar").style.width = `${visibleProgress}%`;
  $("#progressSeek").max = String(duration);
  $("#progressSeek").value = String(Math.min(duration, Math.max(0, Math.floor(state.elapsedSeconds))));
  $("#timerText").textContent = `${formatTime(state.elapsedSeconds)} / ${formatTime(duration)}${state.timer ? ` | Sleep timer: ${state.timer}m` : ""}`;
  $("#autoplayPlayerBtn").classList.toggle("active", state.autoplayNext);
  $("#autoplayPlayerBtn").setAttribute("aria-label", `Autoplay next episode ${state.autoplayNext ? "on" : "off"}`);
  const supportIssue = speechSupportIssue();
  $("#playerSpeechWarning").textContent = supportIssue;
  $("#playerSpeechWarning").classList.toggle("hidden", !supportIssue || Boolean(selectedEpisodeAudioUrl(episode)));
  $("#nextEpisodeBtn").textContent = nextEpisode ? "Next Episode" : "End of series";
  $("#nextEpisodeBtn").disabled = !nextEpisode;
  $("#nextEpisodeBtn").classList.toggle("disabled", !nextEpisode);
}

function render() {
  applyBackgroundTheme();
  renderHome();
  renderDetail();
  renderFavorites();
  renderProfile();
  renderAdmin();
  renderLegal();
  renderStore();
  renderPlayer();
  save();
}

function openSeries(id) {
  const item = series.find((seriesItem) => seriesItem.id === id) || initialSeries;
  if (state.playing) {
    stopPlayback({ reset: true });
  }
  state.selectedSeriesId = item.id;
  state.selectedEpisodeId = item.episodes[0].id;
  state.progress = 0;
  state.elapsedSeconds = 0;
  navigate("detail");
}

function chooseEpisode(id) {
  const item = selectedSeries();
  const episode = item.episodes.find((itemEpisode) => itemEpisode.id === id);
  if (!episode) return;
  if (state.playing) {
    stopPlayback({ reset: true });
  }
  state.selectedEpisodeId = episode.id;
  state.progress = 0;
  state.elapsedSeconds = 0;
  if (!canPlay(episode)) {
    navigate("premium");
    return;
  }
  render();
}

function playEpisode(id) {
  const item = selectedSeries();
  const episode = item.episodes.find((itemEpisode) => itemEpisode.id === id);
  if (!episode) return;

  if (episode.id === state.selectedEpisodeId && state.playing) {
    togglePlayback();
    return;
  }

  if (state.playing) {
    stopPlayback({ reset: true });
  }

  state.selectedEpisodeId = episode.id;
  state.progress = 0;
  state.elapsedSeconds = 0;
  if (!canPlay(episode)) {
    navigate("premium");
    return;
  }
  beginSelectedEpisode();
}

function createShoutout(commentId) {
  const comment = state.comments.find((item) => item.id === commentId);
  if (!comment || state.shoutouts.some((shoutout) => shoutout.commentId === comment.id)) {
    navigate("community");
    return;
  }

  const product = selectedShoutoutProduct();
  state.shoutouts = [
    {
      id: `shoutout-${Date.now()}`,
      commentId: comment.id,
      author: comment.author,
      title: `The ${shoutoutTitle(comment)} Story`,
      storyIdea: `A new narrated episode inspired by this comment: "${comment.text}"`,
      product: product.name,
      price: product.price,
      status: "Ready for story development"
    },
    ...state.shoutouts
  ];
  navigate("community");
}

function reportContent(type, targetId) {
  if (!state.ownerUnlocked) return;
  if (state.reports.some((report) => report.type === type && report.targetId === targetId && report.status !== "Resolved")) {
    render();
    return;
  }

  const comment = state.comments.find((item) => item.id === targetId);
  const submission = state.submissions.find((item) => item.id === targetId);
  const target = comment || submission;
  state.reports = [
    {
      id: `report-${Date.now()}`,
      type,
      targetId,
      reason: type === "comment" ? "Comment needs owner review" : "Creator submission needs owner review",
      preview: target?.text || target?.pitch || "Flagged content",
      date: "Just now",
      status: "Open"
    },
    ...state.reports
  ];
  render();
}

function updateReport(reportId, status) {
  if (!state.ownerUnlocked) return;
  state.reports = state.reports.map((report) => report.id === reportId ? { ...report, status } : report);
  render();
}

function approveSubmission(submissionId) {
  if (!state.ownerUnlocked) return;
  if (!state.approvedSubmissions.includes(submissionId)) {
    state.approvedSubmissions = [submissionId, ...state.approvedSubmissions];
  }
  state.submissions = state.submissions.map((submission) =>
    submission.id === submissionId ? { ...submission, status: "Approved for publishing" } : submission
  );
  render();
}

function publishEpisode(episodeId) {
  if (!state.ownerUnlocked) return;
  if (!state.publishedEpisodes.includes(episodeId)) {
    state.publishedEpisodes = [episodeId, ...state.publishedEpisodes];
  }
  render();
}

function reviewPayout(submissionId) {
  if (!state.ownerUnlocked) return;
  if (!state.reviewedPayouts.includes(submissionId)) {
    state.reviewedPayouts = [submissionId, ...state.reviewedPayouts];
  }
  render();
}

function togglePlayback() {
  const episode = selectedEpisode();
  if (!canPlay(episode)) {
    navigate("premium");
    return;
  }

  if (!state.playing && state.elapsedSeconds === 0) {
    state.listens += 1;
  }

  state.playing = !state.playing;
  clearInterval(progressInterval);
  clearTimeout(sleepTimerTimeout);

  if (state.playing) {
    recordListeningHistory();
    startAudioBed();
    startVoiceover();
    scheduleSleepTimer();
    startProgressLoop();
  } else {
    updatePlaybackProgress();
    stopPlayback({ reset: false });
    return;
  }

  render();
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-nav]");
  const seriesCard = event.target.closest("[data-series]");
  const episodePlayButton = event.target.closest("[data-play-episode]");
  const episodeCard = event.target.closest("[data-episode]");
  const category = event.target.closest("[data-category]");
  const timer = event.target.closest("[data-timer]");
  const packageCard = event.target.closest("[data-package]");
  const packCard = event.target.closest("[data-pack]");
  const offerCard = event.target.closest("[data-offer]");
  const shoutoutProductCard = event.target.closest("[data-shoutout-product]");
  const shoutoutButton = event.target.closest("[data-shoutout]");
  const resumeButton = event.target.closest("[data-resume-episode]");
  const languageButton = event.target.closest("[data-language]");
  const narratorPreferenceButton = event.target.closest("[data-narrator-preference]");
  const reportButton = event.target.closest("[data-report]");
  const resolveReportButton = event.target.closest("[data-resolve-report]");
  const escalateReportButton = event.target.closest("[data-escalate-report]");
  const approveSubmissionButton = event.target.closest("[data-approve-submission]");
  const publishEpisodeButton = event.target.closest("[data-publish-episode]");
  const reviewPayoutButton = event.target.closest("[data-review-payout]");

  if (navButton) {
    navigate(navButton.dataset.nav);
    return;
  }
  if (seriesCard) openSeries(seriesCard.dataset.series);
  if (episodePlayButton) {
    playEpisode(episodePlayButton.dataset.playEpisode);
    return;
  }
  if (episodeCard) chooseEpisode(episodeCard.dataset.episode);
  if (resumeButton) {
    const [seriesId, episodeId, elapsed = "0"] = resumeButton.dataset.resumeEpisode.split("|");
    const item = series.find((seriesItem) => seriesItem.id === seriesId);
    if (item) {
      state.selectedSeriesId = item.id;
      state.selectedEpisodeId = episodeId;
      state.elapsedSeconds = Number(elapsed);
      state.progress = Math.min(100, (state.elapsedSeconds / episodeDurationSeconds()) * 100);
      navigate("detail");
      togglePlayback();
    }
  }
  if (shoutoutButton) createShoutout(shoutoutButton.dataset.shoutout);
  if (reportButton) reportContent(reportButton.dataset.report, reportButton.dataset.reportId);
  if (resolveReportButton) updateReport(resolveReportButton.dataset.resolveReport, "Resolved");
  if (escalateReportButton) updateReport(escalateReportButton.dataset.escalateReport, "Escalated");
  if (approveSubmissionButton) approveSubmission(approveSubmissionButton.dataset.approveSubmission);
  if (publishEpisodeButton) publishEpisode(publishEpisodeButton.dataset.publishEpisode);
  if (reviewPayoutButton) reviewPayout(reviewPayoutButton.dataset.reviewPayout);
  if (languageButton) {
    state.language = languageButton.dataset.language;
    saveLastPlayed();
    if (state.playing) {
      stopVoiceover();
      startVoiceover();
    }
    render();
  }
  if (narratorPreferenceButton) {
    state.narratorPreference = narratorPreferenceButton.dataset.narratorPreference;
    render();
    return;
  }
  if (category) {
    state.category = category.dataset.category;
    render();
  }
  if (timer) {
    state.timer = Number(timer.dataset.timer);
    scheduleSleepTimer();
    render();
  }
  if (packageCard) {
    state.packageId = packageCard.dataset.package;
    render();
  }
  if (packCard) {
    state.selectedPackId = packCard.dataset.pack;
    render();
  }
  if (offerCard) {
    state.selectedOfferId = offerCard.dataset.offer;
    render();
  }
  if (shoutoutProductCard) {
    state.selectedShoutoutProductId = shoutoutProductCard.dataset.shoutoutProduct;
    render();
  }
});

$("#clearCategoryBtn").addEventListener("click", () => {
  state.category = "";
  state.query = "";
  $("#searchInput").value = "";
  render();
});

$("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

document.addEventListener("submit", (event) => {
  const commentForm = event.target.closest("[data-comment-form]");
  if (!commentForm) return;

  event.preventDefault();
  const textarea = commentForm.querySelector("textarea");
  const text = textarea.value.trim();
  if (!text) return;

  state.comments = [
    {
      id: `comment-${Date.now()}`,
      seriesId: selectedSeries().id,
      author: listenerName(),
      text,
      date: "Just now"
    },
    ...state.comments
  ];
  textarea.value = "";
  render();
});

$("#favoriteBtn").addEventListener("click", async () => {
  const id = selectedSeries().id;
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.favorites, id];
  render();
  await saveFavoritesToFirestore();
});

$("#subscribeBtn")?.addEventListener("click", () => {
  if (!state.subscribed && !state.packageId) {
    state.packageId = packages[0].id;
  }
  state.subscribed = !state.subscribed;
  if (!state.subscribed) {
    state.packageId = "";
    render();
    return;
  }
  navigate("detail");
});

$("#playPauseBtn").addEventListener("click", togglePlayback);
$("#replayBtn").addEventListener("click", replayEpisode);
$("#nextEpisodeBtn").addEventListener("click", playNextEpisode);
$("#closePlayerBtn").addEventListener("click", () => {
  stopPlayback({ reset: true });
});
$("#progressSeek").addEventListener("input", (event) => {
  isSeekingPlayback = true;
  updateSeekPreview(event.target.value);
});
$("#progressSeek").addEventListener("change", (event) => {
  isSeekingPlayback = false;
  seekPlayback(event.target.value);
});
$("#progressControl").addEventListener("pointerdown", beginProgressSeek);
$("#progressControl").addEventListener("pointermove", moveProgressSeek);
$("#progressControl").addEventListener("pointerup", finishProgressSeek);
$("#progressControl").addEventListener("pointercancel", finishProgressSeek);
$("#autoplayToggle").addEventListener("click", () => {
  state.autoplayNext = !state.autoplayNext;
  render();
});
$("#autoplayPlayerBtn").addEventListener("click", () => {
  state.autoplayNext = !state.autoplayNext;
  render();
});

document.addEventListener("click", (event) => {
  if (event.target.id === "detailPlayBtn") togglePlayback();
  if (event.target.id === "detailNextBtn") playNextEpisode();
  if (event.target.id === "detailTimerBtn") navigate("profile");
});

document.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const fallback = image.closest("[data-fallback-icon]");
  if (!fallback) {
    if (image.closest("#avatar")) {
      state.profileAvatarUrl = "";
      renderProfile();
    }
    return;
  }
  fallback.classList.remove("has-cover");
  fallback.textContent = fallback.dataset.fallbackIcon || "C";
}, true);

$("#editProfileBtn").addEventListener("click", () => {
  state.editingProfile = true;
  renderProfile();
});

$("#cancelProfileEditBtn").addEventListener("click", () => {
  state.editingProfile = false;
  renderProfile();
});

$("#profileEditForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = $("#profileNameInput").value.trim() || "CariDream listener";
  const email = state.user?.email || "";
  state.user = {
    name,
    email,
    avatarUrl: $("#profileAvatarInput").value.trim()
  };
  state.profileAvatarUrl = state.user.avatarUrl;
  state.editingProfile = false;
  if (!state.guest) {
    await window.CariDreamBackend?.signInProfile?.(state.user);
  }
  render();
});

$("#authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  await window.CariDreamBackend?.ensureSession?.();
  state.user = {
    name: $("#nameInput").value.trim(),
    email: $("#emailInput").value.trim(),
    avatarUrl: state.profileAvatarUrl
  };
  state.guest = false;
  await window.CariDreamBackend?.signInProfile?.(state.user);
  await refreshAdminAccess();
  navigate("home");
});

$("#guestBtn").addEventListener("click", async () => {
  await window.CariDreamBackend?.ensureSession?.();
  state.user = null;
  state.guest = true;
  state.isAdmin = false;
  state.ownerUnlocked = false;
  navigate("home");
});

$("#loginAgainBtn").addEventListener("click", switchAccount);

$("#ownerLockBtn").addEventListener("click", () => {
  state.ownerUnlocked = false;
  state.isAdmin = false;
  navigate("profile");
});

$("#creatorSubmitBtn")?.addEventListener("click", () => {
  if (!state.subscribed) {
    navigate("premium");
  }
});

$("#creatorForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.subscribed) {
    navigate("premium");
    return;
  }

  state.submissions = [
    {
      id: `submission-${Date.now()}`,
      title: $("#creatorTitle").value.trim(),
      island: $("#creatorIsland").value.trim(),
      category: $("#creatorCategory").value,
      pitch: $("#creatorPitch").value.trim(),
      status: "In paid review",
      payout: "Estimated payout: $75-$250 if accepted"
    },
    ...state.submissions
  ];
  $("#creatorForm").reset();
  render();
});

async function startApp() {
  const localSession = {
    user: state.user,
    guest: state.guest
  };

  try {
    const backend = await window.CariDreamBackend?.init?.();
    backendReady = Boolean(backend?.enabled);
    if (backendReady) {
      await loadFirebaseStories();
      const cloudState = await window.CariDreamBackend.loadState();
      if (cloudState) {
        Object.assign(state, cloudState);
      }
      preserveLocalSession(localSession);
      applyStoryCatalog(series);
      await syncFavoritesFromFirestore();
      await refreshAdminAccess();
    }
  } catch (error) {
    console.warn("Firebase unavailable, using local storage.", error);
    preserveLocalSession(localSession);
  }

  if (!hasValidSession()) {
    navigate("auth");
  } else {
    navigate("home");
  }
}

startApp();
