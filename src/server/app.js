const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const config = require('./dist/config');

const mainPageController = require('./controllers/mainPage');
const photographyController = require('./controllers/photography');

const isDev = (process.env.NODE_ENV === 'development');
const app = express();

//----- APP CONFIG -----/
app.set('trust proxy', true);
app.use(helmet());

//----- STATIC ROUTES -----/
app.use('/dist', express.static(path.resolve(__dirname, '../../dist'), {}));
app.use("/keybase.txt", express.static(__dirname + '/keybase.txt'));

//----- MORE APP CONFIG -----/
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/ogimage/:image_id', photographyController.getThumbnail);

app.get('/api/photography', photographyController.getAllPhotos);
app.get('/keybase.txt')
app.get('*', mainPageController);

app.use(function (err, req, res, next) {
  res.status(500).send("Internal server error.")
})


const https = require('https');
const fs = require('fs');

const httpsOptions = isDev ?
  {
    key: fs.readFileSync(path.join(__dirname, 'dev_cert/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'dev_cert/cert.pem'))
  } : {
    key: fs.readFileSync('/etc/letsencrypt/live/www.davelee.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.davelee.io/fullchain.pem')
  };

https.createServer(httpsOptions, app).listen(config.port);

module.exports = app;
