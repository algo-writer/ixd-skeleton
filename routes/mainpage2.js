var data = require("../save.json")

exports.viewMainPage = function(req, res){
    //console.log(data);
    res.render('mainPage', data);
};