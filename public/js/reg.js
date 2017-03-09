(function () {
    var userName = document.getElementById('name');
    var password = document.getElementById('password');
    var repassword = document.getElementById('repassword');
    var tell = document.getElementById('tell');
    var btn_reg = document.getElementById('reg');
    var input=document.getElementsByTagName('input');

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
    }
    repassword.onblur=function(){
        if (password.value!=repassword.value){
            alert("两次输入的密码不相同");
        }
    };
    tell.onblur=function(){
        if (isNaN(tell.value))
            alert("请输入正确的手机号");
    };



var x=true;

    btn_reg.onclick = function () {
        for (var i=0;i<=input.length-1;i++){
            if (input[i].value==''){
                alert('请补全信息');
                x=0 * x;
                break;
            }else {
                 x=true;
            }
        }
        if(x){
            sendCmd('reg' , function (data) {
                if(data.result==true) {
                    alert("注册成功");
                }else {
                    alert("注册失败");
                }
            });
        }

    };
})();