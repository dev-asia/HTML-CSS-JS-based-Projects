let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let bx = document.querySelectorAll(".bx");





for (const label of labels) {
   
    label.addEventListener("click",()=>{

     for (const label of labels) {
         label.addEventListener(("click"),()=>{
            label.classList.remove("active")
            input.active()
         })
         label.classList.add("active")
        }
   
     
    })
}
for (const input of inputs) {
    input.addEventListener("click",()=>{
        input.active()
    })
}



