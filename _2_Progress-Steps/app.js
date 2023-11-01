let next = document.querySelector(".Next");
let circle = document.querySelectorAll(".circle");
let prv = document.querySelector(".Prev");
let progres =document.querySelector(".progress")
let currentActive = 1;

  console.log(circle.length)
  next.addEventListener("click",()=>{
    currentActive++;
    if(currentActive > circle.length){
        currentActive = circle.length
    }
    update()

  
  })


prv.addEventListener("click",()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    circle.forEach((cir , idx)=>{
        if(idx < currentActive){
            cir.classList.add('active')
        }else{
            cir.classList.remove('active')
        }
    })
let actives = document.querySelectorAll(".active");
progres.style.width = (actives.length-1)/(circle.length-1)*100+ "%";
    if(currentActive === 1){
        prv.disabled = true
      }else if(currentActive === circle.length){
          next.disabled= true
      }else {
        prv.disabled = false
        next.disabled = false
    } 
    
}



