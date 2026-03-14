// AI Vision Forum Paris 2026 - Event Constants

export const EVENT_CONFIG = {
  name: "AI Vision Forum Paris 2026",
  tagline: "Architecting Human-AI Synergy",
  guidingQuestion: "As AI reshapes human roles, how do we ensure human core values remain central?",
  date: "2026-05-04", // May 4, 2026 (Monday)
  dateDisplay: "Monday, May 4, 2026",
  location: {
    city: "Paris",
    country: "France",
    venue: "TBD",
    colocated: "GOSIM Paris 2026"
  },
  scale: "100–150 invited participants",
  format: "Invitation-only",
  rule: "Chatham House Rule",
  domain: "paris2026.visionforum.ai"
} as const;

export const TRACKS = [
  {
    id: 1,
    slug: "education",
    title: "Agentic AI in Applications",
    subtitle: "Learning, Creativity, and Real-World Use",
    icon: "graduation-cap",
    description: "Showcasing real-world deployments across education, creativity, and knowledge work — from AI-native learning environments to tools that amplify human capability.",
    color: "primary" as const,
    keywords: ["AI4Education", "Embodied AI", "Multimodal Knowledge", "Personalized Learning"] as const,
    highlight: false
  },
  {
    id: 2,
    slug: "vibe-coding",
    title: "Agentic AI Systems — Human–AI Symbiosis",
    subtitle: "Building the Agentic Ecosystem",
    icon: "laptop",
    description: "A 360° exploration of building agentic systems ecosystems — from use cases and business value to architectures and collaborative development.",
    color: "secondary" as const,
    keywords: ["Agentic Software Engineering", "Autonomous Workflows", "Open-Source Coordination", "Standards"] as const,
    highlight: true
  },
  {
    id: 3,
    slug: "governance",
    title: "Trusted Agentic AI",
    subtitle: "Governance, Safety, and Sovereignty",
    icon: "scale",
    description: "Addressing the governance, safety, and sovereignty challenges of increasingly autonomous systems — from evaluation frameworks to regulatory trends.",
    color: "accent" as const,
    keywords: ["Anticipatory Governance", "AI Act Compliance", "Sovereign AI", "Trust Metrics"] as const,
    highlight: false
  },
  {
    id: 4,
    slug: "public-good",
    title: "Open Token & Digital Public Goods",
    subtitle: "Foundations for an Agentic Commons",
    icon: "globe",
    description: "Examining how agentic open-source foundations can function as global public infrastructure through value-driven projects and sustainable funding models.",
    color: "primary" as const,
    keywords: ["Public AI Tokens", "AOSF", "Sustainable Models", "Open-Source Governance"] as const,
    highlight: false
  }
] as const;

// Why Now: The AI Agent Landscape
export const WHY_NOW = {
  title: "The AI Agent Landscape Shaping This Forum",
  intro: "Three structural shifts make May 2026 the right moment for this convening. These are not trends that will fade — they are tectonic changes that will be more relevant by May, not less.",
  shifts: [
    {
      id: 1,
      title: "The Rise of Spec-Driven Development (the \"Dark Factory\")",
      description: "AI coding agents have matured from autocomplete (Level 2) to autonomous software factories (Level 5). Dan Shapiro's L0–L5 framework provides the shared vocabulary. StrongDM's 3-person Software Factory has proven L5 works: they write only natural-language specifications; agents generate all code with no human review. AWS Kiro, GitHub spec-kit, and Tessl are commercializing this paradigm."
    },
    {
      id: 2,
      title: "The Governance Gap for AI Agents",
      description: "Traditional open-source governance — code review, meritocracy, contributor identity — was built for humans. It breaks when AI agents become the contributors. The OWASP Agentic AI Top 10, the AAIF (Linux Foundation, housing MCP and AGENTS.md), and tools like StrongDM's Leash (Cedar-based AI agent policy enforcement) are racing to fill this gap. The EU AI Act reaches full enforcement August 2, 2026."
    },
    {
      id: 3,
      title: "Open-Source Sustainability Crisis Amplified by AI",
      description: "AI trains on open-source code, users get value without visiting docs, revenue funnels break. Tailwind CSS saw 80% revenue decline despite record usage. 60% of maintainers work unpaid. 454K malicious packages identified in 2025. New funding models (OpenToken with UN DPGA, HeroDevs, Open Source Pledge) are emerging but unproven."
    }
  ]
} as const;

