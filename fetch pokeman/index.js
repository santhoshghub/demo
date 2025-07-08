
async function fetchimg(){
    try{
        const name=document.getElementById("inp").value.toLowerCase();
        const pname= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if(!pname.ok){
            throw new Error("couln't got the data");
        }
        const data=await pname.json();
        const sp=data.sprites.front_default;
        const imgp=document.getElementById("imgp");

        imgp.src=sp;
        imgp.style.display="block";
        imgp.style.blockSize="200px";
    }
    
   catch(error){
    console.error(error);
   }
}
