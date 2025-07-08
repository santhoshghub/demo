 function settime(){
    const now=new Date();
    const h=now.getHours();
    let m=h>12?`pm`:`am`;
    const min=now.getMinutes();
    const sec=now.getSeconds();
    const timestring=`${h}:${min}:${sec}`;
    document.getElementById("div1").textContent=timestring + m;


}
settime();
setInterval(settime,1000);