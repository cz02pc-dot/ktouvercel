# Kruti Dev Blog Companion

Premium, responsive blog companion for [krutidev-to-unicode.com](/), built with **Next.js + Tailwind CSS**.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- next-themes (Dark Mode)
- lucide-react (UI icons)

## Dependencies
```json
{
  "dependencies": {
    "next": "^15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-themes": "^0.4.6",
    "lucide-react": "^0.511.0"
  },
  "devDependencies": {
    "typescript": "^5.8.2",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.3",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.22.0",
    "eslint-config-next": "^15.2.0",
    "@types/node": "^22.14.1",
    "@types/react": "^19.0.12",
    "@types/react-dom": "^19.0.4"
  }
}
```

## Implemented Pages (10)
1. `/` Home (Blog Index)
2. `/about`
3. `/category/typography-tips`
4. `/category/technical-guides`
5. `/category/content-creation`
6. `/blog/[slug]` Single Blog Post Template
7. `/contact`
8. `/privacy-policy`
9. `/terms-and-conditions`
10. `/disclaimer`

## Key Features
- Sticky header with CTA back to the converter tool
- Dark mode toggle
- Semantic HTML layout (`header`, `nav`, `main`, `article`, `aside`, `footer`)
- Page-level metadata + canonical URLs
- JSON-LD placeholders (`Organization`, `BreadcrumbList`, `Article`)
- Responsive article grids and typography-focused reading layout
- Single post reading progress bar, social sharing, author bio, related posts
- Contact form + FAQ accordion

## Project Structure
```text
vercel project/
â”œâ”€ public/
â”‚  â””â”€ images/
â”‚     â””â”€ posts/
â”‚        â”œâ”€ featured.svg
â”‚        â””â”€ placeholder.svg
â”œâ”€ src/
â”‚  â”œâ”€ app/
â”‚  â”‚  â”œâ”€ about/page.tsx
â”‚  â”‚  â”œâ”€ blog/[slug]/page.tsx
â”‚  â”‚  â”œâ”€ category/content-creation/page.tsx
â”‚  â”‚  â”œâ”€ category/technical-guides/page.tsx
â”‚  â”‚  â”œâ”€ category/typography-tips/page.tsx
â”‚  â”‚  â”œâ”€ contact/page.tsx
â”‚  â”‚  â”œâ”€ disclaimer/page.tsx
â”‚  â”‚  â”œâ”€ privacy-policy/page.tsx
â”‚  â”‚  â”œâ”€ terms-and-conditions/page.tsx
â”‚  â”‚  â”œâ”€ globals.css
â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â””â”€ page.tsx
â”‚  â”œâ”€ components/
â”‚  â”‚  â”œâ”€ author-bio.tsx
â”‚  â”‚  â”œâ”€ category-feed.tsx
â”‚  â”‚  â”œâ”€ faq-accordion.tsx
â”‚  â”‚  â”œâ”€ legal-document.tsx
â”‚  â”‚  â”œâ”€ page-hero.tsx
â”‚  â”‚  â”œâ”€ post-card.tsx
â”‚  â”‚  â”œâ”€ reading-progress.tsx
â”‚  â”‚  â”œâ”€ site-footer.tsx
â”‚  â”‚  â”œâ”€ site-header.tsx
â”‚  â”‚  â”œâ”€ social-share.tsx
â”‚  â”‚  â”œâ”€ structured-data.tsx
â”‚  â”‚  â”œâ”€ theme-provider.tsx
â”‚  â”‚  â””â”€ theme-toggle.tsx
â”‚  â””â”€ lib/
â”‚     â”œâ”€ blog-data.ts
â”‚     â””â”€ site.ts
â”œâ”€ package.json
â”œâ”€ tsconfig.json
â”œâ”€ tailwind.config.ts
â”œâ”€ postcss.config.mjs
â””â”€ next.config.mjs
```

## Run
```bash
npm install
npm run dev
```

