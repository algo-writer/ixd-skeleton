var save=require('../save.json');
/*
 * GET function1 page.
 */

exports.viewLogin = function(req, res){
  save['viewAlt']=false;
  res.render('login',save);
};

exports.viewAlt = function(req, res){
    save['viewAlt']=true;
    res.render('login',save);
};