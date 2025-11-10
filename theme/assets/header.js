/**
 * Header Scroll Behavior
 * Hides header on scroll down, shows on scroll up
 */

class HeaderScroll {
  constructor() {
    this.header = document.querySelector('[data-header]');
    if (!this.header) return;

    this.lastScrollTop = 0;
    this.scrollThreshold = 100;
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 10) {
      this.header.classList.add('is-scrolled');
    } else {
      this.header.classList.remove('is-scrolled');
    }

    // Hide/show header based on scroll direction
    if (scrollTop > this.scrollThreshold) {
      if (scrollTop > this.lastScrollTop) {
        // Scrolling down
        this.header.classList.add('is-hidden');
      } else {
        // Scrolling up
        this.header.classList.remove('is-hidden');
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}

/**
 * Search Modal Toggle
 */
class SearchModal {
  constructor() {
    try {
      this.modal = document.querySelector('[data-search-modal]');
      this.toggleButtons = document.querySelectorAll('[data-search-toggle]');
      this.closeButtons = document.querySelectorAll('[data-search-close]');

      if (!this.modal) {
        console.warn('Search modal not found');
        return;
      }

      if (this.toggleButtons.length === 0) {
        console.warn('Search toggle buttons not found');
        return;
      }

      console.log('SearchModal initialized', {
        modal: this.modal,
        toggleButtons: this.toggleButtons.length,
        closeButtons: this.closeButtons.length
      });

      this.bindEvents();
    } catch (error) {
      console.error('SearchModal constructor error:', error);
    }
  }

  bindEvents() {
    try {
      // Open modal
      this.toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          console.log('Search button clicked');
          this.open();
        });
      });

      // Close modal
      this.closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.close();
        });
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('active')) {
          this.close();
        }
      });
    } catch (error) {
      console.error('SearchModal bindEvents error:', error);
    }
  }

  open() {
    try {
      console.log('Opening search modal');
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Focus search input
      setTimeout(() => {
        const input = this.modal.querySelector('[data-search-input]');
        if (input) {
          input.focus();
          console.log('Search input focused');
        }
      }, 100);
    } catch (error) {
      console.error('SearchModal open error:', error);
    }
  }

  close() {
    try {
      console.log('Closing search modal');
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    } catch (error) {
      console.error('SearchModal close error:', error);
    }
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeaderScroll();
    new SearchModal();
  });
} else {
  new HeaderScroll();
  new SearchModal();
}
