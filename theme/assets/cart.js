/**
 * Oneeko Store - Cart Functionality with Live AJAX Updates
 * Handles Add to Cart, cart updates, and cart drawer with Section Rendering API
 */

class CartManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupAddToCart();
    this.setupCartUpdates();
    this.setupQuantityButtons();
    this.setupVariantSelectors();
    this.setupCartDrawerClose();
  }

  /**
   * Setup Add to Cart form submission
   */
  setupAddToCart() {
    const productForms = document.querySelectorAll('form[action*="/cart/add"]');

    productForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addToCart(form);
      });
    });
  }

  /**
   * Add product to cart via AJAX with live drawer refresh
   */
  async addToCart(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton?.innerHTML;

    // Disable button and show loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = '<span>Adding...</span>';
    }

    try {
      const formData = new FormData(form);

      // Get variant ID from form with fallbacks
      let variantId = formData.get('id');
      if (!variantId) {
        const productData = form.closest('[data-product-id]');
        if (productData) {
          variantId = productData.dataset.variantId || productData.dataset.productId;
        }
      }
      if (!variantId) {
        const variantInput = form.querySelector('input[name="id"], select[name="id"]');
        if (variantInput) {
          variantId = variantInput.value;
        }
      }

      // Prepare data for Shopify Cart API
      const cartData = {
        items: [{
          id: variantId || formData.get('id'),
          quantity: parseInt(formData.get('quantity') || 1)
        }]
      };

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Cart API error:', errorData);
        throw new Error(errorData.description || 'Failed to add to cart');
      }

      await response.json();

      // Show success state
      if (submitButton) {
        submitButton.innerHTML = '<span>✓ Added!</span>';
      }

      // Refresh cart drawer and count with Section Rendering API
      await this.refreshCart();

      // Open cart drawer
      setTimeout(() => {
        this.openCartDrawer();
      }, 300);

      // Reset button after 2 seconds
      setTimeout(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = buttonText;
        }
      }, 2000);

    } catch (error) {
      console.error('Add to cart error:', error);

      // Show error state
      if (submitButton) {
        submitButton.innerHTML = '<span>Error - Try again</span>';

        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.innerHTML = buttonText;
        }, 3000);
      }
    }
  }

  /**
   * Refresh cart drawer and cart count using Section Rendering API
   */
  async refreshCart() {
    try {
      // Fetch cart-drawer section and cart count
      const url = '/?sections=cart-drawer';
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart sections');
      }

      const sections = await response.json();

      // Update cart drawer if element exists
      const cartDrawerElement = document.querySelector('[data-cart-drawer]');
      if (cartDrawerElement && sections['cart-drawer']) {
        cartDrawerElement.outerHTML = sections['cart-drawer'];

        // Re-initialize cart drawer event listeners
        this.setupCartDrawerClose();
        this.setupCartUpdates();
      }

      // Update cart count
      await this.updateCartCount();

    } catch (error) {
      console.error('Refresh cart error:', error);
    }
  }

  /**
   * Update cart count badge
   */
  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();

      const countElements = document.querySelectorAll('[data-cart-count]');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        if (cart.item_count > 0) {
          el.style.display = 'flex';
        } else {
          el.style.display = 'none';
        }
      });
    } catch (error) {
      console.error('Update cart count error:', error);
    }
  }

  /**
   * Open cart drawer
   */
  openCartDrawer() {
    const cartDrawer = document.querySelector('[data-cart-drawer]');
    if (cartDrawer) {
      cartDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Close cart drawer
   */
  closeCartDrawer() {
    const cartDrawer = document.querySelector('[data-cart-drawer]');
    if (cartDrawer) {
      cartDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Setup cart drawer close button and overlay
   */
  setupCartDrawerClose() {
    // Close button
    const closeButtons = document.querySelectorAll('[data-cart-close]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.closeCartDrawer());
    });

    // Close on overlay click
    const cartDrawer = document.querySelector('[data-cart-drawer]');
    if (cartDrawer) {
      cartDrawer.addEventListener('click', (e) => {
        if (e.target === cartDrawer) {
          this.closeCartDrawer();
        }
      });
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCartDrawer();
      }
    });
  }

  /**
   * Setup cart quantity updates and remove buttons
   */
  setupCartUpdates() {
    // Quantity inputs
    const quantityInputs = document.querySelectorAll('[data-cart-item-key]');
    quantityInputs.forEach(input => {
      input.addEventListener('change', async (e) => {
        const key = e.target.dataset.cartItemKey;
        const quantity = parseInt(e.target.value);
        await this.updateCartItem(key, quantity);
      });
    });

    // Remove buttons
    const removeButtons = document.querySelectorAll('[data-cart-remove]');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const key = btn.dataset.cartRemove;
        await this.updateCartItem(key, 0);
      });
    });
  }

  /**
   * Update cart item quantity with live refresh
   */
  async updateCartItem(key, quantity) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: key,
          quantity: parseInt(quantity)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update cart');
      }

      // Refresh cart drawer and count immediately
      await this.refreshCart();

    } catch (error) {
      console.error('Update cart error:', error);
      // Reload page as fallback
      window.location.reload();
    }
  }

  /**
   * Setup quantity selector buttons (+ / -)
   */
  setupQuantityButtons() {
    // Plus buttons
    document.querySelectorAll('[data-quantity-plus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('[data-quantity-input]');
        if (input) {
          input.value = parseInt(input.value) + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    });

    // Minus buttons
    document.querySelectorAll('[data-quantity-minus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('[data-quantity-input]');
        if (input && parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    });
  }

  /**
   * Setup variant selectors to update hidden ID field
   */
  setupVariantSelectors() {
    const productForms = document.querySelectorAll('form[action*="/cart/add"]');

    productForms.forEach(form => {
      const variantSelects = form.querySelectorAll('.product-form__select');
      const hiddenIdInput = form.querySelector('input[name="id"]');

      if (variantSelects.length > 0 && hiddenIdInput) {
        // Get product data from form or page
        const productDataElement = form.closest('[data-product]') || document.querySelector('[data-product]');

        if (productDataElement) {
          try {
            const productData = JSON.parse(productDataElement.dataset.product || productDataElement.textContent);

            // Listen to variant selection changes
            variantSelects.forEach(select => {
              select.addEventListener('change', () => {
                const selectedOptions = Array.from(variantSelects).map(s => s.value);

                // Find matching variant
                const matchingVariant = productData.variants.find(variant => {
                  return selectedOptions.every((option, index) => {
                    return variant.options[index] === option;
                  });
                });

                if (matchingVariant) {
                  hiddenIdInput.value = matchingVariant.id;
                }
              });
            });
          } catch (e) {
            // If product data not available, variant ID will use default
            console.log('Product data not available for variant selection');
          }
        }
      }
    });
  }
}

/**
 * Initialize on DOM ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new CartManager());
} else {
  new CartManager();
}
