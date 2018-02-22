var data = require("../save.json")

exports.viewMainPage = function(req, res){
    //console.log(data);
    res.render('mainpage2', data);
};

exports.addStep = function (req, res) {
    var newStep = req.query.step;
    var newJson = {"step": newStep};
    data.save.push(newJson);
    res.render('mainpage2', data);
}