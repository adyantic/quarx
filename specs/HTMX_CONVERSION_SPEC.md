# HTMX Conversion Specification

## Project Overview
Convert the Quarx Biopharma Consulting website from a React SPA to a static HTML site using htmx and Alpine.js, maintaining all existing functionality while improving performance and SEO.

---

## Goals
1. Maintain 100% feature parity with React version
2. Reduce JavaScript bundle size by ~85% (200kb → 30kb)
3. Enable static hosting (Netlify/Vercel free tier)
4. Improve initial page load and SEO with server-rendered HTML
5. Preserve existing visual design and Tailwind styling
6. Progressive enhancement (works without JS)

---

## Architecture

### Build System
- **Static Site Generator**: 11ty (Eleventy)
- **Templating Engine**: Nunjucks
- **CSS Framework**: Tailwind CSS (existing configuration)
- **JavaScript Libraries**:
  - htmx v1.9+ (~14kb gzipped) - AJAX navigation & interactions
  - Alpine.js v3+ (~15kb gzipped) - Client-side reactivity
- **Deployment**: Static hosting (Netlify/Vercel)

### Directory Structure
```
project-root/
├── src/
│   ├── _includes/          # Reusable templates
│   │   ├── base.njk        # HTML skeleton
│   │   ├── header.njk      # Navigation header
│   │   ├── footer.njk      # Footer
│   │   └── components/     # Reusable UI components
│   ├── _data/              # Static data (JSON)
│   │   ├── products.json
│   │   ├── solutions.json
│   │   └── team.json
│   ├── pages/              # Page templates
│   │   ├── index.njk
│   │   ├── products.njk
│   │   ├── solutions.njk
│   │   ├── team.njk
│   │   └── contact.njk
│   ├── assets/             # Images, icons (unchanged)
│   └── css/
│       └── input.css       # Tailwind entry point
├── public/                 # Static files (passthrough)
├── netlify/functions/      # Serverless functions
│   └── contact.js          # Contact form handler
├── _site/                  # Build output (gitignored)
├── .eleventy.js            # 11ty configuration
├── tailwind.config.ts      # Tailwind config (adapted)
└── package.json
```

---

## Page Mapping

### Current React Routes → Static HTML Pages

| React Route | Static File | Template | Notes |
|-------------|-------------|----------|-------|
| `/` | `/index.html` | `index.njk` | Home page with hero |
| `/products` | `/products/index.html` | `products.njk` | Product listing |
| `/products/chord` | `/products/chord/index.html` | `products/chord.njk` | CHORD detail |
| `/products/basis` | `/products/basis/index.html` | `products/basis.njk` | BASIS detail |
| `/products/lara` | `/products/lara/index.html` | `products/lara.njk` | LARA detail |
| `/solutions` | `/solutions/index.html` | `solutions.njk` | Solutions with tabs |
| `/solutions?tab=segmentation` | `/solutions/index.html` | `solutions.njk` | URL param handled by Alpine |
| `/solutions/patient-journey` | `/solutions/patient-journey/index.html` | `solutions/patient-journey.njk` | Patient detail |
| `/solutions/hcp-provider` | `/solutions/hcp-provider/index.html` | `solutions/hcp-provider.njk` | HCP detail |
| `/solutions/idn-health-system` | `/solutions/idn-health-system/index.html` | `solutions/idn-health-system.njk` | IDN detail |
| `/team` | `/team/index.html` | `team.njk` | Team page |
| `/contact` | `/contact/index.html` | `contact.njk` | Contact form |
| `*` (404) | `/404.html` | `404.njk` | Not found page |

---

## Component Conversion Strategy

### 1. Header Component
**Current**: React component with `useState` for mobile menu, `useLocation` for active links

**New Implementation**:
```html
<header x-data="{ mobileMenuOpen: false }" class="...">
  <!-- Logo (unchanged) -->
  <a href="/">
    <img src="/quarx-logo.png" alt="QUARX Logo">
  </a>

  <!-- Desktop Nav -->
  <nav class="hidden lg:flex">
    <a href="/products" class="{{ 'text-[#5A9BA6]' if page.url.startsWith('/products') }}">
      PRODUCTS
    </a>
    <!-- ... other links -->
  </nav>

  <!-- Mobile Menu Toggle -->
  <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden">
    <svg x-show="!mobileMenuOpen"><!-- Menu icon --></svg>
    <svg x-show="mobileMenuOpen"><!-- X icon --></svg>
  </button>

  <!-- Mobile Nav -->
  <nav x-show="mobileMenuOpen" x-transition class="lg:hidden">
    <!-- Links with @click="mobileMenuOpen = false" -->
  </nav>
</header>
```

**Features**:
- Alpine.js for menu toggle state
- 11ty template logic for active link highlighting
- htmx boost for smooth navigation (optional)

