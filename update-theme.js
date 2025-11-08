/**
 * Script to update theme files on Shopify
 */

import fs from 'fs';
import path from 'path';

const SHOP_NAME = 'oneeko';
const ACCESS_TOKEN = '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';

async function getThemeId() {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/themes.json`;

  const response = await fetch(shopifyApiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ACCESS_TOKEN,
    },
  });

  const data = await response.json();

  // Find the main/published theme
  const mainTheme = data.themes.find(theme => theme.role === 'main');

  if (!mainTheme) {
    console.error('No main theme found!');
    return null;
  }

  console.log(`Found main theme: ${mainTheme.name} (ID: ${mainTheme.id})`);
  return mainTheme.id;
}

async function uploadAsset(themeId, assetKey, assetValue) {
  const shopifyApiUrl = `https://${SHOP_NAME}.myshopify.com/admin/api/2024-01/themes/${themeId}/assets.json`;

  const response = await fetch(shopifyApiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ACCESS_TOKEN,
    },
    body: JSON.stringify({
      asset: {
        key: assetKey,
        value: assetValue
      }
    })
  });

  const data = await response.json();

  if (data.errors) {
    console.error(`  Error uploading ${assetKey}:`, data.errors);
    return false;
  }

  return true;
}

async function updateTheme() {
  try {
    // Get the theme ID
    const themeId = await getThemeId();
    if (!themeId) return;

    console.log('\nUploading theme files...\n');

    // Files to upload
    const filesToUpload = [
      {
        key: 'templates/collection.liquid',
        path: '/home/mihai/oneeko-theme/templates/collection.liquid'
      },
      {
        key: 'templates/product.liquid',
        path: '/home/mihai/oneeko-theme/templates/product.liquid'
      }
    ];

    let successCount = 0;
    let failCount = 0;

    for (const file of filesToUpload) {
      console.log(`Uploading ${file.key}...`);

      const fileContent = fs.readFileSync(file.path, 'utf8');
      const success = await uploadAsset(themeId, file.key, fileContent);

      if (success) {
        console.log(`  ✓ Successfully uploaded ${file.key}`);
        successCount++;
      } else {
        console.log(`  ✗ Failed to upload ${file.key}`);
        failCount++;
      }
    }

    console.log(`\n\nSummary:`);
    console.log(`Successfully uploaded: ${successCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`\nTheme has been updated!`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

updateTheme();
