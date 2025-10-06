# QUARX Pages Conversion Specification
## htmx + Alpine.js + 11ty Implementation

This specification covers the conversion of Products, Solutions, Team, and Contact pages from React to htmx/Alpine.js, maintaining full parity with styling, functionality, and SEO optimization.

---

## 1. Products Page (`/products/`)

### Page Structure
- **Layout**: Three-column card layout (responsive: stacks on mobile)
- **Products**: CHORD, BASIS, LARA (from `src/_data/products.json`)
- **Navigation**: Each card links to detail page via htmx navigation

### Styling Requirements

#### Page Layout
```njk
- Background: white
- Min height: 90vh
- Padding: py-8 md:py-12, px-2.5
- Max width: 1440px centered
```

#### Header Section
```njk
- H1: "Our Products: for Accelerated Analytics & Insight Generation"
- Text: #0B3041
- Font: text-4xl md:text-5xl, font-medium
- Alignment: center
- Gap: gap-8 from content
```

#### Product Cards
```njk
- Layout: flex-1, flex-col, gap-8
- Background: #F1F4F1
- Shadow: shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
- Border radius: rounded-[20px]
- Padding: p-5
- Responsive: full width mobile, 1/3 desktop

Card Elements:
1. Title (H2)
   - Color: #0B3041
   - Font: text-4xl md:text-5xl, font-medium

2. Subtitle
   - Color: #5A9BA6
   - Font: text-2xl md:text-3xl, font-medium, leading-10
   - Whitespace: pre-line (for line breaks)

3. Icon
   - Size: 85x85px
   - Source: /assets/{product}.svg

4. Description
   - Color: #0B3041
   - Font: text-xl md:text-2xl, font-medium, leading-9
   - Alignment: center

5. Navigation Button (Circular)
   - Size: 58x58px
   - Background: #5A9BA6
   - Hover: #5A9BA6/80
   - Icon: ChevronRight (lucide-react equivalent in Alpine)
   - Link: /products/{slug}/
```

### SEO Requirements
```njk
---
layout: base.njk
title: QUARX Products - Accelerated Analytics & Insight Generation
description: Explore QUARX's analytics products: CHORD for reimbursement data, BASIS for access strategy simulation, and LARA for AI-enabled launch planning
---

- Canonical: /products/
- H1: Single, descriptive
- Aria-labels: Product cards
- Structured data: ProductCollection schema
```

### Alpine.js Behavior
- Hover states on cards
- Button hover effects
- No complex interactions needed

---

## 2. Solutions Page (`/solutions/`)

### Page Structure
- **Two Tabs**: "Access & Reimbursement Analytics" and "Customer Segmentation"
- **Tab State**: Query parameter `?tab=segmentation` for deep linking
- **Complex Layout**: Three-column grid for access tab, diamond cards for segmentation tab

### Styling Requirements

#### Tab Buttons
```njk
- Layout: flex-col md:flex-row, gap-3 md:gap-6
- Button styling:
  - Active: bg-[#156082], text-white, border-[#156082]
  - Inactive: bg-transparent, text-[#7097AA], border-[#7097AA]
  - Rounded: rounded-full
  - Padding: px-3 md:px-4, py-2 md:py-[11px]
  - Font: text-sm md:text-base lg:text-xl, font-medium
  - Transition: all colors
```

#### Access Tab Layout

**Title Section**
```njk
- Max width: 1400px
- Font: text-xl md:text-2xl lg:text-4xl, font-medium
- Colors: #0B3041 main text, #5A9BA6 highlighted text
- Content: "Access & Reimbursement Analytics: Our solutions are designed to answer specific questions to define target access, secure it and pull it through"
```

**Three Column Grid**
```njk
- Grid: grid-cols-1 lg:grid-cols-3, gap-6
- Each column:
  1. Column Header
     - Height: h-[90px] md:h-[115px]
     - Background: #7097AA
     - Icon: SVG from assets (58x87px or similar)
     - Title: text-base md:text-xl lg:text-2xl, white
     - Supports HTML (for line breaks)

  2. Question Cards
     - Height: h-[70px] md:h-[90px]
     - Background: white (default), #F1F4F1 (hover/active)
     - Border: border-gray-300, shadow-md
     - Hover behavior: Show hover text
     - Touch behavior: Click to toggle on mobile
     - Font: text-sm md:text-base lg:text-xl, font-medium, #0B3041
```

