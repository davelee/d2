const PHOTOGRAPHY_BUCKET = 'https://s3-us-west-1.amazonaws.com/davelee-photography/';

const getAllPhotos = (req, res, next) => {
  res.status(200).send(
    [
      {
        'caption': 'Tasting garlic cloves.',
        'url': PHOTOGRAPHY_BUCKET + 'img026.png'
      },
      {
        'caption': 'Jermaine.',
        'url': PHOTOGRAPHY_BUCKET + 'img068.png'
      },
      {
        'caption': 'At Gilroy Garlic Festival.',
        'url': PHOTOGRAPHY_BUCKET + 'img034.png'
      },
      {
        'caption': 'Praveen.',
        'url': PHOTOGRAPHY_BUCKET + 'img052.png'
      },
      {
        'caption': 'Turkey leg at the Presidio.',
        'url': PHOTOGRAPHY_BUCKET + 'img059.png'
      },
      {
        'caption': 'Bikers at the Presidio.',
        'url': PHOTOGRAPHY_BUCKET + 'img065.png'
      },
      {
        'caption': 'Aditya doing Bruce Lee.',
        'url': PHOTOGRAPHY_BUCKET + 'img076.png'
      },
      {
        'caption': "Luke's Local.",
        'url': PHOTOGRAPHY_BUCKET + 'img081.png'
      },
      {
        'caption': 'The N.',
        'url': PHOTOGRAPHY_BUCKET + 'img084.png'
      },
    ]
  );
}

module.exports = {
  getAllPhotos,
}
