/**
 * Module dependencies.
 */

//框架、模块引用
var express = require('express');
var bodyParser = require("body-parser");
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var app = express();

//路由分离文件引用
var routes = require('./routes');

//环境配置
app.configure = function() {
	//端口设置
	app.set('port', process.env.PORT || 3000);

	//视图监控
	app.set('views', path.join(__dirname, 'views'));

	//模板引擎
	// app.set('view engine', 'ejs');
	//加载html模板
	app.engine('.html', ejs.__express);
	app.set('view engine', 'html');

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use('/', app.routes);
	app.use(express.static(path.join(__dirname, 'public')));
}

app.configure('development', function() {
	app.use(express.errorHandler());
});

//路由配置
routes(app);

//服务器监控
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;