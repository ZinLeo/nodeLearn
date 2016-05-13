var userDao = require('../dao/userDao');

module.exports = function(app){
	app.get('/user',function(req,res){
		res.send("欢迎进入用户界面");
	});

	app.get('/addUser', function(req, res, next) {
		userDao.add(req, res, next);
	});

	app.get('/deleteUser', function(req, res, next) {
		userDao.delete(req, res, next);
	});

	app.get('/queryAll', function(req, res, next) {
	 	userDao.queryAll(req, res, next);
	});

	app.get('/queryById', function(req, res, next) {
	 	userDao.queryById(req, res, next);
	});
}