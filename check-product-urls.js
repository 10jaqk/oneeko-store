/**
 * Get actual product URLs to test
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function getProductUrls() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/graphql.json`;

  try {
    const response = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                  status
                }
              }
            }
            collections(first: 10) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        `
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Errors:', data.errors);
      return;
    }

    console.log('Collections:');
    data.data.collections.edges.forEach(c => {
      console.log(`  - ${c.node.title}: https://${SHOP_NAME}.myshopify.com/collections/${c.node.handle}`);
    });

    console.log('\n\nProducts (should be accessible at these URLs):');
    data.data.products.edges.forEach(p => {
      console.log(`  - ${p.node.title}`);
      console.log(`    Status: ${p.node.status}`);
      console.log(`    URL: https://${SHOP_NAME}.myshopify.com/products/${p.node.handle}`);
      console.log('');
    });

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

getProductUrls();
