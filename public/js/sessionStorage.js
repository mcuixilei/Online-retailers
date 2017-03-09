var uname=document.getElementById('uname');
var value = sessionStorage.getItem("username");
if(value!=null){
    uname.innerHTML=value;
}
