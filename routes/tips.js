var data = require("../tips.json");

exports.viewTips = function(req, res){
    res.render('tips', data);
};