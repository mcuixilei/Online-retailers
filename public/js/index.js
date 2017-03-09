(function(){
    var dian = document.getElementsByClassName("dian");
    var arr=new Array();
    var i=0;
    arr[0]="images/shouye/banner1.png";
    arr[1]="images/shouye/banner2.png";
    arr[2]="images/shouye/banner3.png";
    arr[3]="images/shouye/banner4.png";
    function zdchange(){
        var x = document.getElementById("banner");
        if(i==arr.length-1){
            i=0;
        }else{
            i=i+1;
        }
        x.src=arr[i];
        for(var j=0;j<dian.length;j++){
            dian[j].style.background="#fff";
        }
        dian[i].style.background="rgb(227,225,225)";
    }

    setInterval(zdchange,2000);
    var shishangxiandai=document.getElementById('shishangxiandai');
    var picture=shishangxiandai.getElementsByTagName('img');
    var lianjie= shishangxiandai.getElementsByTagName('li');
    for (var z=0;z<=lianjie.length-1;z++){
        (function (z) {
        lianjie[z].onclick=function(){
            window.open('xiangqingye.html','_blank')
        }
        }(z))
    }
    for (var x=0;x<=picture.length-1;x++){
        (function (x) {
            picture[x].onclick=function(){
                window.open('xiangqingye.html','_blank')
            }
        }(x))
    }
    //var zi = document.getElementsByClassName("zi");
    //for(var n=0;n<=zi.length-1;n++){
    //    zi[i].onclick=function(){
    //        var a = $("<a href='../liebiaoye.html'>test</a>").get(0);
    //        var e = document.createEvent('MouseEvents');
    //        e.initEvent('click', true, true);
    //        a.dispatchEvent(e);
    //
    //    }
    //}
    var datu=document.getElementsByClassName('datu');
    var xiao1=document.getElementsByClassName('xiao1');
    var xiao2=document.getElementsByClassName('xiao2');
    var qian=document.getElementsByClassName('qian');
    var qian1=document.getElementsByClassName('qian1');
    var wainv=document.getElementsByClassName('wainv');
    var shuoming=document.getElementsByClassName('shuoming');
    var qian2=document.getElementsByClassName('qian2');
    var url = "http://127.0.0.1:3000/shouye";
    function sendCmd1( callback) {
        $.post(url, function (data, status) {
            callback(data);
        });
    };
    window.onload=function(){
        sendCmd1(function(result){

            if (result) {
                for(var n=0;n<=result.length-1;n++){
                    datu[n].src=result[n].imgsrc;
                    //xiao1[n].src=result[n].imgsrc;
                    //xiao2[n].src=result[n].imgsrc;
                    wainv[n].src=result[n].imgsrc;
                    //zi3[n].innerHTML=result[n].cname;
                    shuoming[n].innerHTML=result[n].msxx;
                    qian[n].innerHTML=result[n].cprice;
                    qian1[n].innerHTML=result[n].cprice;
                    qian2[n].innerHTML=result[n].cprice;

                }
            } else {
                console.log('weishoudao');
            }
        })
    }



})()