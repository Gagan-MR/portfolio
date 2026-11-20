/**
 * MULTIDISCIPLINARY PORTFOLIO DATA — 6 BALANCED CARDS (100% Local Assets)
 * Add images into: assets/images/projects/ (project-1.png to project-6.png)
 * Optional: Add local .mp4 videos into: assets/videos/ and set videoUrl below.
 */
const PROJECTS_DATA = [
  {
    id: "cloud-editor-ui",
    category: "uiux",
    badge: "UI/UX & Systems",
    metricBadge: "Design System + Web IDE",
    role: "Lead UI/UX Designer • Web SaaS",
    title: "Cloud Code Editor & Dashboard UI",
    summary: "End-to-end UI/UX redesign of a browser-based code editor, IDE workspace, and cloud dashboard with modular Figma components.",
    tags: "Figma • Design System",
    highlights: ["Auto-Layout System", "File Explorer UX", "Version History"],
    challenge: "Users needed a distraction-free browser IDE capable of handling nested project files, version snapshots, and real-time build feedback without visual clutter.",
    solution: "Architected a unified dashboard and split-pane code editor layout powered by tokenized Figma variables, clear visual hierarchy, and collapsible navigation panels.",
    deliverables: [
      "Tokenized color, spacing & typography system",
      "Multi-state file explorer & version history flows",
      "Developer-ready component specs & UI QA passes"
    ],
    outcome: "Delivered a scalable, consistent UI architecture that accelerated frontend implementation and streamlined multi-file editing workflows.",
    image: "assets/images/projects/project-1.png",
    videoUrl: "",
    figmaUrl: ""
  },
  {
    id: "security-onboarding-ux",
    category: "uiux",
    badge: "UI/UX & Systems",
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
    videoUrl: "",
    figmaUrl: ""
  },
  {
    id: "brand-identity-logos",
    category: "branding",
    badge: "Brand & Logos",
    metricBadge: "Identity + Packaging",
    role: "Brand & Logo Designer",
    title: "Brand Identity, Logos & Packaging",
    summary: "Cohesive brand identity systems, geometric logo construction grids, custom line patterns, and retail packaging layouts.",
    tags: "Logos • Brand Guidelines",
    highlights: ["Logo Construction", "Packaging Dielines", "Brand Books"],
    challenge: "Creating distinctive brand identities and logo lockups that scale cleanly from mobile app icons to physical retail packaging.",
    solution: "Built modular identity guidelines anchored by geometric logo grids, bespoke brand patterns, and structured typography systems.",
    deliverables: [
      "Primary & secondary logo lockups with clear-space grids",
      "Color architecture, typography pairings & brand guidelines",
      "Print-ready packaging dielines & shelf mockups"
    ],
    outcome: "Established memorable, consistent brand systems ready for both digital product launches and physical retail production.",
    image: "assets/images/projects/project-3.png",
    videoUrl: "",
    figmaUrl: ""
  },
  {
    id: "custom-icon-systems",
    category: "graphics",
    badge: "Icons & Graphics",
    metricBadge: "24px Pixel-Grid Sets",
    role: "Icon & Vector Designer",
    title: "Custom Iconography & Vector Systems",
    summary: "Bespoke 24px/32px UI icon libraries in outline, duotone, and filled styles engineered for crisp rendering across web and mobile.",
    tags: "Custom Icons • Vector Craft",
    highlights: ["24px Pixel Grid", "Outline & Duotone", "Figma Icon Library"],
    challenge: "Generic stock icon packs often clash in stroke weight, corner radius, and visual tone across custom SaaS products and brand touchpoints.",
    solution: "Crafted unified icon families on strict geometric keylines with consistent 1.5px–2px stroke optical balance and tokenized color fills.",
    deliverables: [
      "Multi-style UI icon sets (Outline, Filled & Duotone)",
      "Optimized SVG exports & searchable Figma component variants",
      "Custom spot illustrations for onboarding & empty states"
    ],
    outcome: "Elevated interface clarity and visual cohesion across web dashboards, navigation bars, and mobile apps.",
    image: "assets/images/projects/project-4.png",
    videoUrl: "",
    figmaUrl: ""
  },
  {
    id: "posters-print-collateral",
    category: "graphics",
    badge: "Icons & Graphics",
    metricBadge: "Campaign & Print Design",
    role: "Visual & Print Designer",
    title: "Editorial Posters, Menus & Print Systems",
    summary: "High-impact promotional posters, hospitality menus, social campaign visuals, and large-format print layouts.",
    tags: "Posters • Print Typography",
    highlights: ["Event Posters", "Hospitality Menus", "Large-Format Print"],
    challenge: "Translating complex product offerings, event schedules, and hospitality menus into scannable print and digital layouts.",
    solution: "Applied Swiss-grid typographic hierarchy, high-contrast visual framing, and print-ready CMYK/bleed specifications.",
    deliverables: [
      "Promotional campaign posters & social media key visuals",
      "Multi-page seasonal hospitality menus & table collateral",
      "High-resolution large-format print & signage layouts"
    ],
    outcome: "Delivered sharp, print-accurate marketing assets that drove engagement across physical venues and social channels.",
    image: "assets/images/projects/project-5.png",
    videoUrl: "",
    figmaUrl: ""
  },
  {
    id: "motion-graphics-video",
    category: "motion",
    badge: "Motion & Video",
    metricBadge: "UI Motion + Promo Cuts",
    role: "Motion & Video Editor",
    title: "Motion Graphics, Logo Reveals & Promo Edits",
    summary: "Clean UI micro-interactions, smooth 2D logo reveals, kinetic typography, and tightly paced product launch video edits.",
    tags: "Motion Graphics • Video Editing",
    highlights: ["Logo Reveals", "UI Micro-Motion", "Promo Video Cuts"],
    challenge: "Static screenshots alone often fail to communicate interface responsiveness or capture attention on social and product launch pages.",
    solution: "Produced clean, purposeful 2D motion graphics, smooth easing transitions, and rhythmic promotional video edits tailored to brand pacing.",
    deliverables: [
      "Clean 2D logo intros, lower thirds & kinetic type overlays",
      "UI screen walkthroughs & feature reveal animations",
      "Color-graded 20–60s social & product promo edits"
    ],
    outcome: "Increased viewer retention and brought static brand identities and UI flows to life with polished motion.",
    image: "assets/images/projects/project-6.png",
    videoUrl: "",
    figmaUrl: ""
  }
];
