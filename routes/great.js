var data = require("../name.json");
/*
 * GET great page.
 */


exports.viewGreat = function(req, res){
    var newName = req.query.parameter;
    var newJson = {
      "newname":newName
    };
    data.pname[0]["newname"] = newName;
    res.render('great');
}
