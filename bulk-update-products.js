/**
 * Bulk update products to set them as published
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function bulkUpdateProducts() {
  try {
    // Get all products
    console.log('Fetching all products...');
    const productsUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/products.json?limit=250`;

    const productsResponse = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
    });

    const productsData = await productsResponse.json();
    console.log(`Found ${productsData.products.length} products\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const product of productsData.products) {
      console.log(`Updating: ${product.title.substring(0, 60)}...`);

      // Update the product to set published_scope to 'web'
      const updateUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/products/${product.id}.json`;

      const updateResponse = await fetch(updateUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({
          product: {
            id: product.id,
            published_scope: 'web'
          }
        })
      });

      if (updateResponse.ok) {
        console.log(`  ✓ Updated successfully`);
        successCount++;
      } else {
        const errorText = await updateResponse.text();
        console.log(`  ✗ Error (${updateResponse.status}): ${errorText}`);
        errorCount++;
      }
    }

    console.log(`\n\nFinal Summary:`);
    console.log(`Successfully updated: ${successCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`\nCheck your store now: https://${SHOP_NAME}.myshopify.com/collections/all`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

bulkUpdateProducts();
