var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/create-pdf', function(req, res) {
	var filledOutNames = getFilledOutNames(req);
	var gettingFile = require('./create-pdf')(filledOutNames);
	gettingFile.then(function(file){
		console.log("file created", file);
		//TODO - Do Stuff here to return
	})
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


function getFilledOutNames(req) {
	//TODO - make this be not a stub
	return {
		"PARISH OF": "It's Orleans",
		"JUDICIAL DISTRICT COURT": "Something with a gavel"
	}
}