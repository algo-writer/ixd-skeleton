var data = require("../parameters.json");

exports.viewYourParameters = function(req, res){
    res.render('yourparameters', data);
};