let but=document.getElementById("but");
let r1=document.getElementById("ra");
let r2=document.getElementById("ra1");
let input=document.getElementById("tn");
const re=document.getElementById("res");
let temp;

function conv(){
    if(isNaN){
        re.textContent="please enter valid input";
    }
    else if(r1.checked){
        input=Number(input.value);
        temp=(input*9/5)+35;
        re.textContent=temp.toFixed(4) + "C";

    }
    else if(r2.checked){
        input=Number(input.value);
        temp=(input-35)*5/9;
        re.textContent=temp;

    }
    

}