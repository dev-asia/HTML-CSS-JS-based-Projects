let cir     = document.querySelector(".circle");
let main    = document.querySelector(".main");
let sideBar = document.querySelector(".side-bar")
let open    = document.querySelector("#open");
let close   = document.querySelector("#close");


open.addEventListener("click",()=>{
    main.classList.add("rotate");
    cir.classList.add("rotate");
    sideBar.style.left = 0;
})
close.addEventListener("click",()=>{
    main.classList.remove("rotate");
    cir.classList.remove("rotate");
    sideBar.style.left = -300 +'px';
})