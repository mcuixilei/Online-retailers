var mysql = require('mysql');
var conf = require('../conf/db');
var sql = require('./userSqlMapping');


var jsonWrite = function (res,ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg:'操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    log:function (name, pass, callback) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.user.queryById,[name,pass], function (error, rows, flied) {
            console.log(rows.length);
            if (rows.length) {
                //当前用户不存在
                callback(true);
            } else {
                //当前用户已经存在
                callback(false);
            }
        });
    },
    reg:function (name, pass, callback) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.user.queryById,[name,pass], function (error, rows, flied) {
            console.log(rows.length);
            if (!rows.length) {
                //当前用户不存在
                console.log('1');
                connection.query(sql.user.insert,[name,pass],function (error, rows, flied) {
                    callback(true);
                });

            } else {
                //当前用户已经存在
                callback(false);
            }
        });
    },
    tianJiaShangPin: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.commodity.queryByName, [param.name], function (error, rows, fields) {
            console.log(rows)
            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify({result: false}));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    xianshishangpin: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.commodity.queryAll, function (error, rows, fields) {
            console.log(rows)
            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    shouye: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.commodity.queryBypinLun,[111], function (error, rows, fields) {

            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    car: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.insert,[param.uname,param.imgsrc1,param.msxx1,param.cprice1], function (error, rows, fields) {

            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    showcar: function (req,res,next) {
        console.log('showcar');
        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.queryByName,[param.name], function (error, rows, fields) {

            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    delete1: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.delete1,[param.cId], function (error, rows, fields) {

            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    deleteall: function (req,res,next) {

        var param = req.body;
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.delete,[param.uname1], function (error, rows, fields) {

            if (rows.length) {

                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(rows));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            } else {
                res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
                res.contentType('json');//返回的数据类型
                res.send(JSON.stringify(false));//给客户端返回一个json格式的数据
                res.end();
                connection.end();
            }
        });
    },
    };

