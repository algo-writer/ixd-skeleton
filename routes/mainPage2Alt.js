var data = require("../save.json")

exports.viewMainPage = function(req, res){
    //console.log(data);
      data['viewAlt']=false;
    res.render('mainPage2Alt', data);
};

exports.addStep = function (req, res) {
    var newStep = req.query.step;
    var newJson = {"step": newStep};
    data.save.push(newJson);
    res.render('mainPage2Alt', data);
}

