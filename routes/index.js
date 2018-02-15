var data = require("../data.json")
/*
 * GET home page.
 */

function pushUnique(user){
	//for(var item in data.users) {
	if(JSON.stringify(data.users).indexOf(user.username) === -1) {
		return data.users.push(user);
	};
	//};
}

exports.view = function(req, res){
	var user = {
		"username":"Guest",
	};

	pushUnique(user);

	res.render('index',user);
};

exports.viewName = function(req, res){
	var user = {
		"username":req.query.username,
	};

	pushUnique(user);

	res.render('index',user);
}