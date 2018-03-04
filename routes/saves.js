var save=require('../save.json');
/*
 * GET function1 page.
 */

exports.viewSaves = function(req, res){
  res.render('saves', save);
};