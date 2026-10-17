# Abbas Ansari — Interactive AI-assisted portfolio v5

A complete React + Vite portfolio rebuilt around the supplied video's cream, red, black and web-themed design. This updates the attached v2 project, not the separate EARTH-0209 concept.

## Open the preview

Double-click `portfolio-preview.html`. It is a self-contained preview with the imagery and résumé embedded. No installation is required. External profile and project links still require internet access. Clipboard, email-app and file-download behavior depends on the browser.

## Develop in VS Code

Use Node.js 20.19+ (Node 22 LTS recommended). Extract this folder, open it in VS Code, and run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Do not open the development `index.html` by double-clicking it.

## Production build

```sh
npm run build
npm run preview
```

Deploy `dist/` to a static host. No server, API key, environment file or paid service is required. This package has not been deployed.

To regenerate the single-file preview after edits:

```sh
npm run preview:html
```

## Version 5 — interactive polish

- The four-step AI-assisted workflow follows scroll position, highlights the current stage, advances the connecting thread and exposes extra explanation. Each step is also a native button for touch and keyboard selection.
- Project panels animate from their selected card's bounds, reveal their content in sequence and animate back on close. Added engineering-focus and delivery-boundary summaries using only the existing project details.
- A general working-principle note reinforces AI-assisted, human-led development. It is not presented as a project-specific AI-tool log or contribution percentage; those details were not supplied.
- Fine-pointer hero parallax separates the character and corner web depth while keeping text stable. The face-reveal dimensions are unchanged.
- Hanging characters respond to hover, tap or keyboard activation with a short damped swing. The Skills and Contact figures no longer swing endlessly at idle.
- Desktop navigation has one sliding active-section marker. Mobile menu links enter in sequence, with button and skill tap feedback.
- Dialogs make background content inert while open, trap focus, restore focus on close, and keep the close control visible during internal scrolling.
- Pause/reduced-motion controls cover the new GSAP, CSS and native browser animations. Parallax and magnetic behavior are restricted to precision pointers.

## Version 4 — primary identity and motion

- AI-Assisted Developer is now the prominent hero role, not just metadata. Backend/full-stack remains the supporting technical scope.
- About, ribbons, skills introduction and footer reinforce AI-assisted, human-led application development without claiming model-training expertise or inventing specific AI tools.
- A four-step How I Build section makes the workflow explicit: Define → Build with AI → Debug & integrate → Review & ship.
- New motion: web-thread draw-in, scroll-linked decorative webs, expanding heading rules, staggered workflow cards, a scroll-driven process line, a slow process-strip sweep and a subtle role beacon.
- Pointer-only, low-amplitude magnetic buttons, button sheen, moving link arrows and input-focus feedback complement the existing swinging characters and section entrances.
- Pause motion now stops CSS animation as well as GSAP. Reduced-motion preferences disable decorative animation and keep all content visible.
- The original résumé PDF is preserved unchanged; this update changes the website positioning, not the résumé document.

## Reference design retained

- Cream canvas, restrained red accents, black sticky navigation, web decorations, and condensed black/red-shadow name typography throughout.
- Large Spider-Man hero with the existing aligned masked/unmasked artwork from the supplied project.
- Small feathered pointer-following reveal, capped at **72 px radius** on desktop and **9.7% of artwork width** on narrower screens. It is additionally clipped to the face. There is no full-face or full-body reveal path.
- Velocity-driven blur of up to 4 px, subtle directional ghosting, and a blurred hero entrance. The reveal sharpens when the pointer settles.
- Tap reveals only a small patch for about 1.4 seconds. Keyboard focus/Enter/Space uses the same bounded reveal; Escape or loss of focus hides it.
- Crossed moving skill ribbons, hanging circular portrait, light bordered project cards, standing character decoration, and an upside-down hanging character alongside the contact form.
- Your three projects, case-note dialogs, project filters, résumé, portrait, links, skills and biography remain available. No fictional fourth project was added to imitate the video's card count.
- Education, training and certificates are now inside the About disclosure instead of a separate Journey page.
- Technical Skills now uses the reference’s two-column bordered row layout with red dot markers, category subtitles, dark hover badges, red slide-fill hover states, and a suspended swinging character. All original tools remain in the expandable full-toolkit disclosure.
- Distinct section motion: About text and hanging portrait entrance; alternating skill-row stagger; flat project-card settling with red top-edge/heading highlights; a rising contact form and descending/swaying character.
- Locally bundled Barlow Condensed typography replaces the earlier overly heavy display font.
- The reveal is about 24% wider than the preceding version, still bounded and feathered.
- Mobile navigation, reduced-motion support, pause-motion control, input validation, visible keyboard focus and responsive layouts.

The video is a filmed demonstration rather than the original website source. This is a close recreation of its visible design and interactions using Abbas's own content and the available artwork, not a claim of pixel-identical source recovery. The black social-video framing and promotional captions are not part of the portfolio.

## Contact form — important

The form validates the name, email and message, then opens the visitor's email app with a prefilled draft addressed to `alexinwebs@gmail.com`. **It does not submit to a backend or automatically send an email.** The visitor must review and send the draft. An email link is provided as a fallback. Add a real, user-approved form service if you want server-side delivery later; no service was silently connected.

## Edit content

- `src/data/site.js`: personal details, navigation, skills, education and certificates.
- `src/data/projects.js`: cards, repositories, live URLs and case notes.
- `src/components/Hero.jsx`: reveal limits and timing.
- `src/styles.css`: complete responsive visual theme.
- `src/components/Skills.jsx`: the ten skill rows and usage badges. Badges say “Core stack” or “Project use”; no proficiency scores were invented.
- `src/hooks/usePortfolioMotion.js`: section timelines, magnetic buttons and hero parallax.
- `src/components/Workflow.jsx`: selectable/scroll-following process and its copy.
- `src/components/SwingCharacter.jsx`: short visitor-triggered swing.
- `src/components/ProjectModal.jsx`: card-origin open/close animation, focus handling and case-study sequence.
- `public/images/`: local imagery.
- `public/documents/Abbas-Ansari-Resume.pdf`: original résumé.

The hero's unmasked image is the AI-styled likeness already present in the supplied v2 project. The About portrait is the supplied photo. Your phone number is not displayed on the webpage; the original résumé has been preserved.

## Artwork & rights

See `ARTWORK-CREDITS.md`. Spider-Man is a Marvel character; this portfolio is not an official Marvel product or endorsement. The imagery is not represented as an original or exclusively owned character. Review usage rights for your intended public or commercial deployment.
