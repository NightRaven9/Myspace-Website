# Sauryadeep Deb — Portfolio

Next.js (App Router, static export) portfolio site.

## Edit content
Everything — summary, experience, skills, case studies, certifications — is in `data/profile.ts`.
Architecture diagrams are defined in `components/Diagram.tsx`.

## Run locally
```
npm install
npm run dev        # http://localhost:3000
```

## Build for hosting
```
npm run build      # writes a static site to /out
```
Upload the `out/` folder to any static host (Azure Static Web Apps, Netlify, Vercel, GitHub Pages, SAP BTP HTML5 repo).
