/**
 * Script to check collections and products
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function checkCollections() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/graphql.json`;

  try {
    // Get all collections
    const collectionsResponse = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query {
            collections(first: 50) {
              edges {
                node {
                  id
                  handle
                  title
                  productsCount {
                    count
                  }
                }
              }
            }
          }
        `
      })
    });

    const collectionsData = await collectionsResponse.json();

    if (collectionsData.errors) {
      console.error('Errors:', collectionsData.errors);
      return;
    }

    console.log('Collections found:');
    console.log(JSON.stringify(collectionsData.data.collections.edges, null, 2));

    // Also check products
    const productsResponse = await fetch(shopifyApiUrl, {
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
                  publishedOnCurrentPublication
                  collections(first: 5) {
                    edges {
                      node {
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
    });

    const productsData = await productsResponse.json();
    console.log('\n\nFirst 5 products and their collections:');
    console.log(JSON.stringify(productsData.data.products.edges, null, 2));

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

checkCollections();
