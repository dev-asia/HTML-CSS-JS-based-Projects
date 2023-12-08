let box = document.querySelector(".box");
let bg = document.querySelector(".container");



let rept=setInterval(blurring, 30)
let load = 0;

function blurring(){
    load++
    if(load>98){
       clearInterval(rept)
    }
       box.innerText=`${load}%`
       bg.style.opacity= `0.${load}`   
}

revers = setInterval(scale,30)
let scle = 99;

function scale(){
  scle--
if(scle<=0){
  clearInterval(revers)
}
box.style.opacity=`0.${scle}`;
}

