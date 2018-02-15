var data = require("../name.json")
/*
 * GET function1 page.
 */

exports.viewFunction2 = function(req, res){
    var newDesc = req.query.description;
    var newJson = {
        "description":newDesc
    };
    data.pname[0]["description"] = newDesc;
    res.render('function2');
};
