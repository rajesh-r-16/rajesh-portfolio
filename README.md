# Rajesh R — Portfolio Website

A distinctive, responsive developer portfolio for Rajesh R, CSE (AI & ML) student based in Bengaluru.

## Design direction
- Dark editorial canvas with acid-lime accents and subtle grain
- Space Grotesk display typography, DM Sans body copy, DM Mono technical labels
- Custom orbit-style hero graphic built entirely with CSS
- Animated entrance, marquee ticker, hover states and responsive project filters
- Project showcase, profile/about, skills, education, certifications and contact sections
- Mobile navigation, reduced-motion support and resume download
- No backend required

## Tech stack
- React 18 + Vite
- Framer Motion
- Lucide React icons
- CSS custom properties and responsive CSS

## Run locally
Install Node.js 18+ first.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Personal details
Content is based on the provided resume and public GitHub/LinkedIn profiles. Update the projects, skill tags, certifications or bio in `src/main.jsx` as your experience grows.

- GitHub: https://github.com/rajesh-r-16
- LinkedIn: https://www.linkedin.com/in/rajesh-16-r/
- Contact: rajeshrajini1523@gmail.com

The resume is stored at `public/Rajesh_R_Resume.pdf` and linked from the hero.

## Deployment
### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
1. Import the repository.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## Notes
- Google Fonts are loaded online. If you need offline fonts, replace the font imports with locally hosted font files.
- Project cards point to the corresponding public GitHub repositories. FraudSentinel AI currently links to the repository list because a dedicated public repository URL was not confirmed.
- Contact button copies the email address when clipboard access is available, with a mail fallback.
