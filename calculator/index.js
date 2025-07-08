const dis=document.getElementById("display");

function add(input){
    dis.value+=input;
}
function clear(){
    dis.value="";

}

function output(){
    try{
dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="invalid input";
        
    }
}

