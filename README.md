# Gagan M R — UI/UX & Product Designer Portfolio

A responsive, modular single-page portfolio showcasing end-to-end UI/UX product design, scalable Figma design systems, interactive prototyping, and brand identity architecture.

**Live Portfolio:** `https://gagan-mr.github.io/portfolio/` *(Replace `portfolio` with your exact repository name if different)*

---

## Key Features

- **Dark & Light Theme Switcher:** Instant theme toggling powered by CSS custom properties (`css/tokens.css`) with automatic `localStorage` persistence.
- **Direct WhatsApp Lead Capture:** Sticky top **Hire Me** CTA and integrated contact rows wired directly to WhatsApp (`+91 91138 70006`) with pre-filled inquiry messages.
- **Data-Driven Case Studies:** Modular project cards and structured **Challenge → UX Architecture → Deliverables → Outcome** case study modals rendered dynamically from `js/projects-data.js`.
- **100% Local Asset Architecture:** Zero external image dependencies; includes automatic wireframe drop-zone fallbacks when adding new local assets.
- **Mobile-First & Accessible:** Built with fluid `clamp()` typography, `rem`-based breakpoints, and `44px+` touch targets across desktop, tablet, and mobile devices.
- **Dynamic Copyright Footer:** Automatically updates the copyright year every January 1st.

---

## Folder Structure

```text
gagan-portfolio/
├── index.html                  # Semantic long-scroll portfolio layout
├── README.md                   # Repository documentation & setup guide
├── CHANGELOG.md                # Detailed Markdown release history
├── RELEASE_NOTES.txt           # Plain-text release notes
├── assets/
│   ├── icons/                  # Brand mark & favicon (logo.png)
│   ├── images/
│   │   ├── hero/               # Hero showcase visual (hero-cover.png)
│   │   └── projects/           # Case study thumbnails (project-1.png to project-3.png)
│   └── docs/                   # Resume PDF storage
├── css/
│   ├── tokens.css              # Dark & Light theme design tokens
│   ├── base.css                # Reset, typography & button primitives
│   ├── layout.css              # Sticky navbar, grids & responsive breakpoints
│   └── components.css          # Cards, spotlight, timeline, contact panel & modal
└── js/
    ├── projects-data.js        # Structured case study data array
    └── main.js                 # Theme toggle, dynamic renderer, filters & modal logic# portfolio
