/**
 * Script to get the correct Online Store Publication ID
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function getPublicationId() {
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
            publications(first: 10) {
              edges {
                node {
                  id
                  name
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

    console.log('Available publications:');
    console.log(JSON.stringify(data.data.publications.edges, null, 2));

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

getPublicationId();
