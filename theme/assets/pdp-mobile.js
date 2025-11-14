document.addEventListener('DOMContentLoaded', () => {
  // Update sticky bar price on variant change
  const priceEl = document.querySelector('[data-sticky-price]');
  const jsonEl  = document.querySelector('[data-product-json]');
  if (priceEl && jsonEl) {
    try {
      const data = JSON.parse(jsonEl.textContent);
      const form = document.querySelector('form[action="/cart/add"]');
      const selector = form && form.querySelector('[name="id"]');
      const formatMoney = (cents) => (Shopify && Shopify.formatMoney) ? Shopify.formatMoney(cents) : `${(cents/100).toFixed(2)}`;

      const update = () => {
        const id = selector ? Number(selector.value) : (data?.variants?.[0]?.id);
        const v  = data.variants.find(x => x.id === id) || data.variants[0];
        if (v) priceEl.textContent = formatMoney(v.price);
        // enable/disable buttons on availability
        document.querySelectorAll('[data-sticky-atc],[data-sticky-buy]').forEach(btn => btn.disabled = !v.available);
      };
      selector && selector.addEventListener('change', update);
      update();
    } catch(e) { console.warn('Sticky price init failed', e); }
  }

  // Sticky buttons
  async function addToCart(variantId){
    const res = await fetch('/cart/add.js', {
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({ id: variantId, quantity: 1 })
    });
    if(!res.ok) throw new Error((await res.json())?.description || 'Add to cart failed');
  }
  async function refreshCart(){
    const resp = await fetch('/?sections=cart-drawer,cart-icon-bubble',{headers:{'Accept':'application/json'}});
    const json = await resp.json();
    const drawer = document.querySelector('[data-cart-drawer]');
    if (drawer && json['cart-drawer']) drawer.innerHTML = json['cart-drawer'];
    const bubble = document.querySelector('[data-cart-bubble]');
    if (bubble && json['cart-icon-bubble']) bubble.outerHTML = json['cart-icon-bubble'];
    document.documentElement.classList.add('cart-drawer--open');
  }

  const form = document.querySelector('form[action="/cart/add"]');
  const variantInput = form?.querySelector('[name="id"]');
  const btnATC = document.querySelector('[data-sticky-atc]');
  const btnBuy = document.querySelector('[data-sticky-buy]');

  btnATC?.addEventListener('click', async (e)=>{
    e.preventDefault();
    try { await addToCart(Number(variantInput.value)); await refreshCart(); }
    catch(err){ alert(err.message || 'Add failed'); }
  });

  btnBuy?.addEventListener('click', async (e)=>{
    e.preventDefault();
    try { await addToCart(Number(variantInput.value)); window.location.href='/checkout'; }
    catch(err){ alert(err.message || 'Buy failed'); }
  });

  // Ensure thumbnail row is swipeable (no JS required, CSS handles overflow).
});