// Our Unique Value Proposition
export const VALUE_PROPOSITION = [
  {
    id: 1,
    title: "Two-layer governance",
    description: "We bridge human-level ethics AND agent-level governance."
  },
  {
    id: 2,
    title: "Timing sweet spot",
    description: "Post-MCP Dev Summit (April 2–3 NYC), pre-EU AI Act enforcement (August 2), pre-IAPP Dublin (June). We can set the agenda."
  },
  {
    id: 3,
    title: "Cross-cultural bridge",
    description: "With GOSIM, KAIYUANSHE, and European partners, we are the only forum addressing US/EU/China open-source dynamics together."
  },
  {
    id: 4,
    title: "Durable framing over hype",
    description: "We don't chase what's hot today. We frame enduring structural questions and use current evidence as illustrations."
  }
] as const;

// AOSF Integration
export const AOSF_INFO = {
  name: "Agentic Open Source Foundation",
  tagline: "Neutral, transparent governance for AI-generated open source software",
  description: "AOSF is the first open source foundation purpose-built for the age of AI-generated code, bridging the gap between AI-generated software and the governance, security, and quality frameworks needed to make it trustworthy.",
  url: "https://aosf-org.github.io",
  github: "https://github.com/aosf-org",
  coreFunctions: [
    "Vibe-Coded Project Repository with quality tiers (Experimental → Validated → Production-Ready → Enterprise-Certified)",
    "Rust Migration Initiative — AI-assisted translation of critical C/C++ infrastructure to memory-safe Rust",
    "Agentic-Native Operations — Agent-assisted code review with transparent audit trails",
    "Ethical AI Development Standards — Attribution, licensing, and human-in-the-loop frameworks"
  ],
  keyStats: [
    "$47–93B — Projected agentic AI market by 2030–2032",
    "45% — AI-generated code containing security vulnerabilities",
    "60,000+ — Projects with AGENTS.md",
    "1B+ — Lines of C/C++ to rewrite in memory-safe languages"
  ]
} as const;

export const REFERENCE_SITES = {
  mainSite: "https://visionforum.ai/",
  hangzhou2025: "https://forum.gosim.org/en/",
  gosimParis: "https://paris2026.gosim.org"
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/aivisionforum",
  twitter: "https://twitter.com/aivisionforum",
  linkedin: "https://www.linkedin.com/company/ai-vision-forum"
} as const;


// Expected Outcomes
export const EXPECTED_OUTCOMES = [
  "AI4Humanity White Paper v2 — updated to address agent-level governance alongside human ethics",
  "AIGC Spotlight Awards",
  "Strengthened EU open-source AI ties at the critical pre-AI Act enforcement moment",
  "Concrete position on two-layer governance (human ethics + agent security)",
  "AIGC Spotlight Showcase featuring creative and technical works from the AI community"
] as const;

// Key References
export const KEY_REFERENCES = [
  { title: "Dan Shapiro — L0–L5 Framework", url: "#" },
  { title: "StrongDM Software Factory", url: "#" },
  { title: "Simon Willison — Software Factory Analysis", url: "#" },
  { title: "Stanford Law — Built by Agents, Tested by Agents", url: "#" },
  { title: "OWASP Agentic AI Top 10", url: "#" },
  { title: "AAIF (Agentic AI Foundation)", url: "#" },
  { title: "EU AI Act Full Text", url: "#" }
] as const;

export const COUNTDOWN_TARGET = new Date("2026-05-04T09:00:00+02:00"); // 9 AM CEST

// Draft schedule from PC planning document
export const SCHEDULE_OUTLINE = [
  { time: "08:30–09:00", title: "Registration & Coffee" },
  { time: "09:00–09:15", title: "Opening Remarks" },
  { time: "09:15–10:30", title: "Panel 1: Agentic AI in Applications", subtitle: "Learning, Creativity, and Real-World Use", format: "Keynote + Panel" },
  { time: "10:30–10:45", title: "Break" },
  { time: "10:45–12:00", title: "Panel 2: Agentic AI Systems — Human–AI Symbiosis", subtitle: "Building the Agentic Ecosystem", format: "Keynote + Panel" },
  { time: "12:00–13:30", title: "Lunch + AIGC Spotlight Showcase", subtitle: "Creative & technical works from the AI community", format: "Demo showcase" },
  { time: "13:30–14:45", title: "Panel 3: Trusted Agentic AI", subtitle: "Governance, Safety, and Sovereignty", format: "Keynote + Panel" },
  { time: "14:45–15:00", title: "Break" },
  { time: "15:00–16:15", title: "Panel 4: Open Token & Digital Public Goods", subtitle: "Foundations for an Agentic Commons", format: "Keynote + Panel" },
  { time: "16:15–16:45", title: "Synthesis & Closing" },
  { time: "17:00–19:30", title: "Networking Dinner" }
] as const;
