const path = require('path');
const config = require('../dist/config');
let manifest = require('../dist/manifest.json');
const isDev = (process.env.NODE_ENV === 'development');

const PHOTOGRAPHY_BUCKET = 'https://dc4t2sxxqv4kx.cloudfront.net/';

module.exports = (req, res) => {
  // Since every time we rebuild with webpack new bundle files get generated,
  // we need to clear the previous manifest that was imported.
  if (isDev) {
    delete require.cache[require.resolve('../dist/manifest.json')];
    manifest = require('../dist/manifest.json');
  }

  let ogImageURL = PHOTOGRAPHY_BUCKET + "000281710012.png";
  
  if (req.query) {
    let imgName = req.query['p']
    ogImageURL = PHOTOGRAPHY_BUCKET + imgName;
  }

  const html = (
    `<!DOCTYPE html>
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Dave Lee Photography">
      <meta property="og:type" content="article">
      <meta property="og:image" content="${ogImageURL}">
      <meta property="og:description" content="A photographic thread; basting the analog and digital worlds together.">
      <meta property="og:url" content="https://davelee.io">
      <head>
        <title>davelee.io</title>
        <link rel='stylesheet' href='${manifest['app.css']}'>
        <script src='${manifest['vendor.js']}'></script>
      </head>
      <body>
        <script src='${manifest['app.js']}'></script>
        <div id='react-render'></div>
      </body>
    </html>`
  );

  res.send(html);
};
