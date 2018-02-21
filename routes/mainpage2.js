var data = require("../save.json")

exports.viewMainPage = function(req, res){
    //console.log(data);
    res.render('mainpage2', data);
};