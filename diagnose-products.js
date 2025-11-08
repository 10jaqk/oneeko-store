/**
 * Deep dive into product status to see what's blocking visibility
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function diagnoseProducts() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/graphql.json`;

  try {
    // Get detailed product information
    const response = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 3) {
              edges {
                node {
                  id
                  title
                  status
                  publishedOnPublication(publicationId: "gid://shopify/Publication/285832413501")
                  resourcePublicationOnCurrentPublication {
                    publication {
                      name
                      id
                    }
                    publishDate
                    isPublished
                  }
                  publications(first: 10) {
                    edges {
                      node {
                        name
                        id
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

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', JSON.stringify(data.errors, null, 2));
      return;
    }

    console.log('Product Publication Status:');
    console.log(JSON.stringify(data.data.products.edges, null, 2));

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

diagnoseProducts();
