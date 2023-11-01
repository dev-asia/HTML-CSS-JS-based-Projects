let h2 =document.querySelector("h2");
let body = document.querySelector("body");
let level =0;
let start =false;
let bx = ["one","two","three","four"];
let gameSeq=[];
let userSeq=[];

//This changed is apply when we press any key form keyboard 
        
body.addEventListener("keypress",()=>{
    if(start==false){
        console.log("game is start")
        start = true;
    }
    let div = document.querySelector("#over");
    div.classList.remove("out")
    div.innerText="";
    body.style.backgroundColor= "white";
  levelUp();
})

//              levelUp function is start
function gameFlash(anyClass){
anyClass.classList.add("flash")//add class into random class
setTimeout(()=>{
    anyClass.classList.remove("flash")
},500)
}


function levelUp(){
userSeq=[];
    level++
    h2.innerText=`level ${level}`;  
let randInd = Math.floor(Math.random()*4);
let randomitem = bx[randInd];//acces random item
randomClass = document.querySelector(`.${randomitem}`)//{use random item as 
gameSeq.push(randomitem)                             //Class name for accessing random class}
gameFlash(randomClass) //give random class as argument
console.log(gameSeq)
higScor();
let h3 =document.querySelector("h3");
h3.innerText=`your highest score is ${oldLevel}`;
let p =document.querySelector("p");
p.innerText= gameSeq;

}
//print highest score
let oldLevel = 0;
function higScor(){
if(level > oldLevel){
    oldLevel=level;
    console.log(`your higest score is ${oldLevel}`)
}
}
//********************************************************************* */


//This changed is apply when we clicked on any box
//               part two
function checkAns(usrIdx){

    if(userSeq[usrIdx]=== gameSeq[usrIdx]){
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp,500)
 
        }else{
            //  h2.innerHTML=`Game  over! your score was <b> ${level} </b>  </br> Press any key to start game` 
            let div = document.querySelector("#over");
            div.classList.add("out")
            div.innerHTML=`Game is over! your score was ${level} </br> Press any key to start`
            body.style.backgroundColor="grey"
            reset() 
        }
}
//rest all 
function reset(){
    start =false;
    level=0; 
    gameSeq=[];
}

function userFlash(box){
    box.classList.add("userclick")
    setTimeout(()=>{
        box.classList.remove("userclick")
    },500)
    }  

function click(){       //all function of part to collect here
 let btn = this;         
 userFlash(btn)
 userSeq.push(this.getAttribute("id"))
 checkAns(userSeq.length-1)
  
}


let box = document.querySelectorAll(".box");
for (b of box){
    b.addEventListener("click",click) //all function fo part two called here
    
} 



// By by! and best of luck



