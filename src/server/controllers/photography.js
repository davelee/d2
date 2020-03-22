const sharp = require('sharp')
const request = require('request');

const PHOTOGRAPHY_BUCKET = 'https://dc4t2sxxqv4kx.cloudfront.net/';

const getAllPhotos = (req, res, next) => {
  const photos = [
    {
      caption: '2020',
      url: '000562960001.jpg'
    }, {
      caption: '2020',
      url: '000562960002.jpg'
    }, {
      caption: '2020',
      url: '000562960003.jpg'
    }, {
      caption: '2020',
      url: '000562960008.jpg'
    }, {
      caption: '2020',
      url: '000562960010.jpg'
    }, {
      caption: '2020',
      url: '000562960012.jpg'
    }, {
      caption: '2020',
      url: '000562960013.jpg'
    }, {
      caption: '2020',
      url: '000562960014.jpg'
    }, {
      caption: '2020',
      url: '000562960016.jpg'
    }, {
      caption: '2020',
      url: '000562960019.jpg'
    }, {
      caption: '2020',
      url: '000562960022.jpg'
    }, {
      caption: '2020',
      url: '000562960024.jpg'
    }, {
      caption: '2020',
      url: '000562960026.jpg'
    }, {
      caption: '2020',
      url: '000562960030.jpg'
    }, {
      caption: '2020',
      url: '000562960032.jpg'
    }, {
      caption: '2020',
      url: '000562960035.jpg'
    }, {
      caption: '2020',
      url: '000562960036.jpg'
    }, {
      caption: '2020',
      url: '000562960037.jpg'
    }, {
      caption: '2020',
      url: '000562970006.jpg'
    }, {
      caption: '2020',
      url: '000562970008.jpg'
    }, {
      caption: '2020',
      url: '000562970009.jpg'
    }, {
      caption: '2020',
      url: '000562970011.jpg'
    }, {
      caption: '2020',
      url: '000562970015.jpg'
    }, {
      caption: '2020',
      url: '000562970017.jpg'
    }, {
      caption: '2020',
      url: '000562970019.jpg'
    }, {
      caption: '2020',
      url: '000562970021.jpg'
    }, {
      caption: '2020',
      url: '000562970023.jpg'
    }, {
      caption: '2020',
      url: '000562970034.jpg'
    }, {
      caption: '2020',
      url: '000562970035.jpg'
    }, {
      caption: '2020',
      url: '000562970036.jpg'
    }, { 
      caption:'2019',
      url:'000411690001.png'
    },
    { 
      caption:'2019',
      url:'000411690003.png'
    },
    { 
      caption:'2019',
      url:'000411690005.png'
    },
    { 
      caption:'2019',
      url:'000411690007.png'
    },
    { 
      caption:'2019',
      url:'000411690009.png'
    },
    { 
      caption:'2019',
      url:'000411690011.png'
    },
    { 
      caption:'2019',
      url:'000411690012.png'
    },
    { 
      caption:'2019',
      url:'000411700002.png'
    },
    { 
      caption:'2019',
      url:'000411700003.png'
    },
    { 
      caption:'2019',
      url:'000411700004.png'
    },
    { 
      caption:'2019',
      url:'000411700005.png'
    },
    { 
      caption:'2019',
      url:'000411700006.png'
    },
    { 
      caption:'2019',
      url:'000411700007.png'
    },
    { 
      caption:'2019',
      url:'000411700008.png'
    },
    { 
      caption:'2019',
      url:'000411700011.png'
    },
    { 
      caption:'2019',
      url:'000411710001.png'
    },
    { 
      caption:'2019',
      url:'000411710002.png'
    },
    { 
      caption:'Photograph By Connie Qi, 2019',
      url:'000411710003.png'
    },
    { 
      caption:'Photograph By Connie Qi, 2019',
      url:'000411710004.png'
    },
    { 
      caption:'2019',
      url:'000411710005.png'
    },
    { 
      caption:'2019',
      url:'000411710007.png'
    },
    { 
      caption:'2019',
      url:'000411710008.png'
    },
    { 
      caption:'2019',
      url:'000411710009.png'
    },
    { 
      caption:'2019',
      url:'000411710010.png'
    },
    { 
      caption:'2019',
      url:'000411710011.png'
    },
    { 
      caption:'2019',
      url:'000411710012.png'
    },
    { 
      caption:'2019',
      url:'000412060001.png'
    },
    { 
      caption:'2019',
      url:'000412060002.png'
    },
    { 
      caption:'2019',
      url:'000412060003.png'
    },
    { 
      caption:'2019',
      url:'000412060004.png'
    },
    { 
      caption:'2019',
      url:'000412060005.png'
    },
    { 
      caption:'2019',
      url:'000412060006.png'
    },
    { 
      caption:'2019',
      url:'000412060007.png'
    },
    { 
      caption:'2019',
      url:'000412060008.png'
    },
    { 
      caption:'2019',
      url:'000412060009.png'
    },
    { 
      caption:'2019',
      url:'000414870001.png'
    },
    { 
      caption:'2019',
      url:'000414870002.png'
    },
    { 
      caption:'2019',
      url:'000414870004.png'
    },
    { 
      caption:'2019',
      url:'000414870005.png'
    },
    { 
      caption:'2019',
      url:'000414870006.png'
    },
    { 
      caption:'2019',
      url:'000414870007.png'
    },
    { 
      caption:'2019',
      url:'000414870008.png'
    },
    { 
      caption:'2019',
      url:'000414870009.png'
    },
    { 
      caption:'2019',
      url:'000414870010.png'
    },
    { 
      caption:'2019',
      url:'000414870011.png'
    },
    { 
      caption:'2019',
      url:'000414870012.png'
    },
    // {
    //   'caption': 'San Francisco, 2019',
    //   'url': '07.2019.02-edit.png'
    // },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.03-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.04-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.05-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.06-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.07-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.08-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.09-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.10-edit.png'
    },
    {
      'caption': 'San Francisco, 2019',
      'url': '07.2019.11-edit.png'
    },
    {
      'caption': 'San Mateo, 2019',
      'url': '07.2019.01-edit.png'
    },
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
