document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    // Function to fix image styles
    const fixImageStyles = () => {
      document.querySelectorAll('.pdp .product__media img, .pdp .media > img, .pdp .product-media img, .pdp .product-media-wrapper img').forEach(img => {
        img.style.position = 'static';
        img.style.inset = 'auto';
        img.style.top = 'auto';
        img.style.left = 'auto';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.objectFit = 'contain';
        img.style.maxHeight = 'calc(100vh - 180px)';
      });
    };

    // Run on load
    fixImageStyles();

    // Re-run when images change (e.g., gallery switching)
    const observer = new MutationObserver(fixImageStyles);
    const pdpSection = document.querySelector('.pdp');
    if (pdpSection) {
      observer.observe(pdpSection, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }

    // Also fix on image load events
    document.querySelectorAll('.pdp img').forEach(img => {
      img.addEventListener('load', fixImageStyles);
    });
  }
});
