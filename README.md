# Mareeha Malik — Portfolio (Designer × Developer)

A multi-page React site with route transitions, scroll-triggered reveals,
and a draggable "split" hero that blends your design side and dev side.

## Stack & why

- **Vite + React** — fast dev server, simple build.
- **React Router** — real multi-page site (`/`, `/designer`, `/developer`, `/hobbies`, `/contact`), each with its own URL.
- **Framer Motion** — page transitions, scroll reveals, hover micro-interactions, the terminal loader, the draggable hero.
- **Tailwind CSS** — utility classes + custom design tokens (colors/fonts) in `tailwind.config.js`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## File map

```
src/
  data/content.js        ← ALL editable copy, projects, reviews, hobbies live here
  components/
    Nav.jsx               top nav, color shifts pink/blue per section
    Footer.jsx
    Loader.jsx             first-load terminal animation ("npm run mareeha --cute")
    PageTransition.jsx     wraps each page for the route-change reveal
    ScrollReveal.jsx        wrap any block to fade/slide it in on scroll
    Logo.jsx                 SVG LOGO PLACEHOLDER — see below
    Flork.jsx                the flork easter egg sticker (hero, top right)
  pages/
    Home.jsx                hero w/ draggable designer↔developer slider
    Designer.jsx             logo grid, poster pinboard collage, shirt grid, client reviews
    Developer.jsx             terminal hero, faux-IDE project explorer, skills bar
    Hobbies.jsx                 polaroid grid (table tennis / reading / badminton / painting)
    Contact.jsx                  form + mailto + socials
```

## Things to plug in before launch

1. **Logo:** put your real SVG at `src/assets/logo.svg`, then edit
   `src/components/Logo.jsx` — instructions are in a comment at the top of that file.
2. **Two project screenshots:** `E-commerce Store` and `MW Sports App` in
   `src/data/content.js` have `img: null` because those were local files
   (`project1`/`project2`) rather than hosted URLs. Put the images in
   `src/assets/`, import them at the top of `content.js`
   (`import project1 from '../assets/project1.png'`), and set `img: project1`.
3. **Hobby photos:** drop images in `src/assets/hobbies/`, import them in
   `src/data/content.js`, and set each hobby's `image` field (currently `null`,
   which shows a "photo coming soon" placeholder).
4. **Poster images:** the poster pinboard is still a colored placeholder —
   you mentioned posters separately and haven't sent files yet. Once you do,
   add an `img` field to each entry in `posterProjects` and swap the colored
   `<div>` in `Designer.jsx`'s poster section for an `<img>`, same pattern as
   the logos/shirts grids right above it.
5. **Contact form backend:** `Contact.jsx`'s `handleSubmit` currently just
   shows a success message. Wire it to Formspree, EmailJS, or your own API route
   marked with a `TODO` comment in that file.
6. **Copy:** all text — tagline, reviews, dev project descriptions — lives in
   `src/data/content.js`. Edit there, not in components.
7. **Fonts:** Ribeye (display), Sue Ellen Francisco (hand accent), Poppins
   (body), Space Mono (code) are loaded via Google Fonts in `index.html`.

## What's new in this pass

- **Real assets wired in:** logos and shirt mockups now pull from your actual
  Cloudinary images (`logoImages` / `shirtImages` in `content.js`), shown as
  tilted scrapbook-style grids instead of color placeholders.
- **Dev projects rebuilt:** each project on `/developer` is now a real card —
  screenshot, description, stack tags, and two buttons: "visit site" (live
  link) and "github" (repo), both opening in a new tab.
- **Freehand drawing pad:** a new `DrawingCanvas` component on `/designer`
  lets visitors actually doodle — pick a color, brush size, and clear it.
  Pure `<canvas>` + pointer events, no library.
- **Flork got a personality:** idle bob/wobble loop forever, and clicking it
  pops a speech bubble that cycles through one-liners
  (`src/components/Flork.jsx` → edit the `LINES` array to change what it says).
  It now appears on both Home and the Designer page.

## Notes on the design choices

- **No dark theme** — cream background throughout, per your request.
- **Signature element:** the Home hero's draggable seam literally shows the
  "two-in-one" concept instead of just stating it in text.
- **Accessibility:** the slider hero supports arrow-key control and has an
  `aria-label`/`role="slider"`; all interactive elements have visible focus rings;
  animations respect `prefers-reduced-motion`.
- **Flork** sits in the hero on desktop as a hover-reactive sticker.
