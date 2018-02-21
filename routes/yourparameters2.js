var data = require("../parameters.json");

exports.viewYourParameters = function(req, res){
    res.render('yourparameters2', data);
};

exports.addParameter = function(req,res){
    var newType = req.query.newtype;
    var newName = req.query.newname;
    var newJson = {"type": newType, "name": newName};
    console.log(newJson);
    data.parameters.push(newJson);
    res.render('yourparameters2', data);
}