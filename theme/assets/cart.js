/**
 * Oneeko Store - Cart Functionality
 * Handles Add to Cart, cart updates, and cart drawer
 */

class CartManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupAddToCart();
    this.setupCartUpdates();
    this.setupQuantityButtons();
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
   * Add product to cart via AJAX
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

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const item = await response.json();

      // Show success state
      if (submitButton) {
        submitButton.innerHTML = '<span>✓ Added!</span>';
      }

      // Update cart count
      await this.updateCartCount();

      // Refresh cart drawer content
      await this.refreshCartDrawer();

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
        }
      });
    } catch (error) {
      console.error('Update cart count error:', error);
    }
  }

  /**
   * Refresh cart drawer content
   */
  async refreshCartDrawer() {
    try {
      const response = await fetch('/?sections=cart-drawer');
      const data = await response.json();

      // This would update the cart drawer HTML
      // For now, we'll reload the page to show updated cart
      // In a full implementation, you'd update the drawer HTML dynamically

    } catch (error) {
      console.error('Refresh cart drawer error:', error);
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
   * Setup cart quantity updates
   */
  setupCartUpdates() {
    const cartItems = document.querySelectorAll('[data-cart-item-key]');

    cartItems.forEach(input => {
      input.addEventListener('change', (e) => {
        this.updateCartItem(e.target.dataset.cartItemKey, e.target.value);
      });
    });

    // Remove buttons
    const removeButtons = document.querySelectorAll('[data-cart-remove]');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.updateCartItem(btn.dataset.cartRemove, 0);
      });
    });
  }

  /**
   * Update cart item quantity
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

      // Reload page to show updated cart
      window.location.reload();

    } catch (error) {
      console.error('Update cart error:', error);
    }
  }

  /**
   * Setup quantity selector buttons
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
}

/**
 * Initialize on DOM ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new CartManager());
} else {
  new CartManager();
}
