var save=require('../save.json');
/*
 * GET function1 page.
 */

exports.viewMainPage = function(req, res){
  //console.log(data);
  res.render('mainPage',save);
};
