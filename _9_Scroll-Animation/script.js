let name = "asia"
let box = document.querySelectorAll(".box");
let btn = document.querySelector("button");



window.addEventListener("scroll",scrollAnimate)

scrollAnimate()


function scrollAnimate(){
const winBtm = window.innerHeight/5*4;//ye bydefult hoti hy

for(let bx of box){
  const bxTp= bx.getBoundingClientRect().top//This function is by-fualt

    if(bxTp < winBtm){
        bx.classList.add("active")
    }else{
        bx.classList.remove("active")
    }
    }
}
