const https = require('https');
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const config = require('./dist/config');
const index = require('./handlers/index');
const photography  = require('./handlers/photography');

const app = express();

// config
app.set('trust proxy', true);
app.use(helmet());
app.use(bodyParser.json());

// static
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use("/keybase.txt", express.static(__dirname + '/keybase.txt'));

// routes
app.get('/ogimage/:image_id', photography.getThumbnail);
app.get('/api/photography', photography.getAllPhotos);
app.get('*', index);

// server
server = process.env.NODE_ENV === "production" ?
  https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/www.davelee.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.davelee.io/fullchain.pem')
  }, app) :
  http.createServer(app);

// listen
server.listen(config.port)

module.exports = app;
