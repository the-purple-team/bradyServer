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
  
  const search = 'camera';
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
    res.send(data.results)
  });

})






app.listen(port, () => {
  console.log('Listening on port' + port)
})