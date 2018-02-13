
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var function1 = require('./routes/function1');
var function2 = require('./routes/function2');
var function3 = require('./routes/function3');
var function4 = require('./routes/function4');
var saves = require('./routes/saves');
var login = require('./routes/login');
var settings = require('./routes/settings');
var afterhome = require('./routes/afterhome');
var help1 = require('./routes/help1');
var help2 = require('./routes/help2');
var fparameters = require('./routes/fparameters');
var freturn = require('./routes/freturn');
var finished = require('./routes/finished');
var suggestions = require('./routes/suggestions');
var great = require('./routes/great');
var mainPage = require('./routes/mainPage');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/index', index.view);
app.get('/function1', function1.viewFunction1);
app.get('/function2', function2.viewFunction2);
app.get('/function3', function3.viewFunction3);
app.get('/function4', function4.viewFunction4);
app.get('/saves', saves.viewSaves);
app.get('/login', login.viewLogin);
app.get('/settings', settings.viewSettings);
app.get('/afterhome', afterhome.viewAfterHome);
app.get('/help1', help1.viewHelp1);
app.get('/help2', help2.viewHelp2);
app.get('/fparameters', fparameters.viewFparameters);
app.get('/freturn', freturn.viewFreturn);
app.get('/finished', finished.viewFinished);
app.get('/suggestions', suggestions.viewSuggestions);
app.get('/great', great.viewGreat);
app.get('/mainPage', mainPage.viewMainPage);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
