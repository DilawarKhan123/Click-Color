const button=document.querySelector("button");
const body=document.querySelector("body");
const colors=['#eb4d4b','#6ab04c','#57606f','#e056fd','#22a6b3',];

body.style.backgroundColor='#f6e58d';
button.addEventListener('click',changeB)

function changeB(){
    const colorindex=parseInt(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorindex]
}