# Editing Guide — Mathan Raja Portfolio

The project uses **one JSX element per line** (with indentation) to make code easier to find and edit. The styling and behavior are intended to remain unchanged.

## Where to edit what

| What you want to edit | File |
|---|---|
| Name, job title, summary, email, portrait, resume, social links | `src/data/portfolio.ts` → `profile` |
| Technologies | `src/data/portfolio.ts` → `skills` |
| Work history / company names | `src/data/portfolio.ts` → `experience` |
| Projects, descriptions, demo and GitHub links | `src/data/portfolio.ts` → `projects` |
| Services and education | `src/data/portfolio.ts` → `services` / `education` |
| Section text, layout, navigation, form | `src/App.tsx` |
| Theme, fonts, spacing, responsiveness | `src/styles/index.css` |
| 3D hero scene | `src/components/Scene.tsx` |
| Featured project previews | `src/components/ProjectPreview.tsx` |
| Project card behavior | `src/components/ProjectCard.tsx` |

## Example: edit your name

Open `src/data/portfolio.ts`:

```ts
export const profile = {
  name: 'Mathan Raja', // Change this
  role: 'Full Stack Developer', // Change this
  // ...
};
```

## Example: add a project link

In `src/data/portfolio.ts` → `projects`, replace `demoUrl: null` with an actual verified URL:

```ts
demoUrl: 'https://your-real-demo.example',
githubUrl: 'https://github.com/your-account/your-repo',
```

Do not use example URLs as real links. Leave the value `null` when no public demo or repository exists.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

## Contact form

Copy `.env.example` to `.env.local` and enter your own EmailJS service ID, template ID, and public key. Without these, the form shows an informative error and will not send mail.

## VS Code formatting

Install the **Prettier** extension and enable **Format on Save** to keep files neatly indented after editing. The current project was reformatted offline; a full browser build has not been verified in this environment.
