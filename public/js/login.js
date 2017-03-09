(function () {
    var userName = document.getElementById('name');
    var password = document.getElementById('password');
    var btn_login = document.getElementById('login');

    var url = "http://127.0.0.1:3000/";

    function sendCmd(type ,cb) {
        console.log(userName.value);
        console.log(password.value);
        var u=url+type;
        $.post(u,{
            type:type,
            username:userName.value,
            password:password.value
        },function (data,status) {
            console.log(data);
            cb(data);
        });
    };





    //登录按钮
    btn_login.onclick = function () {
        sendCmd('login' , function (data) {
            console.log(data);
            if(data.result==true) {
                sessionStorage.setItem("username", userName.value);
                alert("登录成功");
                window.open('index.html','_blank')
            }else {
                alert("登录失败");
            }
        });
    }

})();