#### Segmentation Tab Layout

**Title Section**
```njk
- Same styling as Access tab
- Content: "Our approach to Customer Segmentation is focused not just on observed behavior but also on the environment and ecosystem that drives the behavior"
```

**Diamond Cards Grid**
```njk
- Grid: grid-cols-1 lg:grid-cols-3, gap-8 lg:gap-12
- Each card contains:
  1. Rotated Diamond
     - Size: 240x240px md:280x280px
     - Rotation: rotate-45 (container), rotate-[-45deg] (content)
     - Background: #7097AA
     - Shadow: shadow-lg

  2. Diamond Content
     - Icon: Patient/HCP/IDN icon (inverted colors for Patient)
     - Title: text-2xl md:text-3xl, white, font-medium, center, multi-line
     - Link button: 32x32px circle, border-white, chevron icon
     - Link destinations:
       - /solutions/patient-journey
       - /solutions/hcp-provider
       - /solutions/idn-health-system

  3. Bullet List
     - Gap: space-y-3
     - Font: text-xl, #0B3041, font-medium
     - Bullet: • (text-[#0B3041])
```

### SEO Requirements
```njk
---
layout: base.njk
title: QUARX Solutions - Access, Reimbursement & Customer Segmentation
description: Comprehensive analytics solutions for market access strategy, payer contracting, performance tracking, and customer segmentation in biopharma
---

- Canonical: /solutions/
- Handle tab state in URL
- Aria-labels: Tabs and sections
- Structured data: Service schema
```

### Alpine.js Behavior
```javascript
x-data="{
  activeTab: 'access',
  init() {
    // Read ?tab= from URL
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'segmentation') this.activeTab = 'segmentation';
  },
  switchTab(tab) {
    this.activeTab = tab;
    // Update URL without reload
    const url = new URL(window.location);
    if (tab === 'segmentation') {
      url.searchParams.set('tab', 'segmentation');
    } else {
      url.searchParams.delete('tab');
    }
    window.history.pushState({}, '', url);
  }
}"

// Question card hover/click behavior
x-data="{
  isActive: false,
  isTouchDevice: false,
  init() {
    this.isTouchDevice = window.innerWidth < 1024;
    window.addEventListener('resize', () => {
      this.isTouchDevice = window.innerWidth < 1024;
    });
  }
}"
```

---

## 3. Team Page (`/team/`)

### Page Structure
- **Hero Text**: Large introductory paragraph
- **Team Grid**: 3D flip cards (4 team members)
- **Card Flip**: Hover to reveal bio (front: photo, back: bio)

### Styling Requirements

#### Hero Section
```njk
- Max width: 7xl (1280px)
- Padding: px-4 sm:px-6 lg:px-8
- Margin: mb-16

Hero Text:
- Font: text-3xl sm:text-4xl lg:text-5xl, font-light
- Color: #0B3041 main text, #5A9BA6 highlighted
- Alignment: center
- Leading: leading-relaxed
- Content: "Our team brings together scientists, strategists, and industry experts with deep biopharma experience. We bridge science and business, helping organizations accelerate innovation and market success."
```

#### Team Grid
```njk
- Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Gap: gap-8 lg:gap-12
- Max width: 6xl (1152px) centered
- Card height: h-[600px]
```

#### 3D Flip Card
```njk
Front:
- Image area: h-[calc(100%-100px)]
- Image: object-cover, full width/height
- Info section: p-6, border-t-4 border-[#5A9BA6]
- Name: text-2xl, font-light, #0B3041, mb-2
- Title: text-lg, #5A9BA6, font-light

Back:
- Padding: p-8
- Border: border-t-4 border-[#5A9BA6]
- Name: text-2xl, font-light, #0B3041, mb-4
- Bio: text-base, #0B3041, leading-relaxed
- Layout: flex-col justify-center (vertically centered)

CSS Classes (from src/index.css):
- .perspective-1000 { perspective: 1000px; }
- .transform-style-3d { transform-style: preserve-3d; }
- .backface-hidden { backface-visibility: hidden; }
- .rotate-y-180 { transform: rotateY(180deg); }
```

