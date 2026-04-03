# Portfolio — Mouheb Jerou

Portfolio personnel développé avec **Angular 19** (standalone components, signals).

## Stack

- Angular 19 (standalone, signals, computed)
- TypeScript 5.6
- CSS custom properties (thème clair/sombre, OKLCH)

## Commandes

```bash
# Démarrer en développement
npm start

# Build de production
npm run build
```

## Structure

```
src/
  main.ts                    # Bootstrap Angular
  index.html                 # Point d'entrée HTML
  styles.css                 # Variables CSS globales (thème)
  app/
    app.component.ts         # Composant principal + logique
    app.component.html       # Template (toutes les sections)
    app.component.css        # Styles du composant
    data/
      portfolio-data.ts      # Compétences & projets
      translations.ts        # Traductions FR/EN
public/
  images/                    # Images des projets
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Mouheb94/v0-modern-portfolio-page" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
