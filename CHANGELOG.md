# Release Changelog — Gagan M R Portfolio

**Release Date:** November 20, 2026  
**Version:** v1.4  

---

## Summary of Changes

Release **v1.4** redesigns the custom cursor suite using high-contrast UI/UX ergonomics: a faceted geometric pointer arrow with a signature accent pivot dot, a matching clean pointing hand, and a hollow outlined I-beam text selection cursor that remain clearly visible across every button and surface in both Dark and Light modes.

---

## Detailed Breakdown

### 1. Ergonomic Geometric Cursor Suite (`index.html`, `css/components.css`)
- **High-Contrast Figure-Ground Separation:** Replaced solid indigo cursor fills (which blended into indigo buttons) with crisp neutral fills (`#f8fafc` on dark backgrounds, `#0f172a` on light backgrounds) paired with opposing `1.1px` borders.
- **Signature Accent Pivot Dot:** Added the geometric notch accent dot (`--accent-secondary` in Dark Mode, `--accent-primary` in Light Mode) to the pointer arrow and pointing hand so the cursor ties into the site's visual identity without sacrificing contrast.
- **Matching Outlined Text I-Beam:** Styled `#figmaCursorText` as a crisp hollow geometric I-beam matching the arrow and hand stroke weight.
