
//sql CRUD 语句

module.exports = {
    user:{
        insert: 'insert into userinfo (UserName,UserPass) values(?,?)',
        update: 'update userinfo set UserPass=? where UserName=?',
        delete: 'delete from userinfo where UserName=? and UserPass=?',
        queryById: 'select * from userinfo where UserName=? and UserPass=?',
        queryAll:'select * from userinfo'
    },commodity:{
        insert: 'insert into commodity (imgsrc,cname,cprice,msxx,pinLun,xiaoLiang) values (?,?,?,?,?)',
        update: 'update commodity set cprice=? where cname=?',
        queryByName: 'select * from commodity where cname=?',
        queryBypinLun: 'select * from commodity where pinLun=?',
        queryAll:'select * from commodity'
    },shopcar:{
        insert:'insert into shopcar (uname,imgsrc1,msxx1,cprice1) values (?,?,?,?)',
        delete: 'delete from shopcar where uname=?',
        delete1: 'delete from shopcar where cId=?',
        queryByName: 'select * from shopcar where uname=?'
    }

}