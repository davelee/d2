const _ = require('lodash')
const sharp = require('sharp')
const request = require('request');
const PHOTOGRAPHY_BUCKET = 'https://dc4t2sxxqv4kx.cloudfront.net/';
const jsonPhotos = require('./photos.json')

const getAllPhotos = (req, res, next) => {
  let photos = _.cloneDeep(jsonPhotos)
  res.status(200).send(
    photos.map((p) => {
      p.url = PHOTOGRAPHY_BUCKET + p.url;
      return p;
    })
  );
}

const getThumbnail = (req, res, next) => {
  try {
    const imageId = req.params['image_id'];
    const r = request(PHOTOGRAPHY_BUCKET + "mini/" + imageId)

    let transform = sharp().resize(350);
    res.set('Content-Type', 'image/png')
    r.pipe(transform).pipe(res);
  }
  catch(e) {
    console.log(e)
    res.status(404).send("File not found.")
  }
}

module.exports = {
  getAllPhotos,
  getThumbnail,
}
