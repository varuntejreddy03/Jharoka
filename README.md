# Jharoka Heritage Furniture

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)

A premium single-page e-commerce website showcasing handcrafted heritage furniture from Hyderabad, India.

---

## Preview

A luxury digital showroom featuring 6 curated categories of handcrafted furniture with elegant design and smooth animations.

---

## Features

- **Premium Single-Page Design** - Smooth scrolling with animated sections
- **Category-Based Navigation** - 6 furniture categories with image galleries
- **Fullscreen Image Lightbox** - Immersive viewing with keyboard navigation
- **Google Maps Integration** - Easy directions to the showroom
- **Mobile-First Responsive** - Optimized for all devices
- **Contact Form** - Direct inquiry submission
- **Customer Reviews** - Google-verified testimonials

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animations and transitions |

### Typography

| Font | Usage |
|------|-------|
| **Bebas Neue** | Bold condensed headings |
| **Inter** | Body text |

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Brown | `#2C1810` | Primary dark |
| Warm Brown | `#8B4513` | Accent |
| Golden Tan | `#D4A574` | Highlights |
| Cream | `#FDFBF7` | Background |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jharoka-furniture.git

# Navigate to project
cd jharoka-furniture

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
jharoka-furniture/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── category/[slug]/    # Category pages
│   └── product/[id]/       # Product pages
│
├── components/
│   ├── home/               # Homepage sections
│   ├── category/           # Category components
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Reusable components
│
├── data/                   # JSON data files
│   ├── categories.json
│   ├── products.json
│   └── testimonials.json
│
└── public/                 # Static assets
    ├── productpics/
    ├── images/
    └── output/
```

---

## Categories

| Category | Description |
|----------|-------------|
| Sofas | Heritage sofas with traditional craftsmanship |
| Chairs | Accent chairs and seating solutions |
| Beds | Handcrafted bed frames and headboards |
| Dining Tables | Statement dining furniture |
| Wardrobes | Storage with classic design |
| Office Furniture | Professional workspace pieces |

---

## Homepage Sections

1. **Hero** - Video arch with brand messaging
2. **Shop by Category** - 6 circular category thumbnails
3. **Services** - Residences, Cafes, Hotels
4. **About** - Brand story with stats and values
5. **Testimonials** - Google-verified reviews
6. **Contact** - Form and Google Maps

---

## Adding Content

### New Product

Add to `data/products.json`:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "category": "sofas",
  "mainImage": "/productpics/image.jpg",
  "images": ["/productpics/img1.jpg"],
  "description": "Full description"
}
```

### New Category

1. Add entry to `data/categories.json`
2. Create folder: `public/output/{CategoryName}/`
3. Add products with matching category slug

---

## Contact

**Jharoka Heritage Furniture**  
Kavuri Hills, Hyderabad, India  
Phone: +91 73860 37700  
Hours: 10:00 AM - 8:00 PM (All Days)

---

## License

This project is proprietary. All rights reserved.
