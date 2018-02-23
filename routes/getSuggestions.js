var projects = require('../suggestions.json');

exports.projectInfo = function(req, res) { 
	res.json(projects);
}




