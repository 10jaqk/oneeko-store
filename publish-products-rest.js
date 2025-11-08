/**
 * Publish products using REST API
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function publishProductsREST() {
  try {
    // First, get all products using REST API
    console.log('Fetching all products...');
    const productsUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/products.json`;

    const productsResponse = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
    });

    const productsData = await productsResponse.json();

    if (!productsData.products) {
      console.error('Error fetching products:', productsData);
      return;
    }

    console.log(`Found ${productsData.products.length} products\n`);

    // Get the Online Store sales channel ID
    console.log('Getting sales channels...');
    const channelsUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/publications.json`;

    const channelsResponse = await fetch(channelsUrl, {
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
    });

    const channelsData = await channelsResponse.json();

    console.log('Available publications:', JSON.stringify(channelsData, null, 2));

    // Find Online Store
    const onlineStore = channelsData.publications?.find(p => p.name === 'Online Store');

    if (!onlineStore) {
      console.error('Could not find Online Store publication!');
      return;
    }

    console.log(`\nOnline Store publication ID: ${onlineStore.id}\n`);

    // Publish each product
    let successCount = 0;
    let errorCount = 0;

    for (const product of productsData.products) {
      console.log(`Publishing: ${product.title}`);

      const publishUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/publications/${onlineStore.id}/resource_feedbacks.json`;

      const publishResponse = await fetch(publishUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({
          resource_feedback: {
            resource_id: product.id,
            resource_type: 'Product',
            state: 'requires_action',
            messages: ['Published to Online Store']
          }
        })
      });

      const publishData = await publishResponse.json();

      if (publishResponse.ok) {
        console.log(`  ✓ Published`);
        successCount++;
      } else {
        console.log(`  ✗ Error:`, publishData);
        errorCount++;
      }
    }

    console.log(`\n\nSummary:`);
    console.log(`Success: ${successCount}`);
    console.log(`Errors: ${errorCount}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

publishProductsREST();
