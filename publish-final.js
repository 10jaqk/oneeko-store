/**
 * Final attempt - use ProductPublication REST endpoint
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';
const PUBLICATION_ID = 285832413501; // Online Store

async function publishAllProductsFinal() {
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
    let alreadyPublished = 0;
    let errorCount = 0;

    for (const product of productsData.products) {
      console.log(`Publishing: ${product.title.substring(0, 60)}...`);

      // Use the product_publications endpoint
      const publishUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/product_publications.json`;

      const publishResponse = await fetch(publishUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({
          product_publication: {
            product_id: product.id,
            publication_id: PUBLICATION_ID
          }
        })
      });

      const responseText = await publishResponse.text();

      if (publishResponse.status === 201) {
        console.log(`  ✓ Published successfully`);
        successCount++;
      } else if (publishResponse.status === 422) {
        // Already published
        console.log(`  ✓ Already published`);
        alreadyPublished++;
      } else {
        console.log(`  ✗ Error (${publishResponse.status}):`);
        console.log(`     Response: ${responseText}`);
        console.log(`     Headers: ${JSON.stringify(Object.fromEntries(publishResponse.headers))}`);
        errorCount++;
      }
    }

    console.log(`\n\nFinal Summary:`);
    console.log(`Newly published: ${successCount}`);
    console.log(`Already published: ${alreadyPublished}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`\nTotal products should now be visible: ${successCount + alreadyPublished}`);
    console.log(`\nCheck: https://${SHOP_NAME}.myshopify.com/collections/all`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

publishAllProductsFinal();
