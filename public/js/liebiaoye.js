var soubtn = document.getElementById('soubtn');
var souInput = document.getElementById('souInput');
var url = "http://127.0.0.1:3000/tianJiaShangPin";
var url1 = "http://127.0.0.1:3000/xianshishangpin";
var msxx=document.getElementsByClassName('msxx');
var tu=document.getElementsByClassName('tu');
var cprice=document.getElementsByClassName('cprice');
var pingLun=document.getElementsByClassName('pingLun');
var xiaoLiang=document.getElementsByClassName('xiaoLiang');
var shangpin=document.getElementsByClassName('shangpin');
var liebiao=document.getElementById('liebiao');
var picture=liebiao.getElementsByTagName('img');
for (var z=0;z<=picture.length-1;z++){
    (function (z) {
        picture[z].onclick=function(){
            window.open('xiangqingye.html','_blank')
        }
    }(z))
}
function sendCmd(type, callback) {
    $.post(url, {
        name: souInput.value,
        sptype:type
    }, function (data, status) {
        callback(data);
    });
};
var obj = {
    imgsrc1: "",
    msxx1: "",
    cprice1: ""
};
function sendCmd1( callback) {
    $.post(url1, function (data, status) {
        callback(data);
    });
};
window.onload=function(){
    sendCmd1(function(result){
        if (result) {
            for(var n=0;n<=result.length-1;n++){
                (function (n) {
                msxx[n].innerHTML=result[n].msxx;
                tu[n].src=result[n].imgsrc;
                cprice[n].innerHTML=result[n].cprice;
                pingLun[n].innerHTML=result[n].pinLun;
                xiaoLiang[n].innerHTML=result[n].xiaoLiang;
                var add=document.getElementsByClassName('add');
                    add[n].onclick=function(){
                        if(sessionStorage.getItem("username")!=null){
                            obj.imgsrc1 = result[n].imgsrc;
                            obj.msxx1 = result[n].msxx;
                            obj.cprice1 = result[n].cprice;
                            function send(type, cb) {
                                console.log(obj)
                                var url = "http://127.0.0.1:3000/" + type;
                                $.post(url, {
                                    type: type,
                                    uname:sessionStorage.getItem("username"),
                                    imgsrc1: obj.imgsrc1,
                                    msxx1: obj.msxx1,
                                    cprice1: obj.cprice1
                                }, function (data, status) {
                                    cb(data);
                                })
                            }
                            send('car', function (result) {
                                console.log(result);
                                if (result) {
                                    add[n].onclick=null;
                                }
                            })
                        }else{
                            alert('请先登录账号');
                            window.open('denglu.html','_blank')
                        }


                        }
                }(n))
            }
        } else {
            console.log('weishoudao');
        }
    })
}
soubtn.onclick = function () {
    sendCmd('sousuo', function (result) {
        if (result) {
        for(var i=0;i<=result.length-1;i++){
            msxx[i].innerHTML=result[i].msxx;
            tu[i].src=result[i].imgsrc;
            cprice[i].innerHTML=result[i].cprice;
            pingLun[i].innerHTML=result[i].pinLun;
            xiaoLiang[i].innerHTML=result[i].xiaoLiang;
        }
            for(var j=result.length;j<=msxx.length-1;j++){
                shangpin[j].style.display='none';
            }
            for(var m=0;m<=result.length-1;m++){
                shangpin[m].style.display='block';
            }
        } else {
            console.log('weishoudao')
        }
    })
}