# Known Issues - OneEko Store

**Last Updated:** November 15, 2025
**Status:** Testing Phase

---

## Critical Issues

> Site/checkout is down, payment processing broken, data loss

*None*

---

## High Priority Issues

> Major feature broken, affects most users, no workaround

*None*

---

## Medium Priority Issues

> Feature partially broken, affects some users, workaround available

*None*

---

## Low Priority Issues

> Minor visual issue, affects few users, easy workaround

*None*

---

## Fixed Issues

### November 15, 2025

- ✅ **Fixed:** Bug #1 - Product Details Accordion Content Overlaps Description
  - **Severity:** High
  - **Description:** Accordion content was overlapping product description instead of expanding inline
  - **Fix:** Changed `.op-wide` from `position: fixed` modal to inline expansion with smooth height transitions
  - **File:** `theme/assets/oneeko-product.css`
  - **Lines:** 310-355

- ✅ **Fixed:** Bug #2 - Duplicate Details/Shipping/FAQ Buttons
  - **Severity:** Medium
  - **Description:** Same buttons appeared twice on product page (desktop view)
  - **Fix:** Added media query to hide buttons in original buybox position on desktop (≥993px), show only after JavaScript moves them to full-width section
  - **File:** `theme/assets/oneeko-product.css`
  - **Lines:** 365-379

- ✅ **Fixed:** Test red background on product page
  - **Severity:** Low
  - **Description:** Debug red background was still visible on production
  - **Fix:** Removed `background: red !important;` from mobile product container
  - **File:** `theme/assets/oneeko-product.css`
  - **Line:** 470

### November 14, 2025

- ✅ **Fixed:** Horizontal overflow on mobile product pages
  - **Severity:** High
  - **Fix:** Added `max-width: 100vw` and `overflow-x: hidden` to product containers
  - **File:** `theme/assets/oneeko-product.css`

- ✅ **Fixed:** Quantity input too wide on mobile
  - **Severity:** Medium
  - **Fix:** Reduced max-width from 110px to 90px, input max-width to 40px
  - **File:** `theme/sections/main-product.liquid`

- ✅ **Fixed:** Sticky CTA buttons not matching main button style
  - **Severity:** Medium
  - **Fix:** Applied Amazon-style gradients to sticky CTA buttons
  - **File:** `theme/assets/pdp-mobile.css`

- ✅ **Fixed:** Mysterious X button visible when panel closed
  - **Severity:** Medium
  - **Fix:** Hide `.op-wide` panel by default, only show when active
  - **File:** `theme/assets/oneeko-product.css`

---

## Testing Notes

### Browser Compatibility
- **Chrome:** ✅ All features working
- **Safari:** ⏳ Testing pending
- **Firefox:** ⏳ Testing pending
- **Edge:** ⏳ Testing pending

### Device Testing
- **Desktop:** ⏳ Testing pending
- **Tablet:** ⏳ Testing pending
- **Mobile:** ⏳ Testing pending

### Accessibility
- **Keyboard Navigation:** ⏳ Testing pending
- **Screen Reader:** ⏳ Testing pending
- **Color Contrast:** ⏳ Testing pending

---

## Bug Report Template

```markdown
## Bug #[NUMBER] - [SHORT TITLE]

**Date Reported:** [Date]
**Reported By:** [Name]
**Page/Feature:** [Specific page or feature]
**Browser/Device:** [Chrome Desktop, Safari iOS, etc.]
**Severity:** [Critical | High | Medium | Low]

### Description
[Clear, concise description of the bug]

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Screenshots
[Attach screenshots if applicable]

### Environment
- **URL:** [Specific URL where bug occurs]
- **Browser:** [Name and version]
- **Device:** [Desktop/Mobile/Tablet]
- **OS:** [Windows/Mac/iOS/Android]
- **Screen Size:** [Width x Height]

### Status
- [x] Open
- [ ] In Progress
- [ ] Fixed
- [ ] Verified
- [ ] Closed

### Fix Notes
[How the bug was fixed, files changed, etc.]

### Related Issues
[Link to related bugs if applicable]
```

---

## How to Report a Bug

1. Create a new entry above in the appropriate severity section
2. Use the bug report template
3. Assign a unique bug number (increment from previous)
4. Add screenshots if visual issue
5. Update status as work progresses
6. Move to "Fixed Issues" when verified

---

## Priority Guidelines

**Critical** - Fix immediately
- Site completely broken
- Checkout not working
- Payment processing failures
- Security vulnerabilities
- Data loss or corruption

**High** - Fix within 24 hours
- Major feature not working
- Affects >50% of users
- No reasonable workaround
- Significant revenue impact

**Medium** - Fix within 1 week
- Feature partially working
- Affects <50% of users
- Workaround available
- Minor revenue impact

**Low** - Fix when time permits
- Visual/cosmetic issues
- Affects few users
- Easy workaround
- No revenue impact

---

## Notes

- All bugs should be tested and verified after fixing
- Move fixed bugs to "Fixed Issues" section with date
- Keep this file updated during testing phase
- Archive old fixed issues monthly
