# Jharoka Heritage Furniture Website

## Overview
This is a Next.js 16 website for Jharoka Heritage Furniture, showcasing traditional furniture pieces and collections.

## Tech Stack
- **Framework**: Next.js 16.1.1 with Turbopack
- **UI**: React 19, Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `about/` - About page
  - `collections/` - Collections page
  - `contact/` - Contact page
  - `portfolio/` - Portfolio page
  - `product/` - Product pages
  - `services/` - Services page
- `components/` - Reusable React components
- `data/` - JSON data files (products, collections, team, testimonials)
- `lib/` - Utility functions
- `public/` - Static assets (images, logos)

## Development
```bash
npm run dev
```
Runs on port 5000 at http://0.0.0.0:5000

## Build & Production
```bash
npm run build
npm run start
```

## Configuration
- `next.config.ts` - Next.js configuration with React Compiler and allowed dev origins
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS with Tailwind
