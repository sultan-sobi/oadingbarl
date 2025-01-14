const countE=document.querySelector(".counter");
const frontE=document.querySelector(".front-bar");


let idx=0;
function updateCounter(){
countE.innerHTML=idx+"%";
frontE.style.width=idx+"%"
idx++;
   if(idx<101){
    setTimeout( updateCounter,200);
   }
}
updateCounter();