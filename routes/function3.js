var data = require("../name.json")
/*
 * GET function1 page.
 */

exports.viewFunction3 = function(req, res){
  var newType = req.query.ptype;
  var newName = req.query.pname;
    data.pname[0]["newParameterType"] = newType;
    data.pname[0]["newParameterName"] = newName;
  res.render('function3');
};
