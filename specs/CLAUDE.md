# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Current Architecture:** Static site built with Eleventy (11ty), Alpine.js, and Tailwind CSS.

**Legacy:** The original React SPA code is preserved in `src/pages/` and `src/components/` but is **no longer used**. The active site is generated from Nunjucks templates.

## Development Commands

```bash
# Install dependencies
npm i

# Build site (Eleventy + Tailwind CSS)
npm run build

# Development server (if available)
npm run dev

# Preview production build
npm run preview
```

## Active Architecture (11ty + Alpine.js)

### Static Site Generation
- **Template Engine:** Nunjucks (.njk files) in `src/`
- **Build Output:** `_site/` directory
- **Build Process:** `eleventy && tailwindcss -i src/index.css -o _site/css/output.css --minify`

### Page Structure
Active pages in `src/` directory:
- `index.njk` - Home page with hero, principles, offerings
- `products.njk` - Products listing page
- `products/chord.njk` - CHORD product detail (3 tabs: WHY, WHAT, HOW)
- `products/basis.njk` - BASIS product detail (3 tabs with charts/flow diagram)
- `products/lara.njk` - LARA product detail (3 tabs with features)
- `solutions.njk` - Solutions with tabbed interface (Access/Segmentation)
- `contact.njk` - Contact form with validation
- `team.njk` - Team members with 3D flip cards
- `sitemap.njk` - XML sitemap generation

### Layout System
- **Base template:** `src/_includes/base.njk`
  - Contains HTML structure, meta tags, header, footer
  - Includes Alpine.js, Tailwind CSS, fonts
  - Mobile-responsive navigation with Alpine.js

### Client-Side Interactivity
- **Alpine.js** handles all dynamic behavior:
  - Tab switching (`x-data`, `x-show`)
  - Mobile menu toggle
  - Form validation
  - Hover/click interactions
  - 3D flip cards
- **No React, no routing library**

### Styling
- **Primary stylesheet:** `src/index.css` (Tailwind base/components/utilities)
- **Output:** `_site/css/output.css` (minified)
- Custom color palette:
  - `#0B3041` - Dark blue (primary text/headings)
  - `#156082` - Medium blue (hover states)
  - `#5A9BA6` - Teal (accents/highlights)
  - `#7097AA` - Light blue (cards/backgrounds)
  - `#F1F4F1` - Light gray (backgrounds)
- Custom font: Zilla Slab (Google Fonts)

### Assets
- **Location:** `src/assets/`
- **Build output:** `_site/assets/`
- Includes product images, diagrams, icons, team photos

### SEO Configuration
- Comprehensive meta tags in `base.njk`
- `sitemap.xml` for all pages
- `robots.txt` in `_site/public/`
- Canonical URLs and Open Graph tags

## Legacy Code (Not Used)

The following directories contain the **original React SPA** but are **not active**:
- `src/pages/` - React page components (Index.tsx, Products.tsx, etc.)
- `src/components/` - React components (Header.tsx, Footer.tsx, etc.)
- `src/components/ui/` - shadcn/ui components
- `src/hooks/` - Custom React hooks
- `src/App.tsx` - React Router configuration

**Do not modify these files** unless explicitly converting more pages to the new architecture.

## Adding New Pages

1. Create `.njk` template in `src/`
2. Add front matter with `layout: base.njk`, `title`, `description`, `permalink`
3. Use Alpine.js for interactivity (`x-data`, `x-show`, `@click`, etc.)
4. Add to `src/sitemap.njk` if public-facing
5. Run `npm run build` to generate static HTML in `_site/`

## Working with Alpine.js

**Common patterns:**
```html
<!-- Tabs -->
<div x-data="{ activeTab: 'why' }">
  <button @click="activeTab = 'why'">WHY</button>
  <div x-show="activeTab === 'why'">Content</div>
</div>

<!-- Form validation -->
<form x-data="{ errors: {}, validate() { ... } }" @submit.prevent="submitForm()">
  <input x-model="name" />
  <p x-show="errors.name" x-text="errors.name"></p>
</form>

<!-- Hover/click toggle -->
<div x-data="{ clicked: false }"
  @click="clicked = !clicked"
  @mouseenter="if (window.innerWidth >= 1024) clicked = true">
</div>
```

## Build Output

Generated files in `_site/`:
- `/index.html` - Home
- `/products/index.html` - Products listing
- `/products/chord/index.html` - CHORD detail
- `/products/basis/index.html` - BASIS detail
- `/products/lara/index.html` - LARA detail
- `/solutions/index.html` - Solutions
- `/contact/index.html` - Contact
- `/team/index.html` - Team
- `/sitemap.xml` - Sitemap
- `/css/output.css` - Compiled Tailwind
- `/assets/` - Images and assets
- `/public/` - Static files (robots.txt, logos)
