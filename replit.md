# Jharoka Heritage Furniture Website

## Overview
This is a Next.js 16 website for Jharoka Heritage Furniture, showcasing traditional furniture pieces organized by categories.

## Tech Stack
- **Framework**: Next.js 16.1.1 with Turbopack
- **UI**: React 19, Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `category/[slug]/` - Category detail pages (shows products by category)
  - `product/[id]/` - Product detail pages with image gallery
- `components/` - Reusable React components
  - `home/` - Homepage components
  - `layout/` - Navbar, Footer, WhatsApp button
  - `product/` - Product page components
  - `ui/` - UI primitives (Button, Card, Section)
- `data/` - JSON data files
  - `categories.json` - Product categories (Sofas, Chairs, Beds, etc.)
  - `products.json` - Product listings with images and details
  - `collections.json` - Style collections
  - `team.json` - Team members
  - `testimonials.json` - Customer testimonials
- `lib/` - Utility functions
- `public/` - Static assets
  - `productpics/` - Product images
  - `images/` - Category and additional images
  - `output/` - Collection images organized by category (Sofas, Chairs, Beds, etc.)
- `components/collections/` - Collections page components

## Categories
The website uses a category-based product structure:
- Sofas
- Chairs
- Beds
- Dining Tables
- Wardrobes
- Office Furniture

## Adding New Products
1. Add product images to `public/productpics/` or `public/images/{category}/{product-slug}/`
2. Add product entry to `data/products.json` with:
   - `id`, `name`, `slug`, `category` (matches category slug)
   - `mainImage`, `images` array for gallery
   - `price`, `shortDescription`, `description`
   - `material`, `dimensions`, `features`
   - `inStock`, `deliveryTime`

## Adding New Categories
1. Add entry to `data/categories.json` with:
   - `id`, `name`, `slug`, `description`, `image`
2. Add products with matching category slug

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

## Recent Changes
- **Jan 2026**: Category pages premium redesign
  - Removed separate /collections page - categories accessed directly from homepage
  - Large watermark text background effect for premium feel
  - Combined images from products.json and /public/output/{category}/ folders
  - Elegant image cards with hover overlay and zoom effects
  - "X Curated Pieces" count with decorative elements
  - Services section moved to homepage as dark premium inline section
- **Jan 2026**: UI/UX improvements
  - Simplified Hero to video-only arch display with play/pause and mute controls
  - Updated color palette with warmer browns (#2C1810, #8B4513, #D4A574)
  - Changed heading font from Oswald to Playfair Display for elegance
  - Added global utility classes for consistent styling (section-padding, section-header, btn-primary, etc.)
- **Jan 2026**: Homepage redesign with category-first approach
  - Replaced FeaturedCollections carousel with CategoryCircles component
  - New "Shop by Category" section showing all 6 categories as circular thumbnails
  - Hero section with stats (500+ Pieces, 25+ Years, 100% Handcrafted)
  - Premium typography and animations throughout
- **Jan 2026**: Implemented category-based product structure
  - Added category grid on Collections page
  - Created category detail pages showing products
  - Updated product detail page with image gallery
  - Added breadcrumb navigation
  - Updated navbar with proper page links
