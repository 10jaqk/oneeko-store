/**
 * Script to publish all products to the Online Store sales channel
 *
 * This script uses the Shopify Admin API to:
 * 1. Fetch all products from your store
 * 2. Publish them to the Online Store channel
 */

// Admin API access token from Shopify
const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function publishAllProducts() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/graphql.json`;

  try {
    // Step 1: Get all products
    console.log('Fetching all products...');
    const productsResponse = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query GetAllProducts {
            products(first: 250) {
              edges {
                node {
                  id
                  title
                  status
                }
              }
            }
          }
        `
      })
    });

    const productsData = await productsResponse.json();

    if (productsData.errors) {
      console.error('Error fetching products:', productsData.errors);
      return;
    }

    const products = productsData.data.products.edges;
    console.log(`Found ${products.length} products`);

    // Step 2: Publish each product to Online Store
    let publishedCount = 0;
    let alreadyPublishedCount = 0;

    for (const { node: product } of products) {
      console.log(`\nPublishing: ${product.title}`);

      const publishResponse = await fetch(shopifyApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({
          query: `
            mutation publishProduct($id: ID!, $input: [PublicationInput!]!) {
              publishablePublish(id: $id, input: $input) {
                publishable {
                  ... on Product {
                    id
                    title
                  }
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `,
          variables: {
            id: product.id,
            input: [
              {
                publicationId: "gid://shopify/Publication/285832413501" // Online Store
              }
            ]
          }
        })
      });

      const publishData = await publishResponse.json();

      if (publishData.errors) {
        console.error(`  Error: ${JSON.stringify(publishData.errors)}`);
      } else if (publishData.data.publishablePublish.userErrors.length > 0) {
        const errors = publishData.data.publishablePublish.userErrors;
        // Check if already published
        if (errors[0].message.includes('already published')) {
          console.log(`  Already published ✓`);
          alreadyPublishedCount++;
        } else {
          console.error(`  User errors: ${JSON.stringify(errors)}`);
        }
      } else {
        console.log(`  Successfully published ✓`);
        publishedCount++;
      }
    }

    console.log(`\n\nSummary:`);
    console.log(`Total products: ${products.length}`);
    console.log(`Newly published: ${publishedCount}`);
    console.log(`Already published: ${alreadyPublishedCount}`);
    console.log(`\nAll products should now be visible on your store!`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the script
publishAllProducts();
