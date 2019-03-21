let css= document.querySelector("h3");
let color1= document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.getElementById("btn");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", "+color2.value+")";
	css.textContent = body.style.background +";";
}
css.textContent = body.style.background;
color1.value = "#ff0000";
color2.value = "#ffff00";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//the below button is broke cz there is something wrong with randomNum
btn.addEventListener("click", function(){
	let randomNum = "rgb(" + Math.floor(Math.random()*255) + "," +Math.floor(Math.random()*255)+ ","+Math.floor(Math.random()*255)+");";
	body.style.background = randomNum;
});