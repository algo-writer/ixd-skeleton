//const { newElement, myStepsArray } = require("./mainPage");
var dataSugg = require("../suggestions.json")

/*
 * GET function1 page.
 */

exports.viewSuggestions = function(req, res){
  dataSugg['viewAlt']=false;

  res.render('suggestions', dataSugg);
};

exports.suggAlts = function(req, res){
	dataSugg['viewAlt']=true;

  res.render('suggestions', dataSugg);
};



