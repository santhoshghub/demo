const num=document.getElementById("num").value;
let res=document.getElementById("res");
let sub=document.getElementById("sub"); 
 sub.onclick=function roll(){
    let r=[];
    //num=Number(num.value);
    for(let i=0;i<=num;i++){
        r=Math.floor(Math.random()*6+1);
        console.log(r);
    }












    }
 