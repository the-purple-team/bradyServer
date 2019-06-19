const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dbConnection = require('./../database/db.js');
// const queryDB = require('./../database/db.js');
const apiKey = require('./../src/unsplashAPI/unsplash.js')
const app = express();
const port = process.env.port || 3005;
const cors = require('cors');


app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/products/:id', express.static(__dirname + '/../dist'));

app.get('/product/:id', (req, res) => {
  dbConnection.queryDB(req.params.id, (result) => {
    res.send(result);
  });
});

app.get('/data/grab', (req, res) => {
  dbConnection.connection.query('SELECT * FROM photos', (err, data) => {
    if(err){return console.log(err, 'err')}
    res.send(data);
  })
})

app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})