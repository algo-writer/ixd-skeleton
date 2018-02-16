
var dataSteps = require("../steps.json")
var dataSugg = require("../suggestions.json")

/*
 * GET function1 page.
 */

exports.viewSuggestions = function(req, res){
  res.render('suggestions', data);
};


var givenSugg;

function giveSugg(){
	for (var item in dataSteps.codeRecs){
		var stepWord = JSON.stringify(dataSteps.codeRecs[item]);
		for (var item2 in dataSugg.sugg){
			var recWord = JSON.stringify(dataSugg.sugg.english[item2]);
			if (stepWord.includes(recWord) == true){
				givenSugg = JSON.stringify(dataSugg.sugg.suggestions[item2]);
			}

		}
	}
}




