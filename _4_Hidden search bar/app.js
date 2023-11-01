let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let container = document.querySelector(".container")


btn.addEventListener("click",()=>{
    container.classList.toggle("active")
    input.focus()

})
console.log(input)