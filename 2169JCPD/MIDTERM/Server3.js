var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("There is GET request for the homepage!");
  res.send('Here is the GET Method!');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("A POST request for the homepage is accessed.");
  res.send('Here is the POST Method');
})

// This responds a GET request for the /DUNGO page.
app.get('/DUNGO', function (req, res) {
  // Corrected the console.log message to match the route
  console.log("Got a GET request for /DUNGO"); 
  res.send('This is Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Pattern Match Page');W
})

var server = app.listen(4000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})