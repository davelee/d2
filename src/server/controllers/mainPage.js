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

  const imgName = req.query['p'] || "000281710012.png";
  const ogImageURL = "https://davelee.io/ogimage/" + imgName;

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
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-54PC99X');</script>
        <!-- End Google Tag Manager -->
      </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54PC99X"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        <script src='${manifest['app.js']}'></script>
        <div id='react-render'></div>
      </body>
    </html>`
  );

  res.send(html);
};
