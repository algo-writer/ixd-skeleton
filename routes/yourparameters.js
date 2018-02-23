var data = require("../parameters.json");

exports.viewYourParameters = function(req, res){
    res.render('yourparameters', data);
};

exports.addParameter = function(req,res){
    var newType = req.query.newtype;
    var newName = req.query.newname;
    var newJson = {"type": newType, "name": newName};
    console.log(newJson);
    console.log("This is data" + data);
    data.parameters.push(newJson);
    res.render('yourparameters', data);
}