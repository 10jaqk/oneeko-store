# Phase 8: Checkout Configuration Guide

**Created:** November 14, 2025
**Status:** Configuration Required in Shopify Admin

---

## Overview

Most checkout configuration requires Shopify Admin access or Shopify Plus plan. This guide provides step-by-step instructions for completing Phase 8.

---

## 1. Checkout Branding Configuration

**Location:** Settings → Checkout → Customization

### Brand Colors (Based on OneEko Design System)

Apply these colors to match your theme:

- **Brand/Primary Color:** `#2563EB` (Blue)
- **Accent Color (Buttons):** `#10B981` (Green)
- **Text Color:** `#1F2937` (Dark Gray)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#EAECEF` (Light Gray)
- **Success Color:** `#10B981` (Green)
- **Error Color:** `#EF4444` (Red)
- **Warning Color:** `#F59E0B` (Amber)

### Typography

- **Headings:** Montserrat (bold, weight 700)
- **Body Text:** Roboto (normal, weight 400)
- **Font Sizes:** Base 16px, scale from 12px-24px

### Corner Radius

- **Small:** 4px
- **Base:** 8px
- **Large:** 12px

### Button Styling

**Primary Buttons (Buy Now, Place Order):**
- Background: `#10B981` (Green)
- Text: `#FFFFFF` (White)
- Border: `#10B981`
- Hover: Darken 10% → `#059669`
- Border Radius: 8px
- Padding: 12px 24px
- Font Weight: 500

**Secondary Buttons (Cancel, Back):**
- Background: `#FFFFFF` (White)
- Text: `#2563EB` (Blue)
- Border: `#2563EB` (2px)
- Hover: Light blue background `#EFF6FF`
- Border Radius: 8px

### Steps to Apply

1. Go to: **Settings → Checkout**
2. Scroll to "Checkout visual customization"
3. Click **"Customize"** button
4. In the editor:
   - Set brand color to `#2563EB`
   - Set accent color to `#10B981`
   - Adjust button styles to match specifications above
   - Set font family to Roboto for body text
   - Set border radius to 8px
5. Click **"Save"**

---

## 2. Payment Gateway Setup

**Location:** Settings → Payments

### Currently Supported (Already Configured)
✅ Apple Pay
✅ Google Pay

### Recommended Payment Providers

#### A. Shopify Payments (Primary)

**Benefits:**
- Lowest transaction fees (2.9% + 30¢ for online)
- No additional transaction fees
- Integrated directly with Shopify
- Supports all major credit cards
- Built-in fraud analysis

**Setup:**
1. Go to: **Settings → Payments**
2. Under "Shopify Payments", click **"Complete account setup"**
3. Fill in business information:
   - Business legal name
   - Business type
   - Tax ID (EIN)
   - Bank account for deposits
   - Business address
4. Set payout schedule (daily, weekly, monthly)
5. Enable 3D Secure for fraud prevention
6. Click **"Save"**

#### B. PayPal Express Checkout (Alternative)

**Setup:**
1. Go to: **Settings → Payments**
2. Under "Alternative payment methods", click **"Add payment method"**
3. Select **"PayPal"**
4. Click **"Activate PayPal"**
5. Log in to your PayPal Business account
6. Grant Shopify permission to process payments
7. Click **"Done"**

#### C. Shop Pay (Accelerated Checkout)

**Automatic** - Enabled when you use Shopify Payments

**Benefits:**
- Faster checkout for returning customers
- Saved payment info
- Order tracking
- Carbon-neutral shipping offset

---

## 3. Shipping Rates Configuration

**Location:** Settings → Shipping and delivery

### Current Configuration

**General Profile:**
- Zone: International (all 28 countries)
- Rate: Standard Shipping - $20.00 USD

### Recommended Configuration

#### Create Two Shipping Zones

**Zone 1: United States**
- Condition: Shipping to US
- Rates:
  - Standard Shipping: $4.99 (5-7 business days)
  - Express Shipping: $14.99 (2-3 business days)
  - Free Shipping: $0.00 (when order is $50 or more)

**Zone 2: International**
- Condition: All other countries
- Rates:
  - Standard International: $15.00 (10-20 business days)
  - Express International: $35.00 (5-10 business days)
  - Free International Shipping: $0.00 (when order is $100 or more)

### Steps to Configure

1. Go to: **Settings → Shipping and delivery**
2. Click on **"General Profile"**

#### For US Shipping:

3. Click **"Manage zones"**
4. Click **"Create zone"**
5. Name: "United States"
6. Select country: United States
7. Click **"Done"**
8. Click **"Add rate"** for this zone:

   **Rate 1: Standard Shipping**
   - Name: Standard Shipping
   - Price: $4.99
   - Conditions: None

   **Rate 2: Express Shipping**
   - Name: Express Shipping
   - Price: $14.99
   - Transit time: 2-3 business days

   **Rate 3: Free Shipping**
   - Name: Free Shipping
   - Price: $0.00
   - Condition: Based on order price
   - Minimum order: $50.00