---

### 2. Footer Component
**Current**: React component with static content

**New Implementation**:
- Pure HTML template in `_includes/footer.njk`
- No JavaScript required
- Links rendered from `_data/navigation.json` (optional)

---

### 3. TransitioningHeroGraphic
**Current**: React with `useState` + `useEffect` for image rotation

**New Implementation**:
```html
<div x-data="{
  current: 0,
  dataImages: ['sunflower.png', 'pinecone.png'],
  graphicImages: ['sunflower-insight.png', 'pinecone-insight.png']
}" x-init="setInterval(() => { current = (current + 1) % 2 }, 5000)">

  <div class="grid grid-cols-3 gap-8">
    <!-- Column 1: Data Images -->
    <div>
      <img :src="`/assets/${dataImages[current]}`"
           x-transition:enter="transition ease-in-out duration-1000"
           x-transition:leave="transition ease-in-out duration-1000">
      <div>REAL WORLD DATA</div>
    </div>

    <!-- Column 2: Plus sign (static) -->

    <!-- Column 3: Graphic Images -->
    <div>
      <img :src="`/assets/${graphicImages[current]}`" x-transition>
      <div>INSIGHT</div>
    </div>
  </div>
</div>
```

**Features**:
- Alpine.js `x-data` for state
- `x-init` for interval timer
- CSS transitions via `x-transition`
- Fallback: Shows first image without JS

---

### 4. Solutions Page - Tabs
**Current**: React `useState` + `useSearchParams` for tab state

**New Implementation**:
```html
<div x-data="{
  activeTab: new URLSearchParams(window.location.search).get('tab') || 'access'
}">
  <!-- Tab Buttons -->
  <button
    @click="activeTab = 'access'"
    :class="activeTab === 'access' ? 'bg-[#156082] text-white' : 'bg-transparent'">
    Access & Reimbursement Analytics
  </button>
  <button
    @click="activeTab = 'segmentation'"
    :class="activeTab === 'segmentation' ? 'bg-[#156082] text-white' : 'bg-transparent'">
    Customer Segmentation
  </button>

  <!-- Tab Content -->
  <div x-show="activeTab === 'access'" x-transition>
    <!-- Access content -->
  </div>
  <div x-show="activeTab === 'segmentation'" x-transition>
    <!-- Segmentation content -->
  </div>
</div>
```

**Features**:
- Alpine.js for tab state
- URL parameter support on initial load
- Smooth transitions
- Fallback: Shows all content without JS

**Alternative (htmx approach)**:
```html
<button hx-get="/solutions-access.html" hx-target="#tab-content" hx-push-url="/solutions?tab=access">
  Access & Reimbursement
</button>
<div id="tab-content">
  <!-- Server returns HTML fragment -->
</div>
```

---

### 5. QuestionCard (Hover/Click Interaction)
**Current**: React with `useState` for hover/click, `useEffect` for touch detection

**New Implementation**:
```html
<div
  x-data="{ active: false, isTouchDevice: window.innerWidth < 1024 }"
  @mouseenter="!isTouchDevice && (active = true)"
  @mouseleave="!isTouchDevice && (active = false)"
  @click="isTouchDevice && (active = !active)"
  :class="active ? 'bg-[#F1F4F1]' : 'bg-white'">

  <p x-text="active ? '{{ hoverText }}' : '{{ question }}'"></p>
</div>
```

**Features**:
- Alpine.js for state management
- Touch device detection
- CSS class binding
- Fallback: Shows question text without JS

---

### 6. Contact Form
**Current**: React Hook Form + Zod validation + toast notifications

**New Implementation**:
```html
<form
  x-data="{ submitting: false, message: '', success: false }"
  @submit.prevent="
    submitting = true;
    fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: new FormData($event.target)
    })
    .then(r => r.json())
    .then(data => {
      success = true;
      message = data.message;
      $event.target.reset();
    })
    .catch(e => {
      success = false;
      message = 'Error sending message';
    })
    .finally(() => submitting = false)
  ">

  <input name="name" required maxlength="100">
  <input name="email" type="email" required maxlength="255">
  <input name="phone" maxlength="20">
  <input name="company" maxlength="100">
  <textarea name="message" required maxlength="1000"></textarea>

  <button type="submit" :disabled="submitting">
    <span x-show="!submitting">Send Message</span>
    <span x-show="submitting">Sending...</span>
  </button>

  <div x-show="message" :class="success ? 'text-green-600' : 'text-red-600'" x-text="message"></div>
</form>
```

**Serverless Function** (`netlify/functions/contact.js`):
```javascript
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const formData = new URLSearchParams(event.body);
  const { name, email, phone, company, message } = Object.fromEntries(formData);

  // Validation
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields' })
    };
  }

  // Send email via SendGrid/Mailgun/etc
  // ... email service integration ...

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message sent successfully!' })
  };
};
```

