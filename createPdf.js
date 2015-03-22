var q = require('q');
var uuid = require('uuid');
var fdf = require('fdf');
var fs = require('fs');
var exec = require('child_process').exec;

var pdftk = __dirname + '/pdftk/bin/pdftk.exe';

module.exports = function createPdf(values) {
	var data = fdf.generate(values);
	var dataFile = tempFile('fdf');
	return q.nfcall(fs.writeFile, dataFile, data).then(function(){

		var templateFile = __dirname + '/templates/Form-2014-Exp-5L-Motion-for-Expungement.pdf'
		var pdfFile = tempFile('pdf');
		var args = [ pdftk, templateFile, 'fill_form', dataFile, 'output', pdfFile ].join(' ');
		console.log(args)
		return q.nfcall(exec, args)
			.then(console.log.bind(console), console.error.bind(console))
			.then(function() { return pdfFile });
	});
}

function tempFile(extension) {
	return __dirname+'/workspace/'+uuid.v4()+'.'+extension;
}