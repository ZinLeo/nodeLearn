/*
	连接池配置
*/ 



var sql = {
	insert:'INSERT INTO user(id, userName, age) VALUES(0,?,?)',
	queryById: 'select * from user where id=?',
	queryAll: 'select * from user'
};

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(sql.queryById,2,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
});