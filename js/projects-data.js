/**
 * UI/UX PORTFOLIO CASE STUDIES DATA (100% Local Assets)
 * Add images into: assets/images/projects/
 * Add new project objects to PROJECTS_DATA below anytime.
 */
const PROJECTS_DATA = [
  {
    id: "cloud-editor-ui",
    category: "uiux",
    badge: "UI/UX Design",
    metricBadge: "Design System + Web App",
    role: "Lead UI/UX Designer • Web SaaS",
    title: "Cloud Editor & Dashboard UI",
    summary: "End-to-end UI/UX redesign of a web-based LaTeX & cloud document editor with modular components and responsive dashboard workflows.",
    tags: "Figma • Design System",
    highlights: ["Auto-Layout System", "File Explorer UX", "Version History"],
    challenge: "Users needed a distraction-free document editing environment capable of handling nested project files, version snapshots, and compilation feedback without visual clutter.",
    solution: "Architected a unified dashboard and split-pane editor layout powered by tokenized Figma variables, clear visual hierarchy, and collapsible navigation panels.",
    deliverables: [
      "Tokenized color, spacing & typography system",
      "Multi-state file explorer & version history flows",
      "Developer-ready component specs & UI QA passes"
    ],
    outcome: "Delivered a scalable, consistent UI architecture that accelerated frontend implementation and streamlined document navigation.",
    image: "assets/images/projects/project-1.png",
    figmaUrl: ""
  },
  {
    id: "security-onboarding-ux",
    category: "product",
    badge: "Product UX",
    metricBadge: "End-to-End User Flows",
    role: "Product Designer • Auth & Security",
    title: "Security, 2FA & Onboarding Flows",
    summary: "Friction-free authentication gateways, OTP verification, two-factor security settings, and comprehensive edge-case states.",
    tags: "Wireframing • User Flows",
    highlights: ["2FA Setup Flow", "OTP Verification", "Edge-Case States"],
    challenge: "Account security and multi-step verification flows often create drop-offs when error states, recovery codes, or session alerts are unclear.",
    solution: "Designed step-by-step progressive disclosure modals with clear status indicators, inline validation, and fallback recovery paths.",
    deliverables: [
      "Complete authentication & 2FA user flow maps",
      "Interactive Figma prototypes for desktop & mobile",
      "Comprehensive error, empty & loading state matrix"
    ],
    outcome: "Eliminated ambiguity across critical security touchpoints and ensured 100% state coverage for QA automation.",
    image: "assets/images/projects/project-2.png",
    figmaUrl: ""
  },
  {
    id: "brand-packaging-system",
    category: "branding",
    badge: "Brand & Visual",
    metricBadge: "Identity + Packaging",
    role: "Brand & Visual Designer",
    title: "Brand Identity & Packaging System",
    summary: "Cohesive brand identity, custom abstract line patterns, retail packaging, and shelf presentation systems.",
    tags: "Identity • Visual Systems",
    highlights: ["Custom Patterns", "Packaging Grid", "Brand Guidelines"],
    challenge: "Creating a memorable visual identity that translates seamlessly from physical retail packaging and shelf displays to digital brand touchpoints.",
    solution: "Developed a modular graphic system built around bespoke line-art patterns, structured typographic labels, and high-contrast packaging templates.",
    deliverables: [
      "Primary logo lockups & brand color architecture",
      "Custom abstract pattern library & packaging dielines",
      "Retail presentation & visual usage guidelines"
    ],
    outcome: "Established a distinctive, cohesive visual presence ready for commercial production and digital rollout.",
    image: "assets/images/projects/project-3.png",
    figmaUrl: ""
  }
];
