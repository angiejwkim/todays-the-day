var express = require('express');
var app = express();
var request = require('request');

app.get('/weather', function(req, res) {
	request('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=221f9ad5b6dd745192473e36ff30d4c6', function(error, response, body) {
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body);
		if (!error) {
          res.send(body);
      } else {                        
          res.send(error);
      }
	})
})

app.listen(8000, function() {
    console.log('Server started successfully!');
})