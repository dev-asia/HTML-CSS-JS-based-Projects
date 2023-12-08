let btn = document.querySelector('button');

btn.addEventListener("click",updateImage)




//1: function updateImge
/*All function are called here.And this function  called
when we click btn using add EventListener*/
let img = document.querySelector('img');
async function updateImage() {
  try {
    let link = await randomImg();//2:randomImg fun are called
    console.log(link);
    img.setAttribute('src', link);
  } catch (error) {
    console.error("Error:", error);
  }
  randomColor() //3:randomColor func are called
}

//2: randomImg function 
let url2 ="http://dog.ceo/api/breeds/image/random";
async function randomImg(){
    return fetch(url2)//send api req
.then((res)=>{
    return res.json()
})
.then((data)=>{
  return data.message
})
.catch((rej)=>{
    console.log("404 page not found")
})
}

//3: random color funcion
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let body = document.querySelector('body');
function randomColor(){
  let red = Math.floor(Math.random()*250)+1;
  let green = Math.floor(Math.random()*250)+1;
  let blue = Math.floor(Math.random()*250)+1;
  let rgb =`rgb(${red} , ${green} , ${blue})`;
  console.log(rgb)
  btn.style.border = "none"
  btn.style.backgroundColor = rgb
  btn.style.color = "black"
  h1.style.color = rgb
  p.style.color = rgb
}

