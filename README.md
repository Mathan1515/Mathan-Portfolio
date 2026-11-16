# Mathan Raja — Premium 3D Full Stack Portfolio

A full React + Vite + TypeScript website, with Tailwind CSS, Framer Motion, React Three Fiber / Three.js / Drei, Lucide icons and an EmailJS contact integration.

## Requirements

- Node.js 20.19+ or 22.12+ (recommended for Vite 6)
- npm
- A browser with WebGL support for the desktop 3D hero (mobile has a lightweight fallback)

## Start locally

```bash
npm install
npm run dev
```

Open the development URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` directory to Vercel, Netlify, Cloudflare Pages, or another static host. SPA routing is not necessary because this is a one-page portfolio.

## Personalize — start here

All editable content lives in **`src/data/portfolio.ts`**:

- `profile`: name, role, about, location, availability, email, portrait path, social accounts, resume URL
- `experience`: company name, employment dates, title, responsibilities
- `skills`: tech stack
- `projects`: descriptions, technology labels, `demoUrl`, `githubUrl`
- `services`: offerings
- `education`: degree, institution, graduation year, certifications and courses

**Important:** Email, role history, skills, and educational details are sourced from the uploaded resume. Company names that were not provided remain placeholders. Replace with verified details before publishing. The project buttons remain disabled until actual URLs are supplied; there are no invented links. The updated, recruiter-focused resume is already included at `public/Mathanraja-P-Resume.pdf` and linked from the hero. Place a real portrait in `public/profile.jpg` and set `portraitUrl: '/profile.jpg'`.

## EmailJS setup — working submission integration

1. Create an EmailJS account at https://www.emailjs.com/ and connect an email service.
2. Create a template with the variables `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`.
3. Copy `.env.example` to `.env.local` and enter your real values:

```ini
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. In the EmailJS dashboard, set the recipient email address **in the template configuration** and set Reply-To to `{{reply_to}}`. Configure allowed domains for your production site. Do not place secret API keys in Vite environment variables — Vite values prefixed `VITE_` are public by design.
5. Restart the dev server after changing environment variables. Test the form with a real message.

Form includes required-field validation, basic email validation, a 10-character message minimum, loading and success states, and safe failure handling. Without EmailJS configuration the form shows a clear configuration warning rather than pretending a message was delivered. EmailJS handles delivery; there is no custom PHP server required. The template should also implement spam mitigation (EmailJS dashboard controls and/or captcha) before a public launch.

## 3D and performance

- The laptop, keys, display, floating objects and orbital forms are geometry built directly with React Three Fiber and Drei; there are no heavyweight GLTF downloads.
- The 3D scene loads lazily via `React.lazy()` and is omitted on screens <=650px, or when `prefers-reduced-motion` is set. These cases display a CSS code-editor illustration.
- DPR is capped at 1.6 and particle count is limited.
- Components are split into reusable scene, reveal, project card and project preview modules.
- Project tilt disables itself for coarse pointers and reduced-motion users.
- Navigation and forms have explicit labels, status feedback and keyboard support.
- Google Fonts require internet. For fully offline production use, replace with self-hosted licensed fonts.

## Files

```text
src/
  App.tsx                   # All page sections, layout and contact form
  components/
    Scene.tsx               # React Three Fiber interactive workspace
    Reveal.tsx              # Scroll-entrance animations
    ProjectCard.tsx         # Interactive 3D tilt cards
    ProjectPreview.tsx      # Custom CSS project mockups
  data/portfolio.ts         # Edit personal details here
  hooks/useMedia.ts         # Responsive / reduced scene fallback
  styles/index.css         # Full design system and responsive styling
public/
  favicon.svg
  Mathan-Raja-Resume-Template.pdf
```

## Checklist before launch

- [ ] Add verified LinkedIn and GitHub URLs
- [ ] Confirm the two employer names and exact employment months
- [ ] Review project descriptions; insert permitted live/demo/repository links
- [ ] Add a real profile picture; review the included updated resume
- [ ] Configure and test EmailJS with production allowed-origin rules
- [ ] Run `npm run build`, test on actual phone, tablet and desktop
- [ ] Update SEO / OG metadata with final deployed domain and social image if desired

## Note on verification

This source was authored in a runtime without access to the npm registry. Dependencies could not be installed here, so a full Vite build and browser-based visual testing could not be completed in this environment. Run `npm install && npm run build` locally for the final production verification.

## Resume-grounded content (November 2026)

This revision uses the supplied `Mathanraja P.pdf` as the source of truth for phone, email, work history, degree, GPA, and skills. Contact email is visible publicly because the user provided it in the resume. The revised resume uses the full name Mathanraja P, while the visual branding uses Mathan Raja.

**Before job applications:** confirm the two employer names, exact employment months, and measurable impact; insert actual GitHub/LinkedIn links and project proofs. The three named project descriptions come from the portfolio brief, not the uploaded PDF, and should be confirmed by the developer before public publication.

Do not label demo links as available until real URLs have been verified. EmailJS needs the developer's credentials to accept live form submissions.
