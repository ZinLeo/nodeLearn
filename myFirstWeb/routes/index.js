//路由分离文件引用
var users = require("./users");

var userDao = require('../dao/userDao');

//路由控制
module.exports = function(app){

	app.get('/',function(req,res){
		console.log("用户进入首页");
		res.render('index');
	});

	app.post('/login',function(req,res,next){
		console.log(req.body.userName);
		console.log(req.body.password);
		res.render('main');
	});

	app.get('/angular',function(req,res){
		console.log("用户进入angular");
		res.render('angular');
	});

	app.get('/canvas',function(req,res){
		res.render('canvas');
	});

	app.get('/canvas2',function(req,res){
		res.render('canvas2');
	});

	app.get('/drag',function(req,res){
		res.render('drag');
	});

	app.get('/flex',function(req,res){
		res.render('flex');
	});

	app.get('/test',function(req,res){
		res.render('test');
	});
	//路由分离
	users(app);
}