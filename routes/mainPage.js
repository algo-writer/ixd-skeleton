/*
 * GET function1 page.
 */

exports.viewMainPage = function(req, res){
  //console.log(data);
  res.render('mainPage');
};

exports.addFriend = function(req, res) { 
    var newStep = { "step": req.query.name };
    //data.codeRecs.push(newStep);
    res.render('mainPage', data);
    console.log("this is the new step" + newStep);
};

