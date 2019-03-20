const postcssNesting = require('postcss-nesting');
const postcssAddFallback = require('../../lib/postcss-add-fallback/index.js');

module.exports = {
  plugins: [
    postcssNesting(),
    postcssAddFallback({importFrom: "./dist/themes-next/sap_fiori_3/parameters-bundle.css"}),
  ]
}
