

//       mouse events
let h1 = document.querySelector("h1");
let bbtn = document.querySelector("button");
let dv = document.querySelector(".dv");
bbtn.addEventListener("click",()=>{
    h1.innerText=`${randomRumber()}`
}
)
bbtn.addEventListener("click",()=>{
    dv.style.backgroundColor=`${(randomRumber())}`
}
)


function randomRumber(){
  let  red=Math.floor(Math.random()*250)+1;
  let  green=Math.floor(Math.random()*250)+1;
  let  blue=Math.floor(Math.random()*250)+1;
  let color =`rgb(${red},${green},${blue})`;
 return color;
}
console.log(randomRumber())
















