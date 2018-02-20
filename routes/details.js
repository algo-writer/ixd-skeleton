var data = require("../name.json")

exports.viewDetails = function(req, res){
    res.render('details', data);
};