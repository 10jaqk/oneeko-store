// Product Gallery with Modal, Zoom, and Carousel
class ProductGallery {
  constructor() {
    this.gallery = document.querySelector('[data-product-gallery]');
    if (!this.gallery) return;

    this.mainImage = this.gallery.querySelector('[data-main-image]');
    this.thumbnails = this.gallery.querySelectorAll('[data-thumbnail]');
    this.images = [];
    this.currentIndex = 0;

    // Collect all images
    this.thumbnails.forEach((thumb, index) => {
      this.images.push({
        src: thumb.dataset.imageSrc,
        alt: thumb.querySelector('img')?.alt || ''
      });
    });

    this.createModal();
    this.bindEvents();
  }

  createModal() {
    // Create modal HTML
    const modalHTML = `
      <div class="gallery-modal" data-gallery-modal aria-modal="true" role="dialog">
        <div class="gallery-modal__overlay" data-modal-close></div>
        <div class="gallery-modal__container">
          <button
            type="button"
            class="gallery-modal__close"
            data-modal-close
            aria-label="Close gallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            class="gallery-modal__nav gallery-modal__nav--prev"
            data-modal-prev
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            class="gallery-modal__nav gallery-modal__nav--next"
            data-modal-next
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div class="gallery-modal__image-wrapper">
            <img
              class="gallery-modal__image"
              data-modal-image
              src=""
              alt=""
            />
          </div>

          <div class="gallery-modal__thumbnails">
            <div class="gallery-modal__thumbnails-track" data-thumbnails-track>
              ${this.images.map((img, index) => `
                <button
                  type="button"
                  class="gallery-modal__thumb ${index === 0 ? 'active' : ''}"
                  data-modal-thumb="${index}"
                >
                  <img src="${img.src}" alt="${img.alt}" loading="lazy" />
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    this.modal = document.querySelector('[data-gallery-modal]');
    this.modalImage = this.modal.querySelector('[data-modal-image]');
    this.modalThumbs = this.modal.querySelectorAll('[data-modal-thumb]');
  }

  bindEvents() {
    // Open modal on main image click
    if (this.mainImage) {
      this.mainImage.addEventListener('click', () => this.openModal(0));
    }

    // Open modal on thumbnail click
    this.thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => this.openModal(index));
    });

    // Modal controls
    const closeButtons = this.modal.querySelectorAll('[data-modal-close]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    const prevButton = this.modal.querySelector('[data-modal-prev]');
    const nextButton = this.modal.querySelector('[data-modal-next]');

    if (prevButton) {
      prevButton.addEventListener('click', () => this.prevImage());
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextImage());
    }

    // Modal thumbnail clicks
    this.modalThumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => this.goToImage(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;

      switch (e.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowLeft':
          this.prevImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    });

    // Touch swipe
    let touchStartX = 0;
    let touchEndX = 0;

    this.modalImage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.modalImage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.nextImage(); // Swipe left
        } else {
          this.prevImage(); // Swipe right
        }
      }
    };

    this.handleSwipe = handleSwipe;

    // Pinch zoom on mobile
    this.initZoom();
  }

  initZoom() {
    let scale = 1;
    let initialDistance = 0;

    this.modalImage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        initialDistance = this.getDistance(e.touches);
      }
    }, { passive: true });

    this.modalImage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const currentDistance = this.getDistance(e.touches);
        const newScale = (currentDistance / initialDistance) * scale;

        this.modalImage.style.transform = `scale(${Math.min(Math.max(1, newScale), 3)})`;
      }
    });

    this.modalImage.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        const computedScale = this.modalImage.style.transform.match(/scale\(([^)]+)\)/);
        if (computedScale) {
          scale = parseFloat(computedScale[1]) || 1;
        }
      }
    }, { passive: true });

    // Desktop wheel zoom
    this.modalImage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      scale = Math.min(Math.max(1, scale * delta), 3);

      this.modalImage.style.transform = `scale(${scale})`;
      this.modalImage.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    }, { passive: false });

    // Reset zoom on image change
    this.modalImage.addEventListener('load', () => {
      scale = 1;
      this.modalImage.style.transform = 'scale(1)';
      this.modalImage.style.cursor = 'zoom-in';
    });
  }

  getDistance(touches) {
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  openModal(index) {
    this.currentIndex = index;
    this.updateModalImage();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    this.modalImage.style.transform = 'scale(1)';
  }

  goToImage(index) {
    this.currentIndex = index;
    this.updateModalImage();
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateModalImage();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateModalImage();
  }

  updateModalImage() {
    const img = this.images[this.currentIndex];
    this.modalImage.src = img.src;
    this.modalImage.alt = img.alt;

    // Update active thumbnail
    this.modalThumbs.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === this.currentIndex);
    });

    // Reset zoom
    this.modalImage.style.transform = 'scale(1)';
  }
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ProductGallery());
} else {
  new ProductGallery();
}
