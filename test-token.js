/**
 * Test if the API token is working
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function testToken() {
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
            shop {
              name
              email
              primaryDomain {
                url
              }
            }
            products(first: 3, query: "published_status:published") {
              edges {
                node {
                  id
                  title
                  onlineStoreUrl
                  publishedOnCurrentPublication
                }
              }
            }
          }
        `
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('API Errors:', JSON.stringify(data.errors, null, 2));
      console.log('\n❌ Token is NOT working or lacks permissions');
      return;
    }

    console.log('✅ Token is working!\n');
    console.log('Shop Info:');
    console.log(JSON.stringify(data.data.shop, null, 2));

    console.log('\n\nFirst 3 Published Products:');
    console.log(JSON.stringify(data.data.products.edges, null, 2));

    // Check if products have online store URLs
    const productsWithUrls = data.data.products.edges.filter(p => p.node.onlineStoreUrl);
    console.log(`\n\nProducts with online store URLs: ${productsWithUrls.length}`);

    if (productsWithUrls.length > 0) {
      console.log('\nExample product URL:', productsWithUrls[0].node.onlineStoreUrl);
    }

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

testToken();
