var express = require('express');
var mappings = require('./mappings');
var _ = require('lodash');
var bodyParser = require('body-parser');
var createPdf = require('./createPdf');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/create-pdf', function(req, res) {
	var filledOutNames = getFilledOutNames(req);
	console.log(JSON.stringify(filledOutNames));
	var gettingFile = createPdf(filledOutNames);
	gettingFile.then(function(file){
		console.log("file created", file);
		res.download(file);
	})
});

var server = app.listen(process.env.PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


function getFilledOutNames(req) {
	return _.object(_.map(req.body, function(v, k) {
		return [mappings[k], v];
	}));
}