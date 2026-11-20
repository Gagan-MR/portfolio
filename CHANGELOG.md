# Release Changelog — Gagan M R Portfolio

**Release Date:** November 20, 2026  
**Version:** v1.3  

---

## Summary of Changes

Release **v1.3** restores the clean original portfolio copy (removing all `7+ Years` text references), retains the 6-card multidisciplinary portfolio grid and self-contained inline SVG icons, and ensures all external links and WhatsApp CTAs open cleanly without file-access errors.

---

## Detailed Breakdown

### 1. Restored Original Portfolio Copy (`index.html`, `README.md`)
- **Navigation & Hero:** Reverted `About (7+ Yrs)` back to `About`, restored the availability pill to `Available for UI/UX & Product Design`, and restored the original 4-column metrics strip (`End-to-End`, `100%`, `Figma`, `UI QA`).
- **About & Contact Copy:** Removed all `7+ Years` mentions from the About section, timeline, and Contact panel while preserving your multidisciplinary capabilities (UI/UX, Brand & Logos, Custom Icons, Posters/Print, and Motion/Video).

### 2. Fixed Link & Hire Me Button Behavior (`index.html`)
- **Proper External Link Handling:** Ensured the top **Hire Me** WhatsApp button (`https://wa.me/919113870006`), email links (`mailto:gaganmr.ckm@gmail.com`), and social links use clean URL encoding and `rel="noopener noreferrer"` so browsers never attempt to resolve them as local file paths.

### 3. Self-Contained Inline SVG Icons & 6-Card Grid (`index.html`, `css/base.css`, `js/projects-data.js`)
- **Zero CDN Icon Failures:** Kept all UI icons as crisp inline SVGs so they render reliably offline and on GitHub Pages.
- **6-Card Grid:** Maintained the symmetrical 2x3 portfolio showcase across 5 filter pills (`All Projects`, `UI/UX & Systems`, `Brand & Logos`, `Icons & Graphics`, `Motion & Video`).
