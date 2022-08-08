let express = require('express');
let app = express();
const mySecret = process.env['MESSAGE_STYLE']
require('dotenv').config();

app.use('/public',express.static(path.resolve(__dirname, 'public')));


  app.get('/json',function(req, res) {
    if (process.env.MESSAGE_STYLE=='uppercase'){
        return res.json({"message": "HELLO JSON".toUpperCase()});
    }
    res.json({"message": "Hello json"});
  });





































 module.exports = app;
