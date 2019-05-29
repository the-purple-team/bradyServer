const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dbConnection = require('./../database/db.js');
const apiKey = require('./../src/unsplashAPI/unsplash.js')
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  
  const search = 'volleyball';
  fetch(
    `https://api.unsplash.com/search/photos/?query=${search}&client_id=${apiKey.accessKey}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  .then(res => res.json())
  .then(data => {
    for (let photoData of data.results) {
      dbConnection.insertIntoDB(photoData.id, photoData.user.username,photoData.urls.full, search);
      console.log('Record successfully logged into database from the server');
    }
    res.send(data.results)
  });
})

app.get('/data/grab', (req, res) => {
  dbConnection.connection.query('SELECT * FROM photos', (err, data) => {
    if(err){return console.log(err, 'err')}
    res.send(data);
  })
})

app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log('Listening on port' + port)
})