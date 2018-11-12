// server.js
var express = require('express');

app = express();
app.use(express.static('dist'))

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);