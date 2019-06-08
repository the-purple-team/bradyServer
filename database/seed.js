const fetch = require('node-fetch');
const dbConnection = require('./db.js');
const key = require('./../src/unsplashAPI/unsplash.js');

const collections = {
  headphones: 4950245,
  markers: 4950300,
  peacoat: 4950343,
  nike: 4950361,
  camera: 4950372,
  bedding: 4950375,
  mugs: 4950382,
  nonfiction: 4950397,
};

const seed = () => {
  for (let products in collections) {
    fetch(
      `https://api.unsplash.com/collections/${
      collections[products]
      }/photos/?client_id=${key.accessKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        for (let photoData of data) {
          dbConnection.insertIntoDB(
            photoData.id,
            photoData.user.username,
            photoData.urls.full, 
            products);
        }
      })
  }
  return 'Finished seeding';
}

seed();