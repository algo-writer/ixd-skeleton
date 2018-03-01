var save=require('../save.json');
/*
 * GET function1 page.
 */

exports.viewMainPage = function(req, res){
  //console.log(data);
  save['viewAlt']=false;
  res.render('mainPage',save);
};

exports.viewAlt = function(req, res) {
  save['viewAlt']=true;
  res.render('mainPage',save);
}
