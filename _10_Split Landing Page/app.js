let left = document.querySelector(".left");
let right = document.querySelector(".right");




left.addEventListener("mouseenter",()=>{
    left.classList.add("show")
})
left.addEventListener("mouseleave",()=>{
    left.classList.remove("show")
})


right.addEventListener("mouseenter",()=>{
    right.classList.add("show")
})
right.addEventListener("mouseleave",()=>{
    right.classList.remove("show")
})


