var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var userDao = require('../dao/userDao');


// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*app.get('/', function (req, res) {
 res.sendFile( __dirname + "/" + "index.html" );
 })*/

router.post('/', function (req, res, next) {
    console.log(req.body);

    userDao.showcar(req, res, next);
});

module.exports = router;
