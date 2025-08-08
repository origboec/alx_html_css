# Headphones – Implement a Design from Scratch

This project reproduces a landing page from a Figma design **using only HTML and CSS** (no frameworks, no JavaScript). The goal is to match the designer’s intent across **desktop, tablet, and mobile** breakpoints.

## Task 0 Scope (What this README covers)

- Open the Figma file and **Duplicate to Drafts** to access layer details.
- Note the **fonts**, **colors**, **spacing**, and **layout rules** we’ll use later.
- Document key **interaction specs** and **responsiveness rules**.
- Prepare the repo structure and workflow for upcoming tasks.

> **No page implementation is required in Task 0 beyond this README.**

---

## Design Source (Figma)

- Project file (view-only or duplicated): **[Your Figma link here]**
- If access is restricted, use the ALX-provided Figma backup link.
- In Figma, enable **Dev Mode** (</>) to read CSS specs for each layer.

### Fonts

- **Source Sans Pro** (download & install if missing)
- **Spin-Cycle-OT** (download & install if missing)
  > Some Figma values may be in floats; it’s OK to round.

---

## Key Implementation Rules (from ALX)

- **Max content width:** `1000px` (centered)
- **Mobile breakpoint:** apply mobile layout at **≤ 480px**
- **Link hover/active color:** `#FF6565`
- **Button hover/active:** `opacity: 0.9`
- **No external CSS frameworks** (e.g., Bootstrap)
- **No JavaScript** for this project

---

## What I Checked in Figma (Task 0)

- Section breakdown: **Hero**, **What we do**, **Results**, **Contact**, **Footer**
- Typography (font families, sizes, weights, line-heights)
- Colors (hex values), shadows, radii
- Spacing (margins, paddings, gaps)
- Responsive behavior (element stacking at ≤ 480px)
- Asset list (icons, background images) to export into `images/` later

---

## Responsive Plan (for later tasks)

- **Desktop (≥ 1025px):** full layout with 1000px centered container
- **Tablet (481–1024px):** reduce columns (e.g., 4 → 2), adjust spacing/fonts
- **Mobile (≤ 480px):** single-column stacks, touch-friendly spacing, fluid type

---

## Accessibility Notes

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `footer`)
- Meaningful `alt` text on images
- Sufficient color contrast (verify against the design)
- Focus-visible states (browser default is acceptable for this project)

---

## How to Work (for later tasks)

1. Export needed icons/images from Figma → `headphones/images/`
2. Build `index.html` with semantic sections
3. Add base layout in `styles.css`, create a `.container { max-width: 1000px; margin: 0 auto; }`
4. Implement responsive CSS and interaction specs:
   - `a:hover, a:active { color: #FF6565; }`
   - `.btn:hover, .btn:active { opacity: 0.9; }`
   - `@media (max-width: 480px) { /* mobile layout */ }`

---

## Task 0 Checklist

- [x] Figma duplicated to Drafts
- [x] Fonts installed (Source Sans Pro, Spin-Cycle-OT)
- [x] Interaction specs noted
- [x] Mobile breakpoint noted (≤ 480px)
- [x] Repo path created: `alx_html_css/headphones/`
- [x] This README.md written and committed
