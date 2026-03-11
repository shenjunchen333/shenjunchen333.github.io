console.log("Welcome to Junchen Shen's website!");

const button = document.getElementById("themeToggle");

button.onclick = function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

button.textContent = "☀";

}else{

button.textContent = "🌙";

}

};
