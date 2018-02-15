const myData = require("./steps.json");

/*
 * GET function1 page.
 */

exports.viewSuggestions = function(req, res){
  res.render('suggestions', myData);
};