**Features**:
- Alpine.js for form state
- Client-side validation via HTML5 attributes
- Server-side validation in serverless function
- Loading state during submission
- Success/error message display
- Fallback: Standard form submission without JS

---

## Data Files

### `_data/products.json`
```json
[
  {
    "id": "chord",
    "title": "CHORD",
    "subtitle": "Cross-Channel Hospital OP\nReimbursement Dashboard",
    "description": "CHORD is a comprehensive analytics-ready database...",
    "icon": "/assets/CHORD.svg",
    "slug": "chord"
  },
  {
    "id": "basis",
    "title": "BASIS",
    "subtitle": "Brand Access Strategy\nImpact Simulator",
    "description": "Brand Access Strategy Impact Simulator...",
    "icon": "/assets/BASIS.svg",
    "slug": "basis"
  },
  {
    "id": "lara",
    "title": "LARA",
    "subtitle": "Launch Analog\nRecommendation Agent",
    "description": "Launch Analog Recommendation Agent...",
    "icon": "/assets/LARA.svg",
    "slug": "lara"
  }
]
```

### `_data/solutions.json`
```json
{
  "access": {
    "title": "Access & Reimbursement Analytics",
    "subtitle": "Define target access, secure it and pull it through",
    "columns": [
      {
        "icon": "/assets/Payer_Provider_Access_Strategy.svg",
        "title": "Payer-Provider Access Strategy",
        "questions": [
          {
            "text": "How does payer management vary...",
            "hoverText": "Formulary Landscape Analysis"
          }
          // ... more questions
        ]
      }
      // ... more columns
    ]
  },
  "segmentation": {
    "title": "Customer Segmentation",
    "subtitle": "Environment and ecosystem that drives behavior",
    "cards": [
      {
        "icon": "/assets/patient-icon.svg",
        "title": "Patient Journey & Segmentation",
        "link": "/solutions/patient-journey",
        "questions": [
          "Who are my target patient groups...",
          "What are key leverage points..."
        ]
      }
      // ... more cards
    ]
  }
}
```

---

## Build Configuration

### `.eleventy.js`
```javascript
module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({
    "node_modules/htmx.org/dist/htmx.min.js": "js/htmx.min.js"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/cdn.min.js": "js/alpine.min.js"
  });

  // Add active page filter
  eleventyConfig.addFilter("isActive", function(currentPath, targetPath) {
    return currentPath.startsWith(targetPath);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk"
  };
};
```

### `package.json` Scripts
```json
{
  "scripts": {
    "dev": "concurrently \"eleventy --serve\" \"tailwindcss -i src/css/input.css -o _site/css/output.css --watch\"",
    "build": "eleventy && tailwindcss -i src/css/input.css -o _site/css/output.css --minify",
    "clean": "rm -rf _site"
  },
  "dependencies": {
    "alpinejs": "^3.13.0",
    "htmx.org": "^1.9.0"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.0",
    "autoprefixer": "^10.4.21",
    "concurrently": "^8.2.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17"
  }
}
```

### `tailwind.config.ts` (Updated)
```typescript
export default {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./_site/**/*.html"
  ],
  // ... rest of existing config
}
```

---

## Base HTML Template

### `_includes/base.njk`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title | default("QUARX - Biopharma Consulting") }}</title>
  <meta name="description" content="{{ description | default('Maximizing biopharma innovations through real world data and analytics') }}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;500&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="/css/output.css">

  <!-- htmx -->
  <script src="/js/htmx.min.js" defer></script>

  <!-- Alpine.js -->
  <script src="/js/alpine.min.js" defer></script>
</head>
<body hx-boost="true" class="bg-white">
  {% include "header.njk" %}

  <main>
    {{ content | safe }}
  </main>

  {% include "footer.njk" %}
</body>
</html>
```

---

## Navigation Enhancement with htmx

### htmx Boost (Optional)
Add `hx-boost="true"` to body for SPA-like navigation:
- Intercepts anchor clicks
- Uses AJAX to fetch pages
- Swaps `<body>` content
- Updates browser history
- Maintains scroll position

**Benefits**:
- Faster page transitions
- No full page reload
- Preserves Alpine.js state in header/footer

**Configuration**:
```html
<body hx-boost="true" hx-indicator="#loading-spinner">
  <!-- Loading indicator -->
  <div id="loading-spinner" class="htmx-indicator">Loading...</div>

  <!-- Rest of content -->
