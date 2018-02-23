var getSuggs = require('../suggestions.json');

exports.suggJson = function(req, res) { 
	console.log("used getsuggestions json");
	res.json(getSuggs);
}




