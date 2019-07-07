const path = require('path');
const config = require('../dist/config');
let manifest = require('../dist/manifest.json');
const isDev = (process.env.NODE_ENV === 'development');

module.exports = (req, res) => {
  // Since every time we rebuild with webpack new bundle files get generated,
  // we need to clear the previous manifest that was imported.
  if (isDev) {
    delete require.cache[require.resolve('../dist/manifest.json')];
    manifest = require('../dist/manifest.json');
  }

  const html = (
    `<!DOCTYPE html>
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