</body>
```

---

## Progressive Enhancement Strategy

### JavaScript Required Features
1. **Mobile menu toggle** - Degrades to: Always visible menu on mobile
2. **Image rotation** - Degrades to: First image shown statically
3. **Tab switching** - Degrades to: All tabs visible/expanded
4. **Question hover** - Degrades to: Always shows question text
5. **Contact form AJAX** - Degrades to: Standard form submission to serverless function

### No-JS Fallbacks
```html
<noscript>
  <style>
    [x-cloak] { display: block !important; }
    .htmx-indicator { display: none !important; }
  </style>
</noscript>
```

---

## Migration Checklist

### Phase 1: Setup ✓
- [ ] Install 11ty and dependencies
- [ ] Create directory structure
- [ ] Configure 11ty, Tailwind, PostCSS
- [ ] Setup base template and layouts
- [ ] Test build pipeline

### Phase 2: Shared Components ✓
- [ ] Convert Header component
- [ ] Convert Footer component
- [ ] Test navigation and active states
- [ ] Test mobile menu with Alpine.js

### Phase 3: Static Pages ✓
- [ ] Convert Index (home) page
- [ ] Convert Team page
- [ ] Test styling and layout

### Phase 4: Product Pages ✓
- [ ] Create products.json data file
- [ ] Convert Products listing page
- [ ] Convert CHORD detail page
- [ ] Convert BASIS detail page
- [ ] Convert LARA detail page
- [ ] Test navigation between pages

### Phase 5: Solutions Pages ✓
- [ ] Create solutions.json data file
- [ ] Convert Solutions page with tabs
- [ ] Implement tab switching (Alpine.js)
- [ ] Implement QuestionCard hover/click
- [ ] Convert Patient Journey detail
- [ ] Convert HCP Provider detail
- [ ] Convert IDN Health System detail
- [ ] Test all interactions

### Phase 6: Contact Form ✓
- [ ] Convert Contact page
- [ ] Create serverless function
- [ ] Implement form validation
- [ ] Test form submission
- [ ] Setup email service integration

### Phase 7: Polish ✓
- [ ] Convert 404 page
- [ ] Add loading indicators
- [ ] Test htmx boost navigation
- [ ] Test all responsive breakpoints
- [ ] Verify all images/assets load
- [ ] Cross-browser testing

### Phase 8: Cleanup ✓
- [ ] Remove all React files
- [ ] Remove React dependencies
- [ ] Remove Vite configuration
- [ ] Update CLAUDE.md documentation
- [ ] Test production build
- [ ] Deploy to staging

### Phase 9: Deployment ✓
- [ ] Configure Netlify/Vercel
- [ ] Setup environment variables
- [ ] Deploy to production
- [ ] Verify all functionality
- [ ] Monitor performance

---

## Performance Targets

### Bundle Sizes
- **Current (React)**: ~200kb (minified + gzipped)
- **Target (htmx + Alpine)**: ~30kb (minified + gzipped)
- **Reduction**: 85%

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## Testing Plan

### Manual Testing
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Image rotation on hero
- [ ] Solutions tabs switch correctly
- [ ] Question cards hover/click
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Responsive design on all breakpoints
- [ ] Works without JavaScript (progressive enhancement)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratios
- [ ] Focus indicators
- [ ] ARIA labels where needed

---

## Rollback Plan

If conversion issues arise:
1. Current React code remains in git history
2. Can revert all changes via git
3. Keep React build in separate branch during migration
4. Use feature flags to toggle between versions

---

## Success Criteria

✓ All 12 pages render correctly
✓ All interactive features work (menu, tabs, forms, hover)
✓ Mobile responsive design maintained
✓ Bundle size reduced by 80%+
✓ Lighthouse performance score 90+
✓ Works without JavaScript (degraded experience)
✓ Contact form successfully sends emails
✓ Cross-browser compatible
✓ Deployed to production successfully

---

## Post-Migration

### Documentation Updates
- Update CLAUDE.md with new architecture
- Document 11ty conventions
- Document Alpine.js patterns used
- Add troubleshooting guide

### Monitoring
- Setup performance monitoring (Web Vitals)
- Monitor form submission success rate
- Track page load times
- Monitor error logs from serverless functions

---

## Questions & Decisions

### ✓ Confirmed
- Static site generator: 11ty
- JavaScript libraries: htmx + Alpine.js
- Hosting: Netlify or Vercel
- Contact form: Serverless function

### ⏳ To Decide
- Email service for contact form (SendGrid, Mailgun, or other?)
- Analytics setup (Google Analytics, Plausible, etc.?)
- Use htmx boost for navigation or standard links?
- Keep lucide-react icons or convert to static SVGs?

---

## Timeline Estimate

- **Week 1**: Setup + Shared Components (Header/Footer)
- **Week 2**: Static Pages + Product Pages
- **Week 3**: Solutions Pages + Interactive Components
- **Week 4**: Contact Form + Testing + Deployment

**Total**: 4 weeks part-time or 1-1.5 weeks full-time
