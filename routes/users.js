var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req,res,next) {

  userDao.log(req.body.username, req.body.password, function (result) {
    console.log(result);
    res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({result:result,}));//给客户端返回一个json格式的数据
    res.end();
  })
});
router.post('/reg', function (req,res,next) {

  userDao.reg(req.body.username, req.body.password, function (result) {
    res.header({"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"});
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({result:result }));//给客户端返回一个json格式的数据
    res.end();
  })
});
module.exports = router;
