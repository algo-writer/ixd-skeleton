var data = require("../parameters.json");
/*
 * GET function1 page.
 */

exports.viewFparameters2 = function(req, res){
    var newType = req.query.ptype;
    var newName = req.query.pname;
    var newJson = {"type":newType, "name":newName};
    console.log(newJson);
    data.parameters.push(newJson);
    res.render('fparameters2');
};