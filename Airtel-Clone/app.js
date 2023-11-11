let phone = document.querySelector("#phone");
let rechargBtn = document.querySelector("#recharge-btn");
let inFo = document.querySelector("#info")

rechargBtn.addEventListener("click",()=>{
  recharg()


})

function recharg(){
    if((phone.value).length==10){
        inFo.style.color ="green"
        inFo.innerText =`+91 ${phone.value} has been recharged successfully`
        inFo.value = ""
    }else{
        inFo.style.color ="red"
        inFo.innerText =`* Please type a valid number`
    }
}

