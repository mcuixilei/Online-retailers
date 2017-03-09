var quanxuan=document.getElementById('quanxuan');
var all=document.getElementsByTagName('input');
var ci=0;
var a
var jixu=document.getElementById('jixu');
jixu.onclick=function(){
    window.open('querenxinxi.html','_blank')
}
quanxuan.onclick=function(){
    console.log(all.length)
    if(ci==1){
        for(var i=1;i<=all.length;i++){
            all[i].checked=false;
            ci=0;
        }
    }else{
        for(var i=1;i<=all.length;i++){
            all[i].checked="checked";
            ci=1;
        }
    }

}
var url = "http://127.0.0.1:3000/showcar";
var urlde = "http://127.0.0.1:3000/delete1";
var urldeall = "http://127.0.0.1:3000/deleteal1";
function sendCmd( callback) {
    $.post(url, {
        name: sessionStorage.getItem("username"),
    }, function (data, status) {
        callback(data);
    });
};
var shanchu=document.getElementsByClassName('delete');
var deleteall=document.getElementById('deleteall');
window.onload=function(){
    sendCmd(function(result){
        if (result) {
            for(var i=0;i<=result.length-1;i++){
                (function (i) {
                msxx[i].innerHTML=result[i].msxx1;
                xiaotupian[i].src=result[i].imgsrc1;
                jinqian[i].innerHTML=result[i].cprice1;
                    if(check[i].checked) {
                        zongshuliang.innerHTML = result.length;
                        var allmoney = 0;
                        for (var i = 0; i <= result.length - 1; i++) {
                            allmoney = allmoney + parseInt(jine[i].innerHTML);

                        }
                        money.innerHTML = parseInt(allmoney);
                    }else{
                        zongshuliang.innerHTML =0;
                        money.innerHTML =0;
                    }


                shanchu[i].onclick=function(){
                    $.post(urlde, {
                        cId: result[i].cId
                    }, function (data, status) {

                    });
                    carlist[i].style.display='none';
                }
                  deleteall.onclick=function(){
                      $.post(urldeall, {
                          uname1: result[i].uname
                      }, function (data, status) {

                      });
                      $('.carlist').hide();
                  }
                }(i))
            }
            for(var j=result.length;j<=msxx.length-1;j++){
                carlist[j].style.display='none';
            }

            //for(var m=0;m<=result.length-1;m++){
            //    shangpin[m].style.display='block';
            //}
        }

    })
    var money=document.getElementById('allmoney');
    var zongshuliang=document.getElementById('zongshuliang');
    var xiaotupian=document.getElementsByClassName('xiaotupian');
    var msxx=document.getElementsByClassName('msxx');
    var jinqian=document.getElementsByClassName('jinqian');
    var carlist=document.getElementsByClassName('carlist');
    var jine=document.getElementsByClassName('jine');
    var youhui=document.getElementsByClassName('youhui');
    var shu=document.getElementsByClassName('shu');
    var jia=document.getElementsByClassName('jia');
    var jian=document.getElementsByClassName('jian');
    var shangpinliebiao=document.getElementById('shangpinliebiao');
    var allmoney=0;
    var shu1=0
    for(var i=0;i<=xiaotupian.length-1;i++){
        var check=shangpinliebiao.getElementsByTagName('input');
        (function (i) {
check[i].onclick=function(){
    if(check[i].checked){
        allmoney+=parseInt(jine[i].innerHTML);
        shu1+=1
    }else {
        allmoney-=parseInt(jine[i].innerHTML);
        shu1-=1
    }
    money.innerHTML=allmoney;
    zongshuliang.innerHTML =shu1;
}
            jia[i].onclick=function(){

                shu[i].innerHTML = parseInt(shu[i].innerHTML) + 1;

                var zongshu=4000.00*parseInt(shu[i].innerHTML);
                //console.log(zongshu)
                jine[i].innerHTML=zongshu+'.00';




            }
            jian[i].onclick=function(){

                shu[i].innerHTML = parseInt(shu[i].innerHTML) - 1;
                var zongshu=4000.00*parseInt(shu[i].innerHTML);
                jine[i].innerHTML=zongshu+'.00';


            }
        }(i))
    }

}


