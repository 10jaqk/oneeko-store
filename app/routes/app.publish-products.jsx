import { useEffect } from "react";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  // First, get all products
  const productsResponse = await admin.graphql(
    `#graphql
      query GetAllProducts {
        products(first: 250) {
          edges {
            node {
              id
              title
              status
              publishedOnCurrentPublication
            }
          }
        }
      }`
  );

  const productsData = await productsResponse.json();
  const products = productsData.data.products.edges;

  // Publish each product to the Online Store
  const publishResults = [];

  for (const { node: product } of products) {
    if (!product.publishedOnCurrentPublication) {
      const publishResponse = await admin.graphql(
        `#graphql
          mutation publishProduct($id: ID!, $input: [PublicationInput!]!) {
            publishablePublish(id: $id, input: $input) {
              publishable {
                publishedOnCurrentPublication
              }
              userErrors {
                field
                message
              }
            }
          }`,
        {
          variables: {
            id: product.id,
            input: [
              {
                publicationId: "gid://shopify/Publication/173441319197" // Online Store publication ID
              }
            ]
          }
        }
      );

      const publishData = await publishResponse.json();
      publishResults.push({
        title: product.title,
        success: !publishData.data?.publishablePublish?.userErrors?.length,
        errors: publishData.data?.publishablePublish?.userErrors || []
      });
    } else {
      publishResults.push({
        title: product.title,
        success: true,
        alreadyPublished: true
      });
    }
  }

  return {
    totalProducts: products.length,
    publishedCount: publishResults.filter(r => r.success).length,
    results: publishResults
  };
};

export default function PublishProducts() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";

  useEffect(() => {
    if (fetcher.data?.publishedCount) {
      shopify.toast.show(`Published ${fetcher.data.publishedCount} products to Online Store`);
    }
  }, [fetcher.data?.publishedCount, shopify]);

  const publishProducts = () => fetcher.submit({}, { method: "POST" });

  return (
    <s-page heading="Publish Products to Online Store">
      <s-section heading="Publish All Products">
        <s-paragraph>
          This will publish all your products to the Online Store sales channel,
          making them visible on your website.
        </s-paragraph>

        <s-stack direction="inline" gap="base">
          <s-button
            onClick={publishProducts}
            {...(isLoading ? { loading: true } : {})}
            variant="primary"
          >
            Publish All Products
          </s-button>
        </s-stack>

        {fetcher.data && (
          <s-section heading="Results">
            <s-stack direction="block" gap="base">
              <s-paragraph>
                Total products: {fetcher.data.totalProducts}
              </s-paragraph>
              <s-paragraph>
                Successfully published: {fetcher.data.publishedCount}
              </s-paragraph>

              <s-box
                padding="base"
                borderWidth="base"
                borderRadius="base"
                background="subdued"
              >
                <pre style={{ margin: 0 }}>
                  <code>{JSON.stringify(fetcher.data.results, null, 2)}</code>
                </pre>
              </s-box>
            </s-stack>
          </s-section>
        )}
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
