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