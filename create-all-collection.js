/**
 * Script to create an "All Products" collection
 */

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function createAllProductsCollection() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/graphql.json`;

  try {
    // Create collection that includes all products
    const response = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          mutation createCollection($input: CollectionInput!) {
            collectionCreate(input: $input) {
              collection {
                id
                title
                handle
              }
              userErrors {
                field
                message
              }
            }
          }
        `,
        variables: {
          input: {
            title: "All Products",
            handle: "all",
            ruleSet: {
              appliedDisjunctively: false,
              rules: [
                {
                  column: "VARIANT_PRICE",
                  relation: "GREATER_THAN",
                  condition: "0"
                }
              ]
            }
          }
        }
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      return;
    }

    if (data.data.collectionCreate.userErrors.length > 0) {
      console.error('User Errors:', data.data.collectionCreate.userErrors);
      return;
    }

    console.log('Successfully created "All Products" collection:');
    console.log(JSON.stringify(data.data.collectionCreate.collection, null, 2));

    // Now publish it to Online Store
    const collectionId = data.data.collectionCreate.collection.id;

    const publishResponse = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          mutation publishCollection($id: ID!, $input: [PublicationInput!]!) {
            publishablePublish(id: $id, input: $input) {
              publishable {
                ... on Collection {
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
          id: collectionId,
          input: [
            {
              publicationId: "gid://shopify/Publication/285832413501"
            }
          ]
        }
      })
    });

    const publishData = await publishResponse.json();

    if (publishData.errors) {
      console.error('Publish errors:', publishData.errors);
    } else if (publishData.data.publishablePublish.userErrors.length > 0) {
      console.error('User errors:', publishData.data.publishablePublish.userErrors);
    } else {
      console.log('\n✓ Collection published to Online Store!');
      console.log('\nYour products should now be visible at:');
      console.log(`https://${SHOP_NAME}.myshopify.com/collections/all`);
    }

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

createAllProductsCollection();
