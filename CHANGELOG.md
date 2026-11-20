# Release Changelog — Gagan M R Portfolio

**Release Date:** November 20, 2026  
**Version:** v1.8  

---

## Summary of Changes

Release **v1.8** fixes the mobile side navigation drawer stacking context so the drawer opens sharply above the backdrop blur overlay instead of appearing blurred underneath it.

---

## Detailed Breakdown

### 1. Fixed Mobile Side Drawer Z-Index Stacking Context (`index.html`, `css/layout.css`)
- **Moved Mobile Drawer Outside Sticky Header:** Relocated `<nav class="nav-drawer" id="navMenu">` to sit at the top level of `<body>` alongside `#navOverlay`. Previously, `.navbar`'s `backdrop-filter: blur(18px)` and `z-index: 100` trapped `.nav-drawer` underneath `#navOverlay` (`z-index: 190`), causing the entire open drawer to appear blurred and unclickable.
- **Desktop & Mobile Parity:** Kept `.desktop-nav` cleanly inside `.navbar` for desktop viewports (`> 768px`) while `.nav-drawer` (`z-index: 200`) slides in crisply over `.nav-overlay` (`z-index: 190`) on mobile screens.
