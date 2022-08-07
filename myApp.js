let express = require('express');
let app = express();
const path = require('path')
require('dotenv').config();

app.use('/public',express.static(path.resolve(__dirname, 'public')));

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });

  app.get('/json',function(req, res) {
    if (process.env.MESSAGE_STYLE=='uppercase'){
        return res.json({"message": "HELLO JSON".toUpperCase()});
    }
    res.json({"message": "Hello json"});
  });





































 module.exports = app;
