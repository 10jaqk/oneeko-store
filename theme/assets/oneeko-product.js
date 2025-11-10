document.addEventListener('DOMContentLoaded', () => {
  // Move buybox extras below gallery (runtime relocation)
  const extras = document.getElementById('op-buybox-extras');
  const target = document.getElementById('op-extras-target');

  // Guard: only move if both exist and extras are still inside the buybox
  if (extras && target) {
    target.appendChild(extras); // physically moves the node (not a clone)
  }

  // Strip inline widths/heights/styles that blow up layout
  const badImgSel = '.op-description img[style], .op-description img[width], .op-description img[height]';
  document.querySelectorAll(badImgSel).forEach(img => {
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.style.width = '';
    img.style.height = '';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '';
  });

  // Any gallery elements with hard heights
  document.querySelectorAll('.op-gallery--stacked [style*="height"], .op-gallery--stacked [style*="min-height"]').forEach(el => {
    el.style.height = '';
    el.style.minHeight = '';
  });

  // ==== Inline wide panel system ====
  const host = document.getElementById('op-wide');
  const content = host?.querySelector('[data-wide-content]');
  const sources = document.getElementById('op-panel-src');
  const triggers = document.querySelectorAll('.op-panel-trigger');
  const closeBtn = host?.querySelector('[data-wide-close]');

  let currentPanel = null; // 'details' | 'shipping' | 'faq' | 'specs'

  // Smooth expand using measured heights
  function expandSection(el) {
    el.style.height = '0px';
    el.setAttribute('aria-hidden', 'false');
    const targetHeight = el.scrollHeight + 'px';
    requestAnimationFrame(() => {
      el.style.height = targetHeight;
    });
    // After animation, set to auto so it grows with content
    el.addEventListener('transitionend', function done(e) {
      if (e.propertyName === 'height') {
        el.style.height = 'auto';
        el.removeEventListener('transitionend', done);
      }
    });
  }

  // Smooth collapse
  function collapseSection(el) {
    // set current height then to 0
    el.style.height = el.scrollHeight + 'px';
    requestAnimationFrame(() => {
      el.style.height = '0px';
      el.setAttribute('aria-hidden', 'true');
    });
  }

  function openPanel(name) {
    if (!host || !content || !sources) return;
    const src = sources.querySelector(`[data-src="${name}"]`);
    if (!src) return;

    // If same panel, toggle close
    if (currentPanel === name && host.getAttribute('aria-hidden') === 'false') {
      collapseSection(host);
      currentPanel = null;
      return;
    }

    // Inject content fresh
    content.innerHTML = src.innerHTML;

    // Re-initialize clamp logic for Details if opened
    if (name === 'details') {
      initializeClampLogic();
    }

    // Expand
    expandSection(host);
    currentPanel = name;

    // Scroll into view just above the panel
    setTimeout(() => {
      host.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function closePanel() {
    if (!host) return;
    collapseSection(host);
    currentPanel = null;
  }

  function initializeClampLogic() {
    const details = content?.querySelector('[data-details]');
    const readmoreBtn = content?.querySelector('[data-readmore]');

    if (details && readmoreBtn) {
      const limit = 480; // matches CSS max-height

      // Check if content exceeds limit
      if (details.scrollHeight > limit) {
        readmoreBtn.hidden = false; // Show button

        readmoreBtn.addEventListener('click', () => {
          const isClamped = details.classList.contains('op-details--clamped');

          if (isClamped) {
            // Expand
            details.classList.remove('op-details--clamped');
            readmoreBtn.textContent = 'Show less';
          } else {
            // Collapse
            details.classList.add('op-details--clamped');
            readmoreBtn.textContent = 'Show more';
          }
        });
      }
    }
  }

  // Open listeners (buybox buttons)
  triggers.forEach(btn => {
    btn.addEventListener('click', () => openPanel(btn.dataset.panel));
  });

  // Close button
  closeBtn?.addEventListener('click', closePanel);

  // Escape key closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  // Mobile sticky ATC functionality
  const mobileAtcBtn = document.querySelector('[data-mobile-atc-btn]');
  const mainForm = document.getElementById('product-form');

  if (mobileAtcBtn && mainForm) {
    mobileAtcBtn.addEventListener('click', () => {
      // Trigger the main form submit
      const submitBtn = mainForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.click();
      }
    });
  }
});
