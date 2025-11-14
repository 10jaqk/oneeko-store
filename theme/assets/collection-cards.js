document.addEventListener('DOMContentLoaded', () => {
  async function addVariant(variantId, qty=1){
    const res = await fetch('/cart/add.js', {
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({ id: variantId, quantity: qty })
    });
    if(!res.ok){ throw new Error((await res.json()).description || 'Add to cart failed'); }
  }

  async function refreshCartUI(){
    // Adjust section handles if your theme uses different ones
    const data = await fetch('/?sections=cart-drawer,cart-icon-bubble', {headers:{'Accept':'application/json'}}).then(r=>r.json());
    const drawerHost = document.querySelector('[data-cart-drawer]');
    if (drawerHost && data['cart-drawer']) drawerHost.innerHTML = data['cart-drawer'];
    const bubble = document.querySelector('[data-cart-bubble]');
    if (bubble && data['cart-icon-bubble']) bubble.outerHTML = data['cart-icon-bubble'];
    document.documentElement.classList.add('cart-drawer--open');
  }

  // Quick Add
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-quick-add]');
    if(!btn) return;
    e.preventDefault();
    const variant = btn.dataset.variant;
    try{
      await addVariant(variant, 1);
      await refreshCartUI();
    }catch(err){ console.error(err); alert(err.message || 'Add to cart failed'); }
  });

  // Quick Buy
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-quick-buy]');
    if(!btn) return;
    e.preventDefault();
    const variant = btn.dataset.variant;
    try{
      await addVariant(variant, 1);
      window.location.href = '/checkout';
    }catch(err){ console.error(err); alert(err.message || 'Buy Now failed'); }
  });
});