### SEO Requirements
```njk
---
layout: base.njk
title: Meet the QUARX Team - Biopharma Experts & Strategists
description: Our team of scientists, strategists, and industry experts brings deep biopharma experience in market access, analytics, and innovation
---

- Canonical: /team/
- Alt text: "{name} - {title}"
- Structured data: Person schema for each team member
```

### Alpine.js Behavior
```javascript
// Mobile flip behavior (click instead of hover)
x-data="{ flipped: false }"
@click="flipped = !flipped"
:class="flipped ? 'rotate-y-180' : ''"
```

---

## 4. Contact Page (`/contact/`)

### Page Structure
- **Two-Column Layout**: Left (Venn diagram), Right (Contact form)
- **Form Validation**: Client-side validation with Alpine.js
- **Form Submission**: htmx POST to backend (or mailto fallback)

### Styling Requirements

#### Page Layout
```njk
- Grid: grid-cols-1 lg:grid-cols-2
- Gap: gap-12 lg:gap-16
- Alignment: lg:items-start
- Padding: pt-32 pb-16
- Max width: 7xl (1280px)
```

#### Left Column (Value Prop)
```njk
Title:
- Font: text-3xl lg:text-4xl, font-light
- Color: #0B3041
- Leading: leading-tight
- Content: "We are in the sweetspot...<br />and now so are you."

Venn Diagram:
- Width: max-w-md, mx-auto lg:mx-0
- Margin: my-12
- Image: /assets/venn-diagram.png
- Alt: "QUARX Sweet Spot - Market Access & Commercial Strategy, Life Sciences Data & Analytical Expertise, Intentional Infusion of AI & Technology"
```

#### Right Column (Form)
```njk
Container:
- Background: white
- Shadow: shadow-lg
- Border radius: rounded-lg
- Padding: px-8 pb-8 pt-0 lg:px-12 lg:pb-12 lg:pt-0

Form Title:
- Font: text-3xl lg:text-4xl, font-light
- Color: #0B3041
- Margin: mb-8
- Content: "Let's connect and explore possibilities!"

Form Fields (all):
- Label: text-[#0B3041], text-lg, font-light, mb-2
- Input styling:
  - Border: border-gray-300
  - Focus: border-[#5A9BA6], ring-[#5A9BA6]
  - Width: w-full
- Error text: text-red-500, text-sm, mt-1

Fields:
1. Name (required, max 100 chars)
2. Email (required, valid email, max 255 chars)
3. Phone (optional, max 20 chars)
4. Company (optional, max 100 chars)
5. Message (required, textarea, 5 rows, max 1000 chars)

Submit Button:
- Background: #0B3041
- Hover: #156082
- Text: white, text-lg
- Padding: py-6
- Border radius: rounded-md
- Full width: w-full
- States: "SUBMIT" / "SENDING..."
- Disabled during submission
```

### SEO Requirements
```njk
---
layout: base.njk
title: Contact QUARX - Let's Connect and Explore Possibilities
description: Get in touch with QUARX for biopharma consulting, market access strategy, and real-world data analytics solutions
---

- Canonical: /contact/
- Form labels with proper for attributes
- Structured data: ContactPage schema
```

### Alpine.js Form Validation
```javascript
x-data="{
  formData: {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  },
  errors: {},
  isSubmitting: false,

  validateField(field) {
    // Validation logic
    if (field === 'name' && !this.formData.name.trim()) {
      this.errors.name = 'Name is required';
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Invalid email address';
      } else {
        delete this.errors.email;
      }
    }
    // ... other validations
  },

  async submitForm() {
    this.isSubmitting = true;

    // Validate all fields
    Object.keys(this.formData).forEach(field => this.validateField(field));

    if (Object.keys(this.errors).length === 0) {
      // Submit via htmx or fetch
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          // Show success message
          alert('Message sent successfully!');
          // Reset form
          this.formData = { name: '', email: '', phone: '', company: '', message: '' };
        }
      } catch (error) {
        alert('Failed to send message. Please try again.');
      }
    }

    this.isSubmitting = false;
  }
}"
```

