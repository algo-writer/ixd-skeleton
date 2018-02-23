//const { newElement, myStepsArray } = require("./mainPage");
var dataSugg = require("../suggestions.json")


/*
 * GET function1 page.
 */

exports.viewSuggestions = function(req, res){
  res.render('suggestions', dataSugg);
  console.log("Hello" + dataSugg);
};





