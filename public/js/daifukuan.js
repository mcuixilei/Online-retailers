(function(){
    var quxiao = document.getElementsByClassName("quxiao");
    var t1 = document.getElementsByClassName("t1");
    for(var i = 0;i<quxiao.length;i++) {
        (function (i) {
            quxiao[i].onclick = function () {
                t1[i].style.display = 'none';
            }

        }(i))
    }
}());