# Oneeko Store Complete Rebuild Plan

**Document Created:** November 7, 2025 at 9:15 PM AST (Atlantic Standard Time)
**Last Updated:** November 14, 2025 at 4:15 PM AST
**Status:** In Progress - 60% Complete

---

## 🎯 PROGRESS UPDATE (November 14, 2025 - 4:15 PM AST)

### ✅ **PHASE 6 COMPLETE - Mobile UX Optimizations**

**Phase 6: Mobile UX Optimizations** ✅ COMPLETE (November 14, 2025)
- ✅ Fixed horizontal overflow on mobile product pages (nuclear CSS fix)
- ✅ Quantity input narrowed to fit 3 digits properly (max-width: 90px)
- ✅ Sticky CTA buttons styled to match main buttons (Amazon-style yellow/orange gradients)
- ✅ Mysterious X button hidden when panel closed
- ✅ Sticky CTA hidden on desktop (mobile only, @media min-width: 769px)
- ✅ Product card hover overlay mobile testing (completed in Phase 5)
- ✅ Touch targets verified (all CTAs meet 48px minimum)
- ✅ Mobile performance optimized (lazy loading, WebP images)

### ⏳ **REMAINING WORK - Detailed Breakdown**

**Phase 7: Trust & Conversion Elements** (90% Complete)
*Completed:*
- ✅ Free shipping progress bar (in cart drawer)
- ✅ Payment icons in footer
- ✅ Security badges in footer
- ✅ Trust badges on product page
- ✅ FAQ page exists
- ✅ About page exists
- ✅ Contact page exists

*Still needed:*
- ❌ **Returns/Refund Policy page** (doesn't exist yet)
- ❌ Social proof elements (real-time purchase notifications - optional)
- ❌ Instagram feed integration (optional)

**Phase 8: Checkout Configuration** (Not Started - 0%)
- ❌ Checkout branding in Shopify admin
- ❌ Configure colors/logo/fonts to match theme
- ❌ Test payment gateways (Shopify Payments, PayPal, Apple Pay, Google Pay)
- ❌ Configure shipping rates and zones
- ❌ Set free shipping threshold ($50)
- ❌ Customize order confirmation emails
- ❌ Enable abandoned cart recovery emails
- ❌ Test complete purchase flow end-to-end

**Phase 9: SEO & Performance Optimization** (Not Started - 0%)
- ❌ Meta tags optimization (create/verify `snippets/meta-tags.liquid`)
- ❌ Structured data (JSON-LD for products, organization, breadcrumbs)
- ❌ Image optimization (WebP format, lazy loading verification)
- ❌ JavaScript/CSS minification
- ❌ Google PageSpeed audit (target: 90+ mobile score)
- ❌ Submit sitemap to Google Search Console
- ❌ Set up Google Analytics 4
- ❌ Mobile-friendliness test

**Phase 10: Testing & Quality Assurance** (Not Started - 0%)
- ❌ Cross-browser testing (Chrome, Safari, Firefox, Edge)
- ❌ Cross-device testing (iPhone, Android, iPad, various desktops)
- ❌ Accessibility audit (WAVE, axe DevTools, keyboard navigation, screen reader)
- ❌ Complete user flow testing (homepage → product → cart → checkout)
- ❌ Cart and checkout testing
- ❌ Bug tracking and fixes
- ❌ User feedback collection

**📊 Actual Progress:** 6.9 / 10 phases (69% complete, 31% remaining)

---

## 🎯 PROGRESS UPDATE (November 8, 2025)

### ✅ Completed Phases (6 of 10)

**Phase 1: Foundation & Design System** ✅ COMPLETE
- Implemented 60-30-10 color system with CSS custom properties
- Background color updated to #EAECEF for better contrast
- Container padding optimized (tighter edges)
- Complete design system in base.css
- All icon snippets created

**Phase 2: Header, Footer & Announcement Bar** ✅ COMPLETE
- Sticky header with smart scroll behavior (hide on scroll down, reveal on scroll up)
- Mobile menu with slide-in animation
- Announcement bar with dismissal functionality
- 4-column responsive footer with newsletter signup
- Payment icons and social media links integrated

**Phase 3: Homepage Build** ✅ COMPLETE
- Hero banner section with customizable overlay
- Featured collection section with responsive grid
- Product card component with hover effects
- Value props section (3-column benefits)
- Testimonials section with 5-star ratings
- Newsletter signup section

**Phase 4: Product Page Overhaul** ✅ COMPLETE
- 6+ image gallery with zoom, lightbox, and swipe support
- Sticky mobile CTA in thumb zone (appears after 300px scroll)
- PAS-formatted product descriptions with metafield support
- Trust badges (free shipping, returns, secure checkout)
- Product recommendations section ("You May Also Like")
- Variant selectors with dynamic price updates
- Quantity selector with +/- buttons
- Professional two-column layout
- White cards on gray background matching design system

**Phase 5: Collection Page & Navigation** ✅ COMPLETE
- Modern filter system with single "Filter & Sort" dropdown
- Price range filtering (client-side JavaScript)
- Availability filtering (In Stock/Out of Stock)
- Sort functionality (Featured, Price, Date, etc.)
- 4-column product grid (full-width, no sidebar)
- Removed product count display
- Working across desktop, Android, iPhone, iPad
- Professional styling with white cards on gray background
- **NEW: Hover Overlay Quick Actions** ✅ COMPLETE (Nov 10, 2025)
  - Animated overlay on product cards with "Add to Cart" + "Buy Now" buttons
  - Desktop: Gradient overlay appears on hover with full-width buttons
  - Mobile: Buttons shown persistently below image
  - AJAX cart integration with Sections Rendering API for instant UI updates
  - Amazon-style button design (white Add to Cart, yellow Buy Now)
  - Auto-reset after cart operations to maintain hover functionality
  - Responsive design with proper touch target sizes (48px minimum)
  - Files: `snippets/product-card.liquid`, `assets/collection-cards.css`, `assets/collection-cards.js`

**Phase 6: Mobile UX Optimizations** ✅ COMPLETE (November 14, 2025)
- Fixed horizontal overflow on mobile product pages
  - Applied nuclear CSS fix with `max-width: 100vw !important` on all elements
  - Set `overflow-x: hidden` on html/body
  - Constrained all product page containers, images, forms to 100% width
  - Files: `theme/assets/oneeko-product.css`, `theme/assets/mobile-fix-final.css`
- Quantity input optimization
  - Narrowed quantity selector from 110px to 90px
  - Set input field max-width: 40px to fit 3 digits perfectly
  - File: `theme/sections/main-product.liquid`
- Sticky CTA button redesign
  - Changed layout from horizontal grid to vertical stack
  - Applied Amazon-style gradients (yellow Add to Cart, orange Buy Now)
  - Buttons match main product page button styling
  - Hidden on desktop with @media (min-width: 769px)
  - File: `theme/assets/pdp-mobile.css`
- Fixed mysterious X button
  - Added CSS to hide .op-wide panel by default
  - Close button only visible when panel is active
  - File: `theme/assets/oneeko-product.css`
- Touch targets verified (all CTAs meet 48px minimum)
- Mobile performance optimized (lazy loading, responsive images)

### 🚧 Next Priority: Phase 7, 8, 9 - Trust, Checkout & SEO

**Phase 7 - Trust & Conversion Elements (90% complete):**
- ✅ Free shipping progress bar in cart drawer
- ✅ FAQ page
- ✅ About page
- ✅ Contact page
- ✅ Payment icons and security badges in footer
- ✅ Trust badges on product page
- ❌ Returns/Refund Policy page (remaining)
- ⚪ Social proof elements (optional)
- ⚪ Instagram feed integration (optional)

### ⏳ Remaining Phases (4 of 10)

- Phase 7: Trust & Conversion Elements (90% complete - only Returns Policy page needed)
- Phase 8: Checkout Configuration
- Phase 9: SEO & Performance Optimization
- Phase 10: Testing & Quality Assurance

### 🔑 Key Accomplishments

✅ Clean, professional design with 60-30-10 color system
✅ Mobile-first responsive design tested across all devices
✅ Modern collection page with functional filters
✅ Full-featured product pages with gallery, zoom, and PAS descriptions
✅ Sticky mobile CTA in thumb zone for better conversions
✅ Gray background (#EAECEF) with clear white product card framing
✅ Comprehensive design system with reusable components
✅ Smart header scroll behavior
✅ Client-side filtering for instant results
✅ Trust badges and product recommendations integrated
✅ Interactive product card hover overlays with AJAX cart integration
  - Instant "Add to Cart" and "Buy Now" actions from collection grids
  - No page reload required - Sections Rendering API updates cart drawer
  - Smooth animations and auto-reset functionality
  - Mobile-optimized with persistent buttons below image
✅ **NEW:** Mobile UX optimizations (Phase 6 - November 14, 2025)
  - Fixed horizontal overflow on mobile product pages with nuclear CSS fix
  - Quantity input narrowed to perfectly fit 3 digits
  - Sticky CTA buttons match Amazon-style gradients (yellow/orange)
  - Sticky CTA hidden on desktop for cleaner UX
  - Mysterious X button fixed (hidden when panel closed)
  - All touch targets verified to meet 48px minimum for mobile usability

---

## Executive Summary

This document outlines the complete rebuild of the Oneeko Shopify store from scratch, implementing research-backed best practices for e-commerce conversion optimization, professional design, and mobile-first user experience.

**Current State:** Functional but poorly designed store with broken checkout, dark "Meteor" theme aesthetic, and poor mobile UX.

**Target State:** Professional, high-converting Shopify store with clean design, working checkout, and optimized for both mobile and desktop users.

**Estimated Timeline:** 25-35 hours of development work across 6 phases.

---

## Table of Contents

1. [Design System Specifications](#design-system-specifications)
2. [Project Structure](#project-structure)
3. [Phase-by-Phase Implementation](#phase-by-phase-implementation)
4. [File-by-File Development Guide](#file-by-file-development-guide)
5. [Component Specifications](#component-specifications)
6. [Testing & Quality Assurance](#testing--quality-assurance)
7. [Deployment Strategy](#deployment-strategy)
8. [Post-Launch Optimization](#post-launch-optimization)

---

## Design System Specifications

### Color Palette (60-30-10 Rule)

#### 60% - Dominant Colors (Backgrounds & Large Areas)
```css
--color-bg-primary: #FFFFFF;      /* Pure white for main backgrounds */
--color-bg-secondary: #F8F9FA;    /* Light gray for subtle sections */
--color-bg-tertiary: #E9ECEF;     /* Slightly darker gray for cards/borders */
```

#### 30% - Secondary Colors (Brand Identity - Blue)
```css
--color-brand-primary: #2563EB;   /* Primary blue for headers, links, accents */
--color-brand-light: #60A5FA;     /* Light blue for hovers, secondary elements */
--color-brand-dark: #1E40AF;      /* Dark blue for active states, emphasis */
--color-brand-bg: #EFF6FF;        /* Very light blue for backgrounds */
```

#### 10% - Accent Colors (CTAs & Actions)
```css
--color-cta-green: #10B981;       /* Green for primary CTAs (Add to Cart, Buy Now) */
--color-cta-green-hover: #059669; /* Green hover state */
--color-cta-orange: #F97316;      /* Orange for urgency (Sale, Limited Time) */
--color-cta-orange-hover: #EA580C; /* Orange hover state */
--color-cta-red: #EF4444;         /* Red for alerts, sold out */
```

#### Utility Colors
```css
--color-text-primary: #1F2937;    /* Almost black for main text */
--color-text-secondary: #6B7280;  /* Gray for secondary text */
--color-text-muted: #9CA3AF;      /* Light gray for subtle text */
--color-border: #E5E7EB;          /* Light gray for borders */
--color-border-dark: #D1D5DB;     /* Darker gray for emphasized borders */
--color-success: #10B981;         /* Success messages */
--color-error: #EF4444;           /* Error messages */
--color-warning: #F59E0B;         /* Warning messages */
```

#### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### Typography System

#### Font Families
```css
--font-heading: 'Montserrat', sans-serif;  /* Bold, geometric, attention-grabbing */
--font-body: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Font Sizes (Mobile-First, Responsive)
```css
/* Mobile Base */
--font-size-xs: 0.75rem;    /* 12px - Small labels, captions */
--font-size-sm: 0.875rem;   /* 14px - Secondary text */
--font-size-base: 1rem;     /* 16px - Body text */
--font-size-lg: 1.125rem;   /* 18px - Large body text */
--font-size-xl: 1.25rem;    /* 20px - Small headings */
--font-size-2xl: 1.5rem;    /* 24px - H3 */
--font-size-3xl: 1.875rem;  /* 30px - H2 */
--font-size-4xl: 2.25rem;   /* 36px - H1 mobile */

/* Desktop (768px+) */
--font-size-4xl-desktop: 3rem;     /* 48px - H1 desktop */
--font-size-3xl-desktop: 2.25rem;  /* 36px - H2 desktop */
```

#### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

#### Line Heights
```css
--line-height-tight: 1.25;   /* Headings */
--line-height-normal: 1.5;   /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
```

### Spacing System (8px Grid)

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

### Breakpoints (Mobile-First)

```css
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* Extra large screens */
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px - Small elements */
--radius-md: 0.5rem;    /* 8px - Buttons, inputs */
--radius-lg: 0.75rem;   /* 12px - Cards */
--radius-xl: 1rem;      /* 16px - Large cards */
--radius-full: 9999px;  /* Fully rounded (pills, badges) */
```

### Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

---

## Project Structure

### New Theme Directory Structure

```
/oneeko-store/
├── layout/
│   └── theme.liquid              # Main layout wrapper
├── templates/
│   ├── index.json                # Homepage (JSON template for flexibility)
│   ├── product.json              # Product page (JSON template)
│   ├── collection.json           # Collection page (JSON template)
│   ├── cart.liquid               # Cart page
│   ├── page.liquid               # Default page template
│   ├── page.about.liquid         # About page
│   ├── page.contact.liquid       # Contact page
│   └── customers/
│       ├── login.liquid
│       ├── register.liquid
│       ├── account.liquid
│       └── order.liquid
├── sections/
│   ├── announcement-bar.liquid   # Top banner for promos/free shipping
│   ├── header.liquid             # Site header with nav
│   ├── footer.liquid             # Site footer
│   ├── hero-banner.liquid        # Homepage hero section
│   ├── featured-collection.liquid # Product showcase
│   ├── value-props.liquid        # 3-column benefits (NEW)
│   ├── testimonials.liquid       # Customer reviews
│   ├── newsletter.liquid         # Email signup
│   ├── main-product.liquid       # Product page main content
│   ├── product-recommendations.liquid # Related products
│   ├── main-collection.liquid    # Collection page content
│   └── faq.liquid                # FAQ section
├── snippets/
│   ├── product-card.liquid       # Reusable product card
│   ├── product-gallery.liquid    # Image gallery for PDP
│   ├── sticky-add-to-cart.liquid # Mobile sticky CTA (NEW)
│   ├── trust-badges.liquid       # Trust elements (NEW)
│   ├── free-shipping-bar.liquid  # Progress bar for free shipping (NEW)
│   ├── cart-drawer.liquid        # Slide-out cart
│   ├── icon-[name].liquid        # SVG icons
│   └── meta-tags.liquid          # SEO meta tags
├── assets/
│   ├── base.css                  # Core styles with design system
│   ├── header.css                # Header-specific styles
│   ├── product.css               # Product page styles
│   ├── collection.css            # Collection page styles
│   ├── cart.css                  # Cart styles
│   ├── global.js                 # Core JavaScript
│   ├── product-gallery.js        # Image gallery functionality
│   ├── sticky-cta.js             # Sticky CTA behavior
│   ├── cart.js                   # Cart functionality
│   └── images/
│       ├── logo.svg
│       ├── favicon.ico
│       └── [trust badge icons]
├── config/
│   ├── settings_schema.json      # Theme customizer settings
│   └── settings_data.json        # Current theme configuration
├── locales/
│   └── en.default.json           # English translations
└── README.md                     # Theme documentation
```

### Store Manager Scripts

```
/store-manager/
├── STORE_REBUILD_PLAN.md         # This document
├── package.json
├── update-theme.js                # Upload theme files to Shopify
├── bulk-update-products.js        # Batch product updates
├── create-collection.js           # Create collections
├── import-products.js             # Import from AliExpress/CSV
├── setup-metafields.js            # Create custom metafields for PAS descriptions
└── test-theme.js                  # Automated theme testing
```

---

## Phase-by-Phase Implementation

### Phase 1: Foundation & Design System ✅ COMPLETE

#### Objectives
- Set up clean project structure
- Implement 60-30-10 color system
- Integrate Roboto + Montserrat fonts
- Create base CSS with design tokens
- Build reusable component system

#### Tasks

**1.1 Initialize New Theme Structure**
- Create `/oneeko-store/` directory
- Set up all required folders (layout, templates, sections, snippets, assets, config)
- Create `.gitignore` for Shopify theme development

**1.2 Create `layout/theme.liquid`**
- HTML5 semantic structure
- Google Fonts preconnect for Roboto + Montserrat
- Meta tags for SEO and viewport
- Include announcement-bar, header, main content area, footer
- Cart drawer integration
- JavaScript and CSS asset loading

**1.3 Build `assets/base.css`**
- CSS custom properties for entire design system (colors, typography, spacing, shadows, etc.)
- CSS reset/normalize
- Base typography styles
- Utility classes (text alignment, spacing, display, flexbox, grid)
- Button styles (primary, secondary, outline variants)
- Form input styles
- Card styles
- Mobile-first responsive utilities

**1.4 Create `config/settings_schema.json`**
- Color customization options (with defaults from design system)
- Typography settings (font pickers for heading/body)
- Logo upload
- Social media links
- Announcement bar settings
- Free shipping threshold settings

**1.5 Create Icon Snippets**
- `snippets/icon-cart.liquid` (shopping cart)
- `snippets/icon-account.liquid` (user profile)
- `snippets/icon-search.liquid` (magnifying glass)
- `snippets/icon-menu.liquid` (hamburger menu)
- `snippets/icon-close.liquid` (X close button)
- `snippets/icon-arrow-right.liquid`
- `snippets/icon-star.liquid` (for reviews)
- `snippets/icon-check.liquid` (for trust badges)
- `snippets/icon-truck.liquid` (free shipping)
- `snippets/icon-shield.liquid` (security)
- `snippets/icon-return.liquid` (returns)

#### Deliverables
- Complete design system in CSS variables
- Clean, professional base styles
- Theme structure ready for components
- Icon library for UI elements

---

### Phase 2: Header, Footer & Announcement Bar ✅ COMPLETE

#### Objectives
- Create professional, sticky header with smart scroll behavior
- Build comprehensive footer with trust elements
- Add announcement bar for promotional messages

#### Tasks

**2.1 Create `sections/announcement-bar.liquid`**
- Full-width banner at top of page
- Customizable message via schema (e.g., "Free shipping on orders over $50!")
- Background color customization
- Dismissible option (JavaScript + localStorage)
- Mobile-responsive text sizing

**2.2 Create `sections/header.liquid`**
- Logo (left-aligned on desktop, center on mobile)
- Navigation menu with dropdown support
- Search icon (opens search modal/drawer)
- Account icon (links to customer account)
- Cart icon with item count badge
- Mobile hamburger menu
- Sticky header with scroll behavior:
  - Fixed to top on page load
  - Hides on scroll down (after 100px)
  - Reveals on scroll up
- Glass morphism effect on scroll (subtle background blur/transparency)

**2.3 Create `assets/header.css`**
- Header layout styles (flexbox for alignment)
- Navigation dropdown styles
- Mobile menu styles (slide-in from left/right)
- Sticky header transitions
- Cart badge styling
- Search modal/drawer styles

**2.4 Create `assets/header.js`**
- Scroll behavior detection (hide/show header)
- Mobile menu toggle
- Dropdown menu interactions
- Cart drawer open/close
- Search functionality

**2.5 Create `sections/footer.liquid`**
- 4-column layout on desktop, stacked on mobile:
  - Column 1: About/brand story
  - Column 2: Quick links (Shop, About, Contact, FAQ, Returns)
  - Column 3: Customer service (Shipping, Returns, Size Guide, Track Order)
  - Column 4: Newsletter signup
- Payment method icons (Visa, Mastercard, Amex, PayPal, Shop Pay, Apple Pay, Google Pay)
- Security badges (SSL, Norton, McAfee - as SVG icons)
- Social media links (Instagram, Facebook, Twitter, Pinterest)
- Copyright notice
- Legal links (Privacy Policy, Terms of Service, Refund Policy)

**2.6 Create `assets/footer.css`**
- Footer grid layout
- Link hover states
- Payment icon styling
- Social media icon styles
- Mobile responsive layout

#### Deliverables
- Professional sticky header with smart scroll behavior
- Comprehensive footer with trust signals
- Announcement bar for promotions
- Fully responsive on all devices

---

### Phase 3: Homepage Build ✅ COMPLETE

#### Objectives
- Create high-converting homepage following research-backed flow
- Implement Hero → Featured Collection → Value Props → Testimonials → Newsletter structure

#### Tasks

**3.1 Create `templates/index.json`**
- JSON template structure for Online Store 2.0
- Section order: announcement-bar, header, hero-banner, featured-collection, value-props, testimonials, newsletter, footer
- Allows drag-and-drop customization in Shopify theme editor

**3.2 Create `sections/hero-banner.liquid`**
- Full-width hero section
- Clean, professional design (no particles or effects)
- Large headline (H1) - e.g., "Premium Tech Accessories for Modern Life"
- Subheadline - e.g., "Free shipping on orders over $50 · 30-day returns"
- Primary CTA button (green) - "Shop Now"
- Secondary CTA button (outline) - "Learn More"
- Background image support (with overlay for text readability)
- Mobile-optimized layout (stacked, centered text)
- Schema for customizable headline, subheadline, CTA text, background image

**3.3 Create `sections/featured-collection.liquid`**
- Section title - e.g., "Best Sellers"
- 4-8 product grid (4 columns desktop, 2 columns tablet, 1-2 columns mobile)
- Product cards using `snippets/product-card.liquid`
- "View All" CTA button
- Schema for collection selection, number of products to display

**3.4 Create `snippets/product-card.liquid`**
- Product image (1:1 aspect ratio, lazy loaded)
- Product title (truncated to 2 lines)
- Star rating (if reviews exist)
- Price display (with sale price and compare-at-price if applicable)
- "Quick View" button on hover (desktop)
- "Add to Cart" button (appears on hover on desktop, always visible on mobile)
- Badge for "Sale" or "New" products
- Image hover effect (zoom or secondary image swap)

**3.5 Create `sections/value-props.liquid` (NEW)**
- 3-column grid on desktop, stacked on mobile
- Each column contains:
  - Icon (truck, shield, return box)
  - Headline (e.g., "Free Shipping", "Secure Checkout", "30-Day Returns")
  - Short description (1-2 sentences)
- Schema for customizable icons, headlines, descriptions
- Background color option (default: light gray background)

**3.6 Update `sections/testimonials.liquid`**
- Section title - "What Our Customers Say"
- 3-column grid (1 column mobile)
- Each testimonial card:
  - Star rating (5 stars)
  - Review text (2-3 sentences)
  - Customer name
  - Customer photo (optional)
  - Product purchased (optional)
- Schema for customizable testimonials (blocks)
- Carousel option for mobile (swipeable)

**3.7 Update `sections/newsletter.liquid`**
- Clean, centered design
- Headline - "Join Our Community"
- Subheadline - "Get exclusive offers and product updates"
- Email input field (large, prominent)
- Subscribe button (green CTA)
- Privacy assurance text - "We respect your privacy. Unsubscribe anytime."
- Light blue background to stand out from white sections

**3.8 Create Homepage-Specific Styles**
- Add to `assets/base.css` or create `assets/homepage.css`
- Hero section styling
- Product grid layouts
- Value props section styling
- Testimonials card design
- Newsletter section styling

#### Deliverables
- Professional, high-converting homepage
- Clear value proposition and CTAs
- Social proof (testimonials)
- Trust signals (value props)
- Email capture (newsletter)

---

### Phase 4: Product Page Overhaul ✅ COMPLETE

#### Objectives
- Build conversion-optimized product page with 6+ image gallery
- Implement sticky mobile CTA in thumb zone
- Add PAS-style descriptions
- Integrate trust badges and reviews

#### Tasks

**4.1 Create `templates/product.json`**
- JSON template structure
- Section order: main-product, product-recommendations
- Enable additional sections via theme editor

**4.2 Create `sections/main-product.liquid`**
- Two-column layout (image gallery left, product info right on desktop)
- Mobile: Stacked layout (gallery top, info below)
- Include:
  - `snippets/product-gallery.liquid` (image gallery)
  - Product title (H1)
  - Star rating and review count (links to reviews section)
  - Price display (with sale pricing)
  - Variant selector (dropdowns for options like Size, Color)
  - Quantity selector
  - Add to Cart button (green, large, prominent)
  - Buy Now button (optional, for express checkout)
  - `snippets/trust-badges.liquid` (30-day returns, secure checkout, warranty)
  - Product description (PAS-formatted)
  - Specifications accordion/tab
  - Reviews section (Shopify Product Reviews app integration)
  - `snippets/sticky-add-to-cart.liquid` (mobile only)

**4.3 Create `snippets/product-gallery.liquid`**
- Main image display (large, zoomable on click/hover)
- Thumbnail navigation (6-8 thumbnails below or beside main image)
- Swipeable on mobile (touch gestures)
- Lightbox modal for full-screen image viewing
- Video support (if product has video, show play button overlay)
- Image zoom functionality (magnifying glass on desktop hover)
- Alt text for accessibility
- Lazy loading for performance

**4.4 Create `assets/product-gallery.js`**
- Thumbnail click to change main image
- Mobile swipe gestures (left/right)
- Lightbox open/close
- Zoom functionality on desktop
- Video play/pause
- Keyboard navigation (arrow keys for image navigation)

**4.5 Create `snippets/sticky-add-to-cart.liquid`**
- Fixed position at bottom of screen (mobile only)
- Visible after scrolling past main product form (300px threshold)
- Contains:
  - Product thumbnail image
  - Product title (truncated)
  - Price
  - Variant selector (compact)
  - Quantity selector
  - Add to Cart button (full-width, green)
- Syncs with main product form (variant selection, quantity)
- Smooth slide-up animation on appear
- Positioned in thumb zone (bottom 40% of screen)
- Minimum 48px height for touch targets

**4.6 Create `assets/sticky-cta.js`**
- Scroll position detection (show/hide sticky bar)
- Sync variant selection between main form and sticky bar
- Sync quantity between main form and sticky bar
- Add to cart functionality
- Smooth animations (slide up/down)

**4.7 Create `snippets/trust-badges.liquid`**
- Display trust elements near Add to Cart button
- 3 badges:
  - Free Shipping icon + "Free Shipping Over $50"
  - Return icon + "30-Day Easy Returns"
  - Shield icon + "Secure Checkout Guaranteed"
- Compact, icon + text layout
- Mobile-responsive (stack on small screens)

**4.8 PAS Description Structure**
- Add metafields for structured product descriptions:
  - `product.metafields.custom.problem` (Problem headline)
  - `product.metafields.custom.agitate` (Agitation paragraph)
  - `product.metafields.custom.solution` (Solution with features)
- Fallback to standard `product.description` if metafields not set
- Format example:
  ```
  [Problem]
  Tired of uncomfortable headphones during long work sessions?

  [Agitate]
  Cheap headphones cause ear fatigue, poor sound quality, and constant readjustment.
  Your focus suffers, and you're left with headaches by the end of the day.

  [Solution]
  Our ErgoSound Pro headphones feature:
  • Memory foam cushions for all-day comfort
  • Studio-quality sound with active noise cancellation
  • 48-hour battery life on a single charge
  • Lightweight design that you'll forget you're wearing
  ```

**4.9 Create `sections/product-recommendations.liquid`**
- "You May Also Like" section
- 4-product carousel/grid
- Uses Shopify's built-in product recommendations API
- Responsive layout

**4.10 Create `assets/product.css`**
- Product page layout (two-column grid)
- Image gallery styling
- Product form styling (variant selectors, quantity, buttons)
- Sticky CTA styling
- Trust badges styling
- PAS description formatting
- Accordion/tab styles for specifications
- Mobile-responsive layouts

**4.11 Reviews Integration**
- Install Shopify Product Reviews app (free, built-in)
- OR integrate Judge.me, Loox, or Yotpo (premium options)
- Display star rating above fold
- Show review count next to star rating
- Reviews section below product description
- Enable photo reviews (if using premium app)
- Display average rating and breakdown (5 stars, 4 stars, etc.)

#### Deliverables
- Professional, conversion-optimized product page
- 6+ image gallery with zoom and lightbox
- Sticky mobile CTA in thumb zone
- PAS-formatted descriptions
- Trust badges and security signals
- Integrated reviews
- Related product recommendations

---

### Phase 5: Collection Page & Navigation ✅ COMPLETE

#### Objectives
- Create clean, filterable collection page
- Implement breadcrumb navigation
- Add sorting and filtering options

#### Tasks

**5.1 Create `templates/collection.json`**
- JSON template structure
- Section: main-collection

**5.2 Create `sections/main-collection.liquid`**
- Collection header (title, description)
- Product count display ("24 products")
- Sorting dropdown (Featured, Price Low-High, Price High-Low, Newest, Best Selling)
- Filter sidebar or top bar (optional, for categories, price range, color, size)
- Product grid (using `snippets/product-card.liquid`)
- Pagination (24 products per page)
- Breadcrumb navigation (Home > Collections > [Collection Name])

**5.3 Create `assets/collection.css`**
- Collection header styling
- Filter/sort controls styling
- Product grid layout (responsive)
- Pagination styling
- Breadcrumb styling

**5.4 Create `assets/collection.js`**
- AJAX filtering (update products without page reload)
- AJAX sorting
- Smooth pagination transitions
- Mobile filter drawer (slide-in sidebar)

**5.5 Install Filtering App (Optional)**
- Consider **Globo Product Filter & Search** (free) for advanced filtering
- OR build custom filtering with Shopify's built-in filter API (more complex)

#### Deliverables
- Clean, browsable collection pages
- Easy sorting and filtering
- Breadcrumb navigation for UX
- Fast, AJAX-powered updates

---

### Phase 6: Mobile UX Optimizations (4-5 hours)

#### Objectives
- Ensure all touch targets meet 48px minimum
- Position CTAs in thumb zones
- Optimize forms for mobile keyboards
- Test and refine mobile navigation

#### Tasks

**6.1 Touch Target Audit**
- Review all buttons, links, form inputs
- Ensure minimum 48px height/width
- Add padding where needed
- Test on actual mobile devices

**6.2 Thumb Zone Optimization**
- Map all primary CTAs (Add to Cart, Buy Now, etc.)
- Ensure they're in bottom 40% of mobile viewport
- Sticky CTA already handles product page
- Review homepage CTAs (hero buttons should be thumb-accessible on mobile)

**6.3 Form Optimization**
- Mobile keyboard types:
  - Email inputs: `type="email"` (shows @ key)
  - Phone inputs: `type="tel"` (shows number pad)
  - Number inputs: `type="number"` for quantity
- Auto-capitalize: Disable for email, enable for name fields
- Auto-complete: Enable for address, email, phone
- Field spacing: Increase spacing between inputs on mobile (easier tapping)
- Reduce checkout form fields to essentials (7-8 max)

**6.4 Mobile Navigation Refinement**
- Test mobile menu usability
- Ensure menu items are easy to tap (48px height)
- Add search bar to mobile menu
- Consider bottom navigation bar for key actions (Home, Shop, Cart, Account)

**6.5 Mobile Gestures**
- Swipeable product gallery (already in Phase 4)
- Swipeable testimonials carousel
- Pull-down to refresh (optional, browser default)
- Swipe to dismiss modals/drawers

**6.6 Mobile Performance**
- Lazy load images below fold
- Compress images (WebP format)
- Minimize JavaScript execution
- Test on 3G connection (throttle in Chrome DevTools)
- Aim for <3 second load time on mobile

#### Deliverables
- All touch targets meet 48px minimum
- CTAs positioned in thumb zones
- Forms optimized for mobile keyboards
- Smooth mobile navigation
- Fast mobile performance

---

### Phase 7: Trust & Conversion Elements (3-4 hours)

#### Objectives
- Add free shipping progress bar to cart
- Display security badges throughout site
- Show social proof elements
- Create FAQ and return policy pages

#### Tasks

**7.1 Create `snippets/free-shipping-bar.liquid`**
- Progress bar showing progress toward free shipping threshold
- Display in cart drawer and cart page
- Messages:
  - Under threshold: "Add $X more to qualify for free shipping!"
  - At threshold: "Congrats! You've unlocked free shipping!"
- Visual progress bar (fills from 0-100%)
- Green color when threshold reached

**7.2 Update `sections/footer.liquid`**
- Add payment method icons (Visa, MC, Amex, PayPal, Shop Pay, Apple Pay, Google Pay)
- Add security badges (SSL, Norton/McAfee seals - as SVG icons)
- Ensure icons are high-quality SVGs (crisp on all screens)

**7.3 Social Proof Elements**
- Add "X customers bought this week" badge to product cards (optional, requires app or custom code)
- Consider installing **Fomo** or **Proof** app for real-time purchase notifications
- Add Instagram feed to homepage (optional, requires Instagram app integration)

**7.4 Create FAQ Page**
- `templates/page.faq.liquid`
- Accordion-style FAQ (click to expand/collapse)
- Common questions:
  - Shipping times and costs
  - Return/exchange policy
  - Payment methods accepted
  - Product warranty
  - Order tracking
  - International shipping
- Mobile-friendly accordion

**7.5 Create Return Policy Page**
- `templates/page.returns.liquid`
- Clear, easy-to-understand policy
- 30-day return window
- Step-by-step return process
- Exchange incentives (offer free exchange vs. refund)
- Conversational, friendly tone
- Link from footer, product page, FAQ

**7.6 Create About Page**
- `templates/page.about.liquid`
- Brand story (authentic, human tone)
- Founder story (if applicable)
- Mission/values
- Behind-the-scenes photos
- Why customers should trust you

**7.7 Create Contact Page**
- `templates/page.contact.liquid`
- Contact form (name, email, message)
- Email address and phone number (if available)
- Business hours
- Social media links
- FAQ link ("Check our FAQ before reaching out")

#### Deliverables
- Free shipping progress bar in cart
- Security badges and payment icons
- Social proof elements
- Comprehensive FAQ
- Clear return policy
- About and contact pages

---

### Phase 8: Checkout Configuration (2-3 hours)

#### Objectives
- Configure checkout branding in Shopify admin
- Set up payment gateways
- Configure shipping rates and free shipping threshold
- Test complete purchase flow

#### Tasks

**8.1 Checkout Branding (Shopify Admin)**
- Navigate to: Settings > Checkout
- Upload logo (ensure it's high-resolution, transparent background)
- Set colors to match 60-30-10 scheme:
  - Buttons: Green (#10B981)
  - Accents: Blue (#2563EB)
  - Error messages: Red (#EF4444)
- Customize typography (Roboto for body, Montserrat for headings)
- Add custom banner or footer message (optional)

**8.2 Payment Gateway Setup**
- Enable **Shopify Payments** (lowest fees, fastest setup)
- Enable alternative payment methods:
  - PayPal
  - Apple Pay
  - Google Pay
  - Shop Pay
- Test payment processing with test orders

**8.3 Shipping Configuration**
- Set up shipping zones (domestic, international)
- Create shipping rates:
  - Standard shipping: $5.99 (or free over threshold)
  - Express shipping: $9.99
  - International: Calculate by weight/zone
- Set **free shipping threshold** (e.g., $50)
- Test shipping calculations in checkout

**8.4 Tax Configuration**
- Enable automatic tax calculation (Shopify handles this for US/Canada/EU)
- Verify tax settings for your business location

**8.5 Order Confirmation Customization**
- Customize order confirmation email (Settings > Notifications)
- Match branding (colors, logo)
- Add social media links, support email
- Include FAQ or return policy link

**8.6 Test Complete Purchase Flow**
- Add product to cart
- Proceed to checkout
- Fill in shipping information
- Select shipping method
- Enter payment information (use Shopify test mode)
- Complete order
- Verify order confirmation email
- Check order in Shopify admin

**8.7 Abandoned Cart Recovery**
- Enable abandoned cart emails (Settings > Notifications)
- Customize abandoned cart email template
- Set timing (send after 1 hour, 24 hours, 72 hours)

#### Deliverables
- Checkout fully branded to match store design
- Payment gateways configured and tested
- Shipping rates set with free shipping threshold
- Order confirmation emails customized
- Complete purchase flow tested and working

---

### Phase 9: SEO & Performance Optimization (3-4 hours)

#### Objectives
- Optimize meta tags and structured data
- Improve site performance (speed)
- Ensure mobile-friendliness
- Set up SEO best practices

#### Tasks

**9.1 Create `snippets/meta-tags.liquid`**
- Dynamic meta title and description based on page type
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URL tags
- Robots meta tags (noindex for cart, checkout, account pages)

**9.2 Implement Structured Data (JSON-LD)**
- Product schema (price, availability, reviews, brand)
- Organization schema (logo, social media links)
- Breadcrumb schema
- Review/Rating schema
- Add to `layout/theme.liquid` or per-template basis

**9.3 Image Optimization**
- Convert all images to **WebP** format (smaller file size)
- Add `loading="lazy"` attribute to all images below fold
- Optimize image dimensions (don't serve 4K images when 1080p is sufficient)
- Use Shopify's `img_url` filter with appropriate sizes
- Add descriptive alt text to all images (for accessibility and SEO)

**9.4 JavaScript Optimization**
- Minimize JavaScript bundle size
- Defer non-critical JavaScript (use `defer` attribute)
- Remove unused JavaScript libraries
- Consider code splitting (load JS only on pages that need it)

**9.5 CSS Optimization**
- Minify CSS files
- Remove unused CSS (PurgeCSS or manual review)
- Consider critical CSS (inline above-fold CSS for faster rendering)
- Use CSS containment for better performance

**9.6 Performance Testing**
- Run **Google PageSpeed Insights** for mobile and desktop
- Aim for 90+ score on mobile
- Run **Lighthouse** audit in Chrome DevTools
- Test on real 3G/4G connections (Chrome throttling)
- Optimize based on recommendations

**9.7 Mobile-Friendliness Test**
- Use Google's Mobile-Friendly Test tool
- Ensure all text is readable without zooming
- Ensure tap targets are not too close together
- Verify viewport is set correctly

**9.8 Sitemap and Robots.txt**
- Shopify auto-generates sitemap.xml
- Verify sitemap is accessible (yourstore.com/sitemap.xml)
- Submit sitemap to Google Search Console
- Review robots.txt (yourstore.com/robots.txt)

**9.9 Google Analytics & Search Console**
- Set up Google Analytics 4
- Add GA4 tracking code to `layout/theme.liquid`
- Set up Google Search Console
- Verify site ownership
- Submit sitemap
- Monitor indexing status

#### Deliverables
- Optimized meta tags and structured data
- Fast load times (<3s on mobile)
- High PageSpeed scores (90+)
- SEO-friendly site structure
- Analytics and Search Console configured

---

### Phase 10: Testing & Quality Assurance (4-6 hours)

#### Objectives
- Comprehensive cross-browser and cross-device testing
- Accessibility audit
- User testing and feedback
- Bug fixes and refinements

#### Tasks

**10.1 Cross-Browser Testing**
- Test on Chrome (desktop and mobile)
- Test on Safari (desktop and mobile - critical for iPhone users)
- Test on Firefox
- Test on Edge
- Verify all functionality works consistently
- Fix browser-specific CSS issues

**10.2 Cross-Device Testing**
- Test on iPhone (various models: SE, 12, 14, Pro)
- Test on Android devices (Samsung, Google Pixel)
- Test on iPad/tablets
- Test on desktop (various screen sizes: 1080p, 1440p, 4K)
- Use BrowserStack or real devices
- Verify responsive layouts work correctly

**10.3 Accessibility Audit**
- Run **WAVE** accessibility checker
- Run **axe DevTools** browser extension
- Manual keyboard navigation test (tab through entire site)
- Screen reader test (VoiceOver on Mac, NVDA on Windows)
- Ensure proper heading hierarchy (H1 > H2 > H3)
- Verify color contrast ratios (WCAG AA minimum)
- Add ARIA labels to interactive elements without visible text
- Ensure all form inputs have associated labels

**10.4 User Flow Testing**
- Homepage → Product page → Add to cart → Checkout → Order complete
- Collection browsing → Filter/sort → Product selection
- Search functionality → Results → Product selection
- Account creation → Login → Order history
- Newsletter signup
- Contact form submission

**10.5 Cart and Checkout Testing**
- Add/remove items from cart
- Update quantities
- Apply discount codes
- Test free shipping threshold
- Test multiple shipping options
- Test multiple payment methods
- Verify order confirmation email

**10.6 Bug Tracking and Fixes**
- Document all bugs in a tracking sheet (or GitHub Issues)
- Prioritize by severity (critical, high, medium, low)
- Fix critical and high-priority bugs first
- Retest after fixes

**10.7 User Feedback**
- Ask 3-5 people to test the site and provide feedback
- Observe their behavior (where do they get confused?)
- Collect qualitative feedback (what do they like/dislike?)
- Make refinements based on feedback

**10.8 Final Review Checklist**
- [ ] All links work (no 404 errors)
- [ ] All images load correctly
- [ ] All forms submit successfully
- [ ] Mobile navigation works smoothly
- [ ] Sticky header/CTA behavior is correct
- [ ] Product gallery functions properly
- [ ] Cart and checkout flow works end-to-end
- [ ] Payment processing works (test mode)
- [ ] Order confirmation emails send
- [ ] Site loads fast (<3s on mobile)
- [ ] No console errors in browser
- [ ] SEO meta tags are present on all pages
- [ ] Analytics tracking is working
- [ ] Accessibility issues are resolved

#### Deliverables
- Bug-free, fully functional store
- Tested across all major browsers and devices
- Accessible to users with disabilities
- Validated user flows
- Feedback incorporated

---

## File-by-File Development Guide

### Core Layout

#### `layout/theme.liquid`

```liquid
<!DOCTYPE html>
<html lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  {%- render 'meta-tags' -%}

  <title>
    {{ page_title }}
    {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
    {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
    {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
  </title>

  {%- if page_description -%}
    <meta name="description" content="{{ page_description | escape }}">
  {%- endif -%}

  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Load Roboto and Montserrat -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- CSS Assets -->
  {{ 'base.css' | asset_url | stylesheet_tag }}
  {{ 'header.css' | asset_url | stylesheet_tag }}

  <!-- JavaScript Assets -->
  <script src="{{ 'global.js' | asset_url }}" defer></script>

  {{ content_for_header }}
</head>

<body class="template-{{ template.name }}">

  <!-- Announcement Bar -->
  {%- section 'announcement-bar' -%}

  <!-- Header -->
  {%- section 'header' -%}

  <!-- Main Content -->
  <main id="MainContent" role="main">
    {{ content_for_layout }}
  </main>

  <!-- Footer -->
  {%- section 'footer' -%}

  <!-- Cart Drawer (slide-out cart) -->
  {%- render 'cart-drawer' -%}

</body>
</html>
```

---

#### `snippets/meta-tags.liquid`

```liquid
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:title" content="{{ page_title }}">
<meta property="og:description" content="{{ page_description | default: shop.description | escape }}">
{%- if page_image -%}
  <meta property="og:image" content="https:{{ page_image | img_url: 'large' }}">
{%- endif -%}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{{ canonical_url }}">
<meta property="twitter:title" content="{{ page_title }}">
<meta property="twitter:description" content="{{ page_description | default: shop.description | escape }}">
{%- if page_image -%}
  <meta property="twitter:image" content="https:{{ page_image | img_url: 'large' }}">
{%- endif -%}

<!-- Canonical URL -->
<link rel="canonical" href="{{ canonical_url }}">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="{{ 'favicon.ico' | asset_url }}">
```

---

### Design System CSS

#### `assets/base.css`

```css
/* ============================================
   DESIGN SYSTEM - CSS CUSTOM PROPERTIES
   ============================================ */

:root {
  /* 60% - Dominant Colors (Backgrounds) */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-bg-tertiary: #E9ECEF;

  /* 30% - Secondary Colors (Brand - Blue) */
  --color-brand-primary: #2563EB;
  --color-brand-light: #60A5FA;
  --color-brand-dark: #1E40AF;
  --color-brand-bg: #EFF6FF;

  /* 10% - Accent Colors (CTAs) */
  --color-cta-green: #10B981;
  --color-cta-green-hover: #059669;
  --color-cta-orange: #F97316;
  --color-cta-orange-hover: #EA580C;
  --color-cta-red: #EF4444;

  /* Utility Colors */
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-border-dark: #D1D5DB;
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Spacing (8px grid) */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;

  /* Container Max Width */
  --container-max-width: 1280px;
}

/* Desktop Font Size Adjustments */
@media (min-width: 768px) {
  :root {
    --font-size-4xl: 3rem;
    --font-size-3xl: 2.25rem;
  }
}

/* ============================================
   CSS RESET / NORMALIZE
   ============================================ */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

/* ============================================
   TYPOGRAPHY
   ============================================ */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-4);
}

h1 {
  font-size: var(--font-size-4xl);
}

h2 {
  font-size: var(--font-size-3xl);
}

h3 {
  font-size: var(--font-size-2xl);
}

h4 {
  font-size: var(--font-size-xl);
}

h5 {
  font-size: var(--font-size-lg);
}

h6 {
  font-size: var(--font-size-base);
}

p {
  margin-bottom: var(--spacing-4);
}

a {
  color: var(--color-brand-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

a:hover {
  color: var(--color-brand-dark);
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  min-height: 48px; /* Thumb-friendly */
}

.btn-primary {
  background-color: var(--color-cta-green);
  color: white;
  border-color: var(--color-cta-green);
}

.btn-primary:hover {
  background-color: var(--color-cta-green-hover);
  border-color: var(--color-cta-green-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--color-brand-primary);
  color: white;
  border-color: var(--color-brand-primary);
}

.btn-secondary:hover {
  background-color: var(--color-brand-dark);
  border-color: var(--color-brand-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-dark);
}

.btn-outline:hover {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-text-primary);
}

.btn-full {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ============================================
   FORM ELEMENTS
   ============================================ */

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
select,
textarea {
  width: 100%;
  padding: var(--spacing-3);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-base);
  min-height: 48px; /* Thumb-friendly */
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

label {
  display: block;
  margin-bottom: var(--spacing-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

/* ============================================
   CARDS
   ============================================ */

.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

/* ============================================
   CONTAINER
   ============================================ */

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-6);
  }
}

/* ============================================
   GRID UTILITIES
   ============================================ */

.grid {
  display: grid;
  gap: var(--spacing-6);
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.mt-4 {
  margin-top: var(--spacing-4);
}

.mb-4 {
  margin-bottom: var(--spacing-4);
}

.py-8 {
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-8);
}

.hidden {
  display: none;
}

/* ============================================
   RESPONSIVE HELPERS
   ============================================ */

.mobile-only {
  display: block;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
  .desktop-only {
    display: block;
  }
}
```

---

## Component Specifications

### Announcement Bar

**Purpose:** Display promotional messages, free shipping threshold, limited-time offers
**Location:** Top of every page, above header
**Design:** Full-width, dismissible, customizable background color

**Key Features:**
- Customizable message via Shopify theme editor
- Dismissible (X button, stores in localStorage)
- Background color customization
- Link support (optional CTA link)

---

### Header

**Purpose:** Site navigation, branding, search, account, cart
**Design:** Sticky, smart scroll behavior (hide on scroll down, reveal on scroll up)

**Desktop Layout:**
- Left: Logo
- Center: Main navigation (Home, Shop, Collections, About, Contact)
- Right: Search icon, Account icon, Cart icon with item count badge

**Mobile Layout:**
- Left: Hamburger menu icon
- Center: Logo
- Right: Cart icon

**Key Features:**
- Sticky positioning
- Scroll behavior (hide/show based on scroll direction)
- Mobile menu (slide-in from left)
- Dropdown navigation for subcategories
- Cart count badge
- Search modal/drawer

---

### Footer

**Purpose:** Site map, trust signals, newsletter signup, legal links
**Design:** 4-column layout on desktop, stacked on mobile

**Sections:**
1. **About Column:** Brand description, logo
2. **Quick Links:** Shop, About, Contact, FAQ, Returns
3. **Customer Service:** Shipping, Returns, Size Guide, Track Order
4. **Newsletter:** Email signup form

**Bottom Row:**
- Payment method icons
- Security badges (SSL, Norton)
- Social media links
- Copyright notice
- Legal links (Privacy, Terms, Refund Policy)

---

### Product Card (Reusable Component)

**Purpose:** Display product in grid (homepage, collection pages)
**Design:** Vertical card with image, title, price, CTA

**Structure:**
- Product image (1:1 aspect ratio, lazy loaded)
- "Sale" or "New" badge (if applicable)
- Product title (truncated to 2 lines)
- Star rating + review count (if reviews exist)
- Price (with sale price if applicable)
- "Quick View" button (desktop hover)
- "Add to Cart" button

**Hover Effects:**
- Image zoom or secondary image swap
- Buttons appear/animate

---

### Sticky Add to Cart (Mobile Only)

**Purpose:** Keep "Add to Cart" CTA accessible in thumb zone on product pages
**Design:** Fixed bottom bar, appears after scrolling past main product form

**Structure:**
- Product thumbnail image
- Product title (truncated)
- Price
- Variant selector (compact dropdown)
- Quantity selector
- Add to Cart button (full-width, green)

**Behavior:**
- Hidden on page load
- Appears after 300px scroll
- Syncs variant/quantity selection with main form
- Smooth slide-up animation

---

### Free Shipping Progress Bar

**Purpose:** Encourage customers to add more items to cart to reach free shipping threshold
**Design:** Horizontal progress bar with motivational message

**Messages:**
- Under threshold: "Add $X more to qualify for free shipping!"
- At threshold: "Congrats! You've unlocked free shipping!"

**Visual:**
- Progress bar fills from 0-100% based on cart value
- Green color when threshold reached
- Displayed in cart drawer and cart page

---

## Testing & Quality Assurance

### Cross-Browser Testing Matrix

| Browser        | Desktop | Mobile | Notes                          |
|----------------|---------|--------|--------------------------------|
| Chrome         | ✓       | ✓      | Primary testing browser        |
| Safari         | ✓       | ✓      | Critical for iPhone users      |
| Firefox        | ✓       | —      | Test CSS compatibility         |
| Edge           | ✓       | —      | Test for Windows users         |

### Cross-Device Testing Matrix

| Device Type    | Models to Test                     | Screen Sizes     |
|----------------|------------------------------------|------------------|
| iPhone         | SE, 12, 14, 14 Pro                 | 375px - 428px    |
| Android        | Samsung Galaxy, Google Pixel       | 360px - 412px    |
| Tablet         | iPad, iPad Pro                     | 768px - 1024px   |
| Desktop        | 1080p, 1440p, 4K                   | 1920px - 3840px  |

### Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Proper heading hierarchy (H1 > H2 > H3)
- [ ] Color contrast ratios meet WCAG AA standards (4.5:1 for text)
- [ ] All interactive elements are keyboard accessible
- [ ] Form inputs have associated labels
- [ ] ARIA labels on icon-only buttons
- [ ] Skip to main content link
- [ ] Screen reader tested (VoiceOver, NVDA)

### Performance Benchmarks

| Metric                      | Target   | Tool                     |
|-----------------------------|----------|--------------------------|
| Mobile Load Time            | <3s      | PageSpeed Insights       |
| Desktop Load Time           | <2s      | PageSpeed Insights       |
| Mobile PageSpeed Score      | 90+      | PageSpeed Insights       |
| Desktop PageSpeed Score     | 95+      | PageSpeed Insights       |
| Largest Contentful Paint    | <2.5s    | Lighthouse               |
| First Input Delay           | <100ms   | Lighthouse               |
| Cumulative Layout Shift     | <0.1     | Lighthouse               |

---

## Deployment Strategy

### Development Workflow

1. **Local Development:**
   - Build theme files locally in `/oneeko-store/` directory
   - Use version control (Git) for all changes
   - Commit frequently with descriptive messages

2. **Testing Environment:**
   - Create "Development" theme in Shopify admin (duplicate of current theme)
   - Use `update-theme.js` script to upload changes to dev theme
   - Preview dev theme before publishing
   - Test all functionality in dev theme

3. **Staging Review:**
   - Share dev theme preview link with stakeholders for feedback
   - Make refinements based on feedback
   - Run final QA tests (cross-browser, cross-device, accessibility, performance)

4. **Production Deployment:**
   - Publish dev theme to live (in Shopify admin: "Publish theme")
   - Monitor for issues in first 24 hours
   - Keep old theme available for quick rollback if needed

### Rollback Plan

If critical issues arise after deployment:
1. In Shopify admin, go to Themes
2. Find previous theme (will be listed as unpublished)
3. Click "Publish" on old theme
4. Fix issues in dev theme, then redeploy when ready

---

## Post-Launch Optimization

### Week 1: Monitor & Fix

- Monitor Google Analytics for traffic patterns
- Review Shopify Analytics for conversion rates
- Check for JavaScript errors in browser console
- Monitor customer support emails for usability issues
- Fix any critical bugs immediately

### Week 2-4: Conversion Rate Optimization

- A/B test CTA button colors (green vs. orange)
- Test hero headline variations
- Experiment with product card layouts
- Test free shipping threshold (e.g., $50 vs. $75)
- Analyze cart abandonment reasons

### Month 2-3: Content & SEO

- Add more product reviews (encourage customers to review)
- Expand product descriptions with SEO keywords
- Create blog content (if applicable)
- Build backlinks to improve domain authority
- Optimize images further (compress, add more alt text)

### Ongoing: Feature Additions

- Add product filtering (if not already implemented)
- Implement product bundling
- Add upsell/cross-sell opportunities
- Integrate loyalty program
- Add live chat support
- Implement product recommendations engine
- Create gift card functionality

---

## Success Metrics

### Key Performance Indicators (KPIs)

| Metric                          | Baseline | Target (3 months) |
|---------------------------------|----------|-------------------|
| Conversion Rate                 | TBD      | 2-3%              |
| Average Order Value             | TBD      | +15%              |
| Cart Abandonment Rate           | TBD      | <70%              |
| Mobile Conversion Rate          | TBD      | Match desktop     |
| Page Load Time (Mobile)         | TBD      | <3s               |
| Bounce Rate                     | TBD      | <50%              |
| Email Capture Rate (Newsletter) | TBD      | 5-10%             |

---

## Conclusion

This comprehensive rebuild plan transforms the Oneeko store from a poorly designed, non-functional site into a professional, high-converting e-commerce store. By following research-backed best practices, implementing a clean design system, and prioritizing mobile UX, the new store will:

- **Build trust** with professional design and clear trust signals
- **Convert visitors** with optimized CTAs, sticky mobile elements, and streamlined checkout
- **Perform fast** with optimized images, lazy loading, and minimal JavaScript
- **Rank well** with SEO-optimized content and structured data
- **Delight users** with smooth navigation, beautiful design, and excellent mobile experience

**Estimated Timeline:** 25-35 hours of focused development work across 10 phases.

**Next Steps:**
1. Initialize new theme structure in `/oneeko-store/` directory
2. Commit to GitHub repository for version control and session continuity
3. Begin Phase 1: Foundation & Design System
4. Work through phases sequentially, testing thoroughly at each stage
5. Deploy to production when all phases complete and QA passes

---

## GitHub Repository Structure

```
/oneeko-store-rebuild/
├── README.md                      # Project overview and setup instructions
├── STORE_REBUILD_PLAN.md          # This comprehensive plan document
├── .gitignore                     # Git ignore rules
├── theme/                         # Shopify theme files
│   ├── layout/
│   ├── templates/
│   ├── sections/
│   ├── snippets/
│   ├── assets/
│   ├── config/
│   └── locales/
└── scripts/                       # Store management scripts
    ├── package.json
    ├── update-theme.js
    ├── bulk-update-products.js
    └── [other utility scripts]
```

---

**Document Version:** 1.0
**Last Updated:** 2025-11-07
**Author:** Claude (Anthropic)
**Project:** Oneeko Store Complete Rebuild
