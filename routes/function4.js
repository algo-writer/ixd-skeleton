var data = require("../name.json")
/*
 * GET function1 page.
 */

exports.viewFunction4 = function(req, res){
    var newType = req.query.rtype;
    var newName = req.query.rname;
    var newJson1 = {
          "newReturnType": newType,
          "newReturnName": newName
    };

    data.pname[0]["newReturnType"] = newType;
    data.pname[0]["newReturnName"] = newName;
    res.render('function4');
};