9. Click **"Save"**

#### For International Shipping:

10. Edit the existing "International" zone
11. Remove US from the country list
12. Add new rates:

    **Rate 1: Standard International**
    - Name: Standard International Shipping
    - Price: $15.00
    - Transit time: 10-20 business days

    **Rate 2: Express International**
    - Name: Express International Shipping
    - Price: $35.00
    - Transit time: 5-10 business days

    **Rate 3: Free International (Optional)**
    - Name: Free International Shipping
    - Price: $0.00
    - Condition: Minimum order $100.00

13. Click **"Save"**

---

## 4. Free Shipping Threshold

**Implemented in shipping configuration above**

✅ US: Free shipping on orders $50+
✅ International: Free shipping on orders $100+ (optional)

### Marketing the Free Shipping Threshold

Already implemented in Phase 7:
- ✅ Free shipping progress bar in cart drawer
- ✅ Shows "You're $XX away from free shipping!"
- ✅ Encourages cart additions

---

## 5. Order Confirmation Emails

**Location:** Settings → Notifications

### Email Templates to Customize

#### A. Order Confirmation

**Template:** "Order confirmation"

**Customization:**
1. Go to: **Settings → Notifications**
2. Click **"Order confirmation"**
3. Click **"Edit code"**
4. Customize the HTML email template with:
   - OneEko logo header
   - Brand colors (#2563EB blue, #10B981 green)
   - Clean, modern layout
   - Clear order details
   - Estimated delivery date
   - Customer support contact info
   - Returns policy link

**Key Sections to Include:**
- ✅ Logo and brand header
- ✅ "Thank you for your order!" message
- ✅ Order number and date
- ✅ Itemized product list with images
- ✅ Shipping address
- ✅ Payment method
- ✅ Order total breakdown
- ✅ Estimated delivery date
- ✅ Track your order button/link
- ✅ Customer support info (support@oneeko.com)
- ✅ Returns policy link
- ✅ Social media links
- ✅ Footer with address and unsubscribe

#### B. Shipping Confirmation

**Template:** "Shipping confirmation"

1. Click **"Shipping confirmation"**
2. Customize with:
   - Tracking number (prominent)
   - Carrier information
   - Estimated delivery date
   - Track package button
   - Order summary

#### C. Abandoned Checkout

**Template:** "Abandoned checkout"

1. Click **"Abandoned checkout"**
2. Customize with:
   - Friendly reminder message
   - Product images from cart
   - "Complete your purchase" CTA button
   - Limited time incentive (optional: 10% off code)
   - Easy return to cart link

### Email Design Best Practices

**Colors:**
- Header background: `#2563EB` (Blue)
- Button color: `#10B981` (Green)
- Text: `#1F2937` (Dark gray)
- Links: `#2563EB` (Blue)

**Typography:**
- Font: Arial, Helvetica, sans-serif (web-safe)
- Heading size: 24px, bold
- Body size: 16px
- Line height: 1.5

**Layout:**
- Max width: 600px
- Padding: 20px
- Mobile-responsive
- Clear CTAs
- Adequate white space

---

## 6. Abandoned Cart Recovery

**Location:** Settings → Notifications

### Enable Abandoned Checkout Emails

1. Go to: **Settings → Notifications**
2. Scroll to **"Abandoned checkouts"**
3. Toggle **ON** if not already enabled
4. Set timing:
   - First email: 1 hour after abandonment
   - Second email: 6 hours after (if first ignored)
   - Third email: 24 hours after (if second ignored)

### Abandoned Cart Email Strategy

**Email 1 (1 hour):**
- Subject: "Did you forget something?"
- Content: Gentle reminder with product images
- CTA: "Complete your purchase"

**Email 2 (6 hours):**
- Subject: "Still thinking it over?"
- Content: Product benefits, customer reviews
- CTA: "Continue to checkout"
- Optional: Free shipping reminder

**Email 3 (24 hours):**
- Subject: "Last chance - your cart expires soon"
- Content: Urgency, scarcity (if applicable)
- Optional incentive: 10% discount code
- CTA: "Claim your discount"

### Recovery Rate Optimization

- Include product images
- Show items in cart clearly
- One-click return to checkout
- Mobile-optimized
- A/B test subject lines
- Test sending times (evenings/weekends often perform better)

---

## 7. Complete Purchase Flow Testing

### Test Checklist

#### Homepage → Product → Cart → Checkout

**Test Scenarios:**

✅ **Scenario 1: Standard Purchase (US)**
1. Start from homepage
2. Browse to product page
3. Add product to cart
4. Review cart
5. Proceed to checkout
6. Enter US shipping address
7. Verify Standard Shipping ($4.99) appears
8. Verify Express Shipping ($14.99) appears
9. Complete test order (Shopify Bogus Gateway)
10. Verify order confirmation email received

✅ **Scenario 2: Free Shipping Threshold (US)**
1. Add products totaling exactly $50
2. Verify "Free Shipping" option appears
3. Verify shipping cost is $0.00
4. Complete checkout
5. Verify order confirmation shows $0 shipping

✅ **Scenario 3: International Order**
1. Change shipping to Canada
2. Verify international rates appear ($15 standard)
3. Complete test order
4. Verify correct rates calculated

✅ **Scenario 4: Apple Pay / Google Pay**
1. Use mobile device
2. Add product to cart
3. Click Express Checkout button
4. Verify Apple Pay / Google Pay appears
5. Complete test transaction

✅ **Scenario 5: Abandoned Cart**
1. Add products to cart
2. Proceed to checkout
3. Enter email address
4. Leave without completing
5. Wait 1 hour
6. Verify abandoned cart email received
7. Click link in email
8. Verify cart restored correctly

#### Payment Gateway Testing

**Test with Shopify Bogus Gateway:**
- Card number: 1 (success)
- Card number: 2 (card declined)
- Card number: 3 (processing error)
- Expiry: Any future date
- CVV: Any 3 digits

**Test Scenarios:**
- ✅ Successful payment
- ✅ Declined payment handling
- ✅ Failed payment messaging
- ✅ PayPal integration (if enabled)

#### Mobile Testing

**Devices to Test:**
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad (Safari)

**Check:**
- ✅ Mobile checkout loads correctly
- ✅ Payment buttons are tappable
- ✅ Form fields are accessible
- ✅ Apple Pay / Google Pay work
- ✅ Order confirmation displays properly

#### Error Handling

Test these error states:
- ✅ Invalid email format
- ✅ Invalid shipping address
- ✅ Payment declined
- ✅ Out of stock during checkout
- ✅ Expired cart
- ✅ Invalid discount code

---

## 8. Post-Configuration Verification

### Checklist

- [ ] Checkout loads without errors
- [ ] All payment methods display correctly
- [ ] Shipping rates calculate accurately
- [ ] Free shipping threshold works ($50 US)
- [ ] Taxes calculate correctly (if applicable)
- [ ] Order confirmation email sends
- [ ] Shipping confirmation email sends
- [ ] Abandoned cart emails send
- [ ] Mobile checkout works smoothly
- [ ] Apple Pay / Google Pay functional
- [ ] Receipt/invoice generates correctly
- [ ] Orders appear in admin correctly
- [ ] Customer account created (if opted in)

---

## 9. Monitoring & Optimization

### Key Metrics to Track

**Conversion Funnel:**
- Cart abandonment rate (aim for <70%)
- Checkout abandonment rate (aim for <20%)
- Completion rate (aim for >3%)

**Shipping Performance:**
- Free shipping utilization (%)
- Average order value (target $50+)
- Shipping cost vs. revenue ratio

**Email Performance:**
- Abandoned cart recovery rate (aim for >10%)
- Email open rate (aim for >25%)
- Email click rate (aim for >5%)

**Payment Methods:**
- Payment method distribution
- Payment failure rate (aim for <2%)
- Express checkout usage (Apple Pay/Google Pay)

### Tools for Monitoring

1. **Shopify Analytics:**
   - Dashboard → Analytics → Reports
   - View sales by channel, traffic source, product
   - Monitor conversion rates

2. **Google Analytics 4:**
   - E-commerce tracking
   - Enhanced e-commerce reports
   - Funnel visualization
   - User behavior flow

3. **Shopify Email Campaigns:**
   - Track email performance
   - A/B test subject lines
   - Monitor unsubscribe rates

---

## Summary

Phase 8 configuration is primarily manual through Shopify Admin:

**API Access Limited:**
- ❌ Checkout branding (requires Shopify Plus)
- ❌ Email template editing (manual HTML editing)
- ✅ Shipping zones (can be done via GraphQL with proper permissions)
- ✅ Menu management (completed)

**Required Manual Steps:**
1. Configure checkout branding colors/fonts
2. Set up Shopify Payments
3. Add PayPal as alternative payment
4. Create US and International shipping zones
5. Add free shipping rates with thresholds
6. Customize order confirmation email template
7. Customize shipping confirmation email
8. Customize abandoned cart emails
9. Test complete purchase flow
10. Verify all configurations work correctly

**Estimated Time:** 2-3 hours for complete configuration and testing

---

## Next Steps (Phase 9)

After completing Phase 8, move to:
- SEO optimization (meta tags, structured data)
- Performance optimization (image compression, minification)
- Google PageSpeed audit
- Analytics setup
