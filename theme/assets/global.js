/**
 * Oneeko Store - Global JavaScript
 * Contains core functionality used across all pages
 */

class ThemeCore {
  constructor() {
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupAnnouncementBar();
    this.setupCartDrawer();
  }

  /**
   * Mobile Menu Toggle
   */
  setupMobileMenu() {
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const menuClose = document.querySelector('[data-mobile-menu-close]');

    if (!menuToggle || !mobileMenu) return;

    const openMenu = () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', openMenu);

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    // Close on overlay click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  /**
   * Announcement Bar Dismissal
   */
  setupAnnouncementBar() {
    const announcementBar = document.querySelector('[data-announcement-bar]');
    const dismissButton = document.querySelector('[data-announcement-dismiss]');

    if (!announcementBar || !dismissButton) return;

    // Check if already dismissed
    if (localStorage.getItem('announcementDismissed') === 'true') {
      announcementBar.style.display = 'none';
      return;
    }

    dismissButton.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      localStorage.setItem('announcementDismissed', 'true');
    });
  }

  /**
   * Cart Drawer Toggle
   */
  setupCartDrawer() {
    const cartToggles = document.querySelectorAll('[data-cart-toggle]');
    const cartDrawer = document.querySelector('[data-cart-drawer]');
    const cartClose = document.querySelector('[data-cart-close]');

    if (!cartDrawer) return;

    const openCart = () => {
      cartDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
      cartDrawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    cartToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
      });
    });

    if (cartClose) {
      cartClose.addEventListener('click', closeCart);
    }

    // Close on overlay click
    cartDrawer.addEventListener('click', (e) => {
      if (e.target === cartDrawer) {
        closeCart();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartDrawer.classList.contains('active')) {
        closeCart();
      }
    });
  }
}

/**
 * Debounce utility
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Initialize on DOM ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ThemeCore());
} else {
  new ThemeCore();
}
