let express = require('express');
let app = express();
const path = require('path')
require('dotenv').config();

app.use('/public',express.static(path.resolve(__dirname, 'public')))

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  })




































 module.exports = app;
