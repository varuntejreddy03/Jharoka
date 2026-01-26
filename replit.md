# Jharoka Heritage Furniture

A premium single-page e-commerce website showcasing handcrafted heritage furniture from Hyderabad, India. Built with modern web technologies for a luxury showroom experience.

---

## Overview

Jharoka Heritage Furniture represents three generations of master craftsmen dedicated to creating timeless furniture pieces. This website serves as a digital showroom, featuring 6 curated categories of handcrafted furniture with an emphasis on visual storytelling and elegant design.

### Key Features

- **Premium Single-Page Design** - Smooth scrolling experience with animated sections
- **Category-Based Navigation** - 6 furniture categories with image galleries
- **Fullscreen Image Lightbox** - Immersive product viewing with keyboard navigation
- **Google Maps Integration** - Easy directions to the showroom
- **Mobile-First Responsive** - Optimized for all screen sizes
- **Contact Form** - Direct inquiry submission
- **Customer Reviews** - Google-verified testimonials

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | Latest | Animations and transitions |

### Typography

- **Bebas Neue** - Bold condensed font for headings (cinematic feel)
- **Inter** - Modern sans-serif for body text (readability)

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Brown | `#2C1810` | Primary dark color |
| Warm Brown | `#8B4513` | Accent color |
| Golden Tan | `#D4A574` | Highlights and decorations |
| Cream | `#FDFBF7` | Background |

---

## Project Structure

```
jharoka-furniture/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── category/[slug]/          # Category detail pages
│   └── product/[id]/             # Product detail pages
│
├── components/
│   ├── home/                     # Homepage sections
│   │   ├── Hero.tsx              # Hero with video arch
│   │   ├── CategoryCircles.tsx   # Category navigation
│   │   ├── ServicesOverview.tsx  # Services section
│   │   ├── BrandStory.tsx        # About section
│   │   ├── Testimonials.tsx      # Customer reviews
│   │   └── ContactSection.tsx    # Contact form + map
│   │
│   ├── category/
│   │   └── CategoryClient.tsx    # Category gallery with lightbox
│   │
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   └── WhatsAppButton.tsx    # Floating WhatsApp
│   │
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
│
├── data/                         # JSON data files
│   ├── categories.json           # 6 furniture categories
│   ├── products.json             # Product listings
│   ├── testimonials.json         # Customer reviews
│   └── team.json                 # Team members
│
├── public/
│   ├── productpics/              # Product images
│   ├── images/                   # Category images
│   ├── output/                   # Additional gallery images
│   │   ├── Sofas/
│   │   ├── Chairs/
│   │   ├── Beds/
│   │   ├── Dining Tables/
│   │   ├── Wardrobes/
│   │   └── Office Furniture/
│   └── logo.png                  # Brand logo
│
└── lib/
    └── utils.ts                  # Utility functions
```

---

## Categories

The website showcases 6 curated furniture categories:

1. **Sofas** - Heritage sofas with traditional craftsmanship
2. **Chairs** - Accent chairs and seating solutions
3. **Beds** - Handcrafted bed frames and headboards
4. **Dining Tables** - Statement dining furniture
5. **Wardrobes** - Storage solutions with classic design
6. **Office Furniture** - Professional workspace pieces

---

## Homepage Sections

| Section | Description |
|---------|-------------|
| **Hero** | Video arch display with brand messaging and stats |
| **Shop by Category** | 6 circular category thumbnails |
| **Services** | What we offer (Residences, Cafes, Hotels) |
| **About** | Brand story with stats banner and values |
| **Testimonials** | Google-verified customer reviews |
| **Contact** | Form, location details, and Google Maps |

---

## Development

### Running Locally

```bash
npm run dev
```

Server runs on `http://0.0.0.0:5000`

### Building for Production

```bash
npm run build
npm run start
```

---

## Adding Content

### New Products

1. Add images to `public/productpics/` or `public/images/{category}/`
2. Update `data/products.json`:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "slug": "product-slug",
  "category": "sofas",
  "mainImage": "/productpics/image.jpg",
  "images": ["/productpics/image1.jpg", "/productpics/image2.jpg"],
  "shortDescription": "Brief description",
  "description": "Full description",
  "material": "Solid Wood",
  "dimensions": "W x D x H",
  "features": ["Feature 1", "Feature 2"]
}
```

### New Categories

1. Add entry to `data/categories.json`
2. Create folder in `public/output/{CategoryName}/`
3. Add products with matching category slug

---

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js config with React Compiler |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `postcss.config.mjs` | PostCSS with Tailwind |

---

## Contact Information

**Jharoka Heritage Furniture**  
Kavuri Hills, Hyderabad, India  
Phone: +91 73860 37700  
Hours: 10:00 AM - 8:00 PM (All Days)

---

## Recent Updates

### January 2026

- Applied Bebas Neue font across all section headings
- Enhanced About section with premium design, stats banner, and core values
- Added fullscreen image lightbox with keyboard navigation
- Integrated Google Maps with "Get Directions" functionality
- Redesigned mobile category pages with horizontal card layout
- Premium UI throughout with smooth Framer Motion animations

---

## User Preferences

- Modern, premium aesthetic with luxury showroom feel
- Image-focused galleries (no pricing displayed)
- Bold condensed fonts for headings (Bebas Neue style)
- Warm brown color palette
- Mobile-first responsive design
