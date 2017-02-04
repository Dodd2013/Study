var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var login = require('./route/login');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// catch 404 and forward to error handler
require('./dao/initMysql.js');//初始化数据库
require('./dao/initPermission.js');//初始化权限列表
app.use(require('./permission'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/login',login);
// default handel
app.get('/',function(req,res) {
  res.jsonp({msg:"default handel"});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({error:"error!"});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

var server = app.listen(3000, function() {
   console.log('listening on port %d', server.address().port);
})
