(function () {
    var shuliang = document.getElementsByClassName("shuliang");
    var shuZi = document.getElementsByClassName("shu");
    var jia = document.getElementsByClassName("jia");
    var jian = document.getElementsByClassName("jian");
    var tijiaodingdan = document.getElementById("tijiaodingdan");
    tijiaodingdan.onclick=function(){
        window.open('zhifuchenggong.html','_blank')
    }
    for(var i = 0;i<shuliang.length;i++){
        (function (i) {
            jia[i].onclick = function () {
                shuZi[i].innerHTML = parseInt(shuZi[i].innerHTML) + 1;
            }
            jian[i].onclick = function () {
                if(shuZi[i].innerHTML>0){
                    shuZi[i].innerHTML = parseInt(shuZi[i].innerHTML) - 1;
                }
            }
        }(i))
    }
}())
