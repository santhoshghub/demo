const weather=document.querySelector(".weather");
const city=document.querySelector(".getcity");
const dis=document.querySelector(".cont");
const api="35238db80205072baa9990799451c598";

weather.addEventListener("submit", async event=>{
    event.preventDefault();
    const ci=city.value;
    console.log(ci);
    if(ci){
        try{
          const cit= await getcity(ci);
          displayweather(cit);


        }
        catch(error){
            err(error);


        }
    }
    else{
        err("invalid input");
    }
    
});

async function getcity(ci){
const aurl=`https://api.openweathermap.org/data/2.5/weather?q=${ci}&appid=${api}`;
const response=await fetch(aurl);


if(!response.ok){
    throw new error("could not fetch ");
}

return await response.json();

}
function err(message){
    const a=document.createElement("p");
    a.textContent=message;
    dis.classList.add(".err");

    dis.style.display="flex";
    dis.appendChild(a);


}
function displayweather(data){
    console.log(data);

    const{
    name:city,
    main:{temp,humidity},
    weather:[{description,idd}]}=data;

    console.log(idd);
    
        
    dis.textContent="";
    dis.style.display="flex";

    const c=document.createElement("h1");
    const t=document.createElement("p");
    const h=document.createElement("p");
    const d=document.createElement("p");
    
    const img=document.createElement("p");
    
    
    

   
    

    

     
    c.textContent=city;
    c.classList.add("city");
    dis.appendChild(c);

    img.textContent=getemoji(idd);
    console.log(idd);
    img.classList.add("ico");
    dis.appendChild(img);

 
    t.textContent=`${temp}deg/T`;
    t.classList.add("deg");
    dis.appendChild(t);

    h.textContent=`humidity:${humidity}`;
    h.classList.add("hum");
    dis.appendChild(h); 

    d.textContent=description;
    dis.appendChild(d);
    

    
    
    function getemoji(id){
        
        switch(true){
            

            case(id>200&id<500):
                return '☁';
            case(id>500&id<800):
                return '🌧';
                
            
            case(id>800&id<900):
                return '☀';
        
            
            case(id>900):
                return '⛅';
             default:
                return '❓';
                
            
        }
    }






