const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./routes');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('/', router);

app.use('/dist', express.static(__dirname + './../dist'))
app.use('/uploads', express.static(__dirname + './../static/uploads'))

console.log(__dirname + '/../static/uploads');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))