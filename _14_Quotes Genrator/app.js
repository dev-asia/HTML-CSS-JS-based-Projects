let pra = document.querySelector('p');
let btn = document.querySelector('button');
let h4 = document.querySelector('h4');

let url ="https://quote-garden.onrender.com/api/v3/quotes/random"
async function quoteGenrator(){
let quot = await axios.get(url)
let quote = quot.data.data[0].quoteText;
let author = quot.data.data[0].quoteAuthor;

pra.innerText =`"${quote}"` 
h4.innerText = author
randomColor()
}


btn.addEventListener("click",quoteGenrator)

let box = document.querySelector(".box")
console.log(box)
function randomColor(){
    let red = Math.floor(Math.random()*250)+1;
    let green = Math.floor(Math.random()*250)+1;
    let blue = Math.floor(Math.random()*250)+1;
    let rgb = `rgb(${red},${green},${blue})`;
    box.style.backgroundColor = rgb 
    console.log(rgb)
}
