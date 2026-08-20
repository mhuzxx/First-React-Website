# Code's Thinker — Website

A React (Vite) recreation of the Code's Thinker agency website, built with react-router-dom.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files will be in the `dist/` folder — upload that folder's contents to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Project Structure

```
src/
  components/   Navbar, Footer, WhatsApp button, shared Icon set, scroll-reveal + count-up hooks
  sections/     Home page sections (Hero, Services, Testimonials, FAQ, etc.)
  pages/        Route-level pages (Home, About, Services, Projects, Team, Contact, Login)
  data/         Site content (edit content.js to change text/links)
  index.css     Global styles and font imports
```

## Customizing

- Edit `src/data/content.js` to update text, service tabs, testimonials, FAQ, stats, and team members.
- Update contact details (phone, email, address) in `src/components/Footer.jsx`.
- Swap the hero/about/value/FAQ images by changing the `src` URLs in the matching section files under `src/sections/`.
- Colors are plain hex values inside each component's `.css` file (no CSS variables), so search-and-replace a hex code to retheme.
