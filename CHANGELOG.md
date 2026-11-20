# Release Changelog — Gagan M R Portfolio

**Release Date:** November 20, 2026  
**Version:** v1.4.0  

---

## Summary of Changes

This release streamlines the portfolio layout by removing the temporary Clients showcase, standardizing product copy around general IDE and code editor terminology, and integrating direct WhatsApp contact triggers across all primary call-to-action points.

---

## Detailed Breakdown

### 1. Removed Trusted Clients Section (`index.html`, `css/layout.css`, `css/components.css`)
- **HTML Structure:** Removed the `#clients` section block and the `Clients` navigation anchor from the top sticky header.
- **Layout & Styling:** Cleaned up `.clients-grid`, `.client-card`, `.client-header`, `.client-mark`, `.client-name`, `.client-meta`, `.client-desc`, and `.client-tags` rules to keep the stylesheets lean and avoid unused CSS.
- **Experience Timeline:** Updated timeline entries in `#about` to focus on functional roles (*Lead UI/UX Product Designer*, *Visual & Brand Identity Designer*, and *UI Architecture & Dev Handoff Specialist*) without client-specific headers.

### 2. Standardized Product Terminology (`index.html`, `js/projects-data.js`)
- **General IDE Positioning:** Replaced specific typesetting tool references with broader software engineering terminology (*Cloud Code Editor & Dashboard UI*, *Web IDE*, and *Multi-State IDE Ecosystem*).
- **Case Study Copy:** Updated challenge, solution, and outcome descriptions in `PROJECTS_DATA` so the flagship case study appeals broadly to SaaS, developer-tool, and web application recruiters.

### 3. Direct WhatsApp Integration (`index.html`)
- **Top Navigation CTA:** Wired the sticky header's **Hire Me** button directly to `https://wa.me/919113870006` with a pre-filled project inquiry message.
- **Contact Panel & Footer:** Added `+91 91138 70006` to the interactive contact row, the **Chat on WhatsApp** pill button, and the footer social icon bar.

### 4. Theme Persistence & Dynamic Footer (`index.html`, `css/tokens.css`, `js/main.js`)
- **Dark / Light Theme Switcher:** Implemented `[data-theme="dark"]` and `[data-theme="light"]` design tokens with `localStorage` persistence so user theme preferences remain saved across visits.
- **Auto-Updating Copyright Year:** Connected `<span id="currentYear"></span>` to `new Date().getFullYear()` in `js/main.js` for automatic annual updates.

### 5. Local Asset Drop-Zones (`js/main.js`, `css/components.css`)
- **Zero External Dependencies:** Removed external placeholder URLs so 100% of graphics load locally from `assets/icons/`, `assets/images/hero/`, and `assets/images/projects/`.
- **Graceful Fallback Frames:** Added an automatic wireframe drop-zone indicator (`attachLocalFallback`) that displays the exact expected file path if an image has not yet been placed in its folder.
