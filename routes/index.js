var save=require('../save.json');

/*
 * GET home page.
 */
exports.viewName = function(req, res){

	res.render('index',save);
}