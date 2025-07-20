# Favicon Generation Guide

This guide provides multiple methods to create favicon files from your Smith-logo.png image.

## Method 1: Online Favicon Generator (Recommended)

1. Go to [favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)
2. Upload your `src/assets/Smith-logo.png` file
3. Click "Download" to get the favicon package
4. Extract the downloaded ZIP file
5. Copy the following files to your `public` directory:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png

## Method 2: Using PowerShell Script (Windows)

1. Install ImageMagick from [imagemagick.org/script/download.php](https://imagemagick.org/script/download.php)
2. Open PowerShell in your project directory
3. Run the script: `.\generate-favicons.ps1`

## Method 3: Using Node.js Script

1. Install the required package: `npm install sharp`
2. Run the script: `node generate-favicons.js`

## Manual Verification

After generating the favicon files, check that the following files exist in your `public` directory:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png

Your website should now display the Smith logo as its favicon in browser tabs and bookmarks.
