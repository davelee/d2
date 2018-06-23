const PHOTOGRAPHY_BUCKET = 'https://dc4t2sxxqv4kx.cloudfront.net/';

const getAllPhotos = (req, res, next) => {
  const photos = [
    {
      'caption': 'San Francisco, 2018',
      'url': '000281710002.png'
    },
    {
      'caption': 'San Francisco, 2018',
      'url': '000281680003.png'
    }, {
      'caption': 'San Francisco, 2018',
      'url': '000281680004.png'
    }, {
      'caption': 'San Francisco, 2018',
      'url': '000281680007.png'
    }, {
      'caption': 'San Francicsco, 2018',
      'url': '000281690002.png'
    }, {
      'caption': 'San Francisco 2018',
      'url': '000281690004.png'
    }, {
      'caption': 'San Francisco, 2018',
      'url': '000281690011.png'
    }, {
      'caption': 'Pacifica, 2018',
      'url': '000281710013.png'
    }, {
      'caption': 'Pacifica, 2018',
      'url': '000281680008.png'
    }, {
      'caption': 'Pacifica, 2018',
      'url': '000281680009.png'
    }, {
      'caption': 'Pacifica, 2018',
      'url': '000281680011.png'
    }, {
      'caption': 'San Mateo, 2018',
      'url': '000281690005.png'
    }, {
      'caption': 'San Mateo, 2018',
      'url': '000281690006.png'
    }, {
      'caption': 'Redwood City, 2018',
      'url': '000281690008.png'
    }, {
      'caption': 'San Mateo, 2018',
      'url': '000281690010.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281700001.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281700002.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700004.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700005.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700006.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700007.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700008.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700010.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700011.png'
    }, {
      'caption': 'Chantilly, 2018',
      'url': '000281700012.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710005.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710006.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710007.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710008.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710009.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710010.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710011.png'
    }, {
      'caption': 'Paris, 2018',
      'url': '000281710012.png'
    },
    {
      'caption': 'Paris, 2018',
      'url': 'img178.png',
    },
    {
      'caption': 'Paris, 2018',
      'url': 'img179.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img180.png',
    },
    {
      'caption': 'Paris, 2018',
      'url': 'img197.png',
    },
    {
      'caption': 'Place des Vosges, Paris, 2018.',
      'url': 'img199.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img200.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img202.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img203.png',
    },
    {
      'caption': 'Pizza Popolare, Paris, 2018.',
      'url': 'img206.png',
    },
    {
      'caption': 'Pizza Popolare, Paris, 2018.',
      'url': 'img207.png',
    },
    {
      'caption': 'Pizza Popolare, Paris, 2018.',
      'url': 'img208.png',
    },
    {
      'caption': 'National Archives, in The Marais, Paris, 2018',
      'url': 'img216.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img217.png',
    },
    {
      'caption': 'Paris, 2018.',
      'url': 'img218.png',
    },
    {
      'caption': 'Chateau de Fontainebleau. 2018',
      'url': 'img219.png',
    },
    {
      'caption': 'Chateau de Fontainebleau, 2018.',
      'url': 'img224.png',
    },
    {
      'caption': 'Chateau de Fontainebleau, 2018',
      'url': 'img228.png',
    },
    {
      'caption': 'Chateau de Fontainebleau, 2018.',
      'url': 'img229.png',
    },
    {
      'caption': 'Fontainebleau, 2018.',
      'url': 'img230.png',
    },
    {
      'caption': 'Fontainebleau, 2018',
      'url': 'img223.png',
    },
    {
      'caption': 'The Marais, Paris, 2018',
      'url': 'img231.png',
    },
    {
      'caption': 'The Marais, Paris, 2018',
      'url': 'img232.png',
    },
    {
      'caption': 'Fontainebleau, 2018',
      'url': 'img233.png',
    },
    {
      'caption': 'Bay Area.',
      'url': 'cimg22.png',
    },
    {
      'caption': 'Tasting garlic cloves.',
      'url': 'img026.png'
    },
    {
      'caption': 'Jermaine.',
      'url': 'img068.png'
    },
    {
      'caption': 'Mom, Downtown San Francisco.',
      'url': 'img158.png',
    },
    {
      'caption': 'At Gilroy Garlic Festival.',
      'url': 'img034.png'
    },
    {
      'caption': 'Sunset @ Ocean Beach.',
      'url': 'cimg3.png',
    },
    {
      'caption': 'Bib-ant.',
      'url': 'img036.png',
    },
    {
      'caption': 'Tuolomne Meadows Campground.',
      'url': 'img134.png',
    },
    {
      'caption': 'Grilling at Gilroy Garlic Festival.',
      'url': 'img049.png',
    },
    {
      'caption': 'Praveen.',
      'url': 'img052.png',
    },
    {
      'caption': 'Turkey leg at the Presidio.',
      'url': 'img059.png',
    },
    {
      'caption': 'Main Post, Presidio.',
      'url': 'img061.png',
    },
    {
      'caption': 'Bikers at the Presidio.',
      'url': 'img065.png'
    },
    {
      'caption': 'Jorge @ SendGrid',
      'url': 'img071.png',
    },
    {
      'caption': 'Aditya doing Bruce Lee.',
      'url': 'img076.png',
    },
    {
      'caption': 'Guy at the park.',
      'url': 'img080.png',
    },
    {
      'caption': "Luke's Local.",
      'url': 'img081.png',
    },
    {
      'caption': 'Waiting for The N.',
      'url': 'img085.png',
    },
    {
      'caption': 'The N.',
      'url': 'img084.png',
    },
    {
      'caption': 'Sam.',
      'url': 'cimg20.png',
    },
    {
      'caption': 'Grizzly Peak.',
      'url': 'cimg21.png',
    },
    {
      'caption': 'Aditya @ Thanksgiving, Berkeley, CA.',
      'url': 'cimg23.png',
    },
    {
      'caption': 'Mom cooking Thanksgiving Dinner.',
      'url': 'cimg24.png',
    },
    {
      'caption': `"They are birds aren't they?"`,
      'url': 'img086.png',
    },
    {
      'caption': 'Russian River.',
      'url': 'img087.png',
    },
    {
      'caption': 'Connie @ Yerbaaa buenaaaaa.',
      'url': 'img096.png',
    },
    {
      'caption': 'Goat Rock, Sonoma.',
      'url': 'img109.png',
    },
    {
      'caption': 'Connie @ Goat Rock Beach.',
      'url': 'img112.png',
    },
    {
      'caption': 'A truck.',
      'url': 'img119.png',
    },
    {
      'caption': 'The Switzerland of California.',
      'url': 'img136.png',
    },
    {
      'caption': 'Tufa formation @ Mono Lake.',
      'url': 'img138.png',
    },
    {
      'caption': 'Oh hi Mark.',
      'url': 'img142.png',
    },
    {
      'caption': 'Couple of mischief-makers waiting for cable car.',
      'url': 'img152-edit.png',
    },
    {
      'caption': 'A Connie.',
      'url': 'img155.png',
    },
    {
      'caption': 'Fam.',
      'url': 'img157.png',
    },
    {
      'caption': 'Conductor.',
      'url': 'img159.png',
    },
    {
      'caption': 'My toe and the beach.',
      'url': 'cimg0.png',
    },
    {
      'caption': 'Connie + sky @ Ocean Beach.',
      'url': 'cimg1.png',
    },
    {
      'caption': 'Dad.',
      'url': 'cimg2.png',
    },
    {
      'caption': `Flappin' the lips`,
      'url': 'cimg9.png',
    },
    {
      'caption': 'Picnic at Presidio',
      'url': 'cimg17.png',
    },
    {
      'caption': 'Patient subjects.',
      'url': 'cimg19.png',
    },
    {
      'caption': 'Insuck, Reno, NV.',
      'url': 'cimg30.png',
    },
    {
      'caption': 'Self Portrait.',
      'url': 'cimg29.png',
    },
  ];
  res.status(200).send(
    photos.map((photo) => {
      photo.url = PHOTOGRAPHY_BUCKET + photo.url;
      return photo;
    })
  );
}

module.exports = {
  getAllPhotos,
}