---

## Common Patterns Across All Pages

### Header & Footer
- Use `{% include "header.njk" %}` and `{% include "footer.njk" %}`
- Same separator line: `<div class="flex min-h-px w-full bg-[#E2E2E9]"></div>`

### SEO Meta Tags (all pages)
```njk
- title: Page-specific
- description: Page-specific (155 chars max)
- canonical: Page URL
- og:title, og:description, og:url, og:image
- twitter:card, twitter:title, twitter:description, twitter:image
- Structured data: Page-appropriate schema.org type
```

### Accessibility (all pages)
- `aria-label` on major sections
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Form labels with `for` attributes
- Focus states on interactive elements

### htmx Integration
```html
- body: hx-boost="true" (already in base.njk)
- Links: Use regular <a href=""> (auto-boosted)
- Forms: hx-post="/api/endpoint" hx-swap="outerHTML"
```

### Responsive Breakpoints (from tailwind.config.ts)
```javascript
xs: '384px'
s24: '412px'
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

### Custom CSS Classes (from src/index.css)
```css
- s24-text-hero: Responsive hero text (2.5rem-3.5rem)
- s24-text-large: Responsive large text (1.75rem-2.25rem)
- s24-text-medium: Responsive medium text (1.25rem-1.5rem)
- s24-padding: Responsive padding (1rem-1.5rem)
- perspective-1000: 3D perspective
- transform-style-3d: 3D transforms
- backface-hidden: Card flip support
- rotate-y-180: Y-axis rotation
```

---

## File Structure

```
src/
├── products.njk                    # Products listing
├── solutions.njk                   # Solutions with tabs
├── team.njk                        # Team with flip cards
├── contact.njk                     # Contact form
├── _data/
│   ├── products.json              # Existing product data
│   ├── solutions.json             # Existing solution data
│   └── team.json                  # New: Team member data
├── _includes/
│   ├── base.njk                   # Already created
│   ├── header.njk                 # Already created
│   └── footer.njk                 # Already created
└── assets/                         # SVG icons and images
```

---

## Testing Checklist

### Visual Parity
- [ ] All pages match React version pixel-perfect
- [ ] Responsive behavior matches on all breakpoints
- [ ] Hover states work correctly
- [ ] Animations are smooth

### Functionality
- [ ] Solutions tabs work with URL params
- [ ] Question cards show hover text (desktop) and click (mobile)
- [ ] Team cards flip on hover (desktop) and click (mobile)
- [ ] Contact form validates correctly
- [ ] Contact form submits successfully
- [ ] htmx navigation works without page reload

### SEO
- [ ] All meta tags present and correct
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Canonical URLs correct
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] No duplicate H1s

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] ARIA labels present
- [ ] Color contrast passes WCAG AA
- [ ] Form labels associated correctly

---

## Implementation Order

1. **Products Page** (simplest)
   - Create `src/products.njk`
   - Use existing `products.json`
   - Test navigation to detail pages

2. **Team Page** (medium complexity)
   - Create `src/team.njk`
   - Create `src/_data/team.json`
   - Implement 3D flip cards with Alpine.js

3. **Solutions Page** (complex)
   - Create `src/solutions.njk`
   - Use existing `solutions.json`
   - Implement tabs with URL state
   - Implement question card interactions

4. **Contact Page** (form handling)
   - Create `src/contact.njk`
   - Implement Alpine.js validation
   - Set up form submission endpoint (or mailto fallback)
   - Add success/error messaging

---

## Notes

- All pages use the same color palette: #0B3041 (dark), #5A9BA6 (teal), #7097AA (light teal), #156082 (hover)
- Font family: Zilla Slab (already loaded in base.njk)
- All custom CSS classes are already defined in `src/index.css`
- Icons should be copied from `src/assets/` to `_site/assets/` via 11ty passthrough (already configured)
- For forms without backend, use `formspree.io` or similar service as fallback
