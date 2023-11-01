let box = document.querySelectorAll(".box");
let h3 = document.querySelectorAll("h3")


  for(let bx of box){
    bx.addEventListener("click",()=>{
        removeActiveClasses()
        bx.classList.add("click")
    })
  }

  function removeActiveClasses(){
    for(let bx of box){
        bx.classList.remove("click")
    }
  } 
 
  //This function checked all box. If any box contain click class then this
  //function removed its class