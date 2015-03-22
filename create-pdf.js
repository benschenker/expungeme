var q = require('q');

module.exports = function(values) {
	return q(__dirname+'/templates/thumbs-up.pdf');
}