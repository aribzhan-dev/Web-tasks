let title = document.getElementById("title");
title.textContent = "DOM is working !"


let card = document.querySelector(".card");
card.style.backgroundColor = "#ea0000";



let cards = document.querySelectorAll(".card");
console.log(cards);


let p = document.querySelectorAll(".card p");
for (let i = 0; i < p.length; i++) {
    p[i].textContent = "Changed paragraph text !";
}

let h1 = document.querySelector(".card h1");
h1.innerHTML = "<strong>Welcome</strong>";


let img = document.getElementById("image");
img.setAttribute("src", "img/screen2.png");



let a = document.getElementById("link");
console.log(a.getAttribute("href"));


card.classList.add("active");
card.classList.remove("active");
card.classList.toggle("highlight");



let h11 = document.querySelectorAll("h1")[2];
h11.style.color = "blue";
h11.style.fontSize = "36px";



let btn = document.getElementById("btn");

function btnClick() {
    console.log("Button clicked !");
}

btn.addEventListener("click", btnClick);



let btn2 = document.getElementById("btn2");
let text = document.getElementById("text");


function btn2Click() {
    text.textContent = "Button 2 was clicked !";
}

btn2.addEventListener("click", btn2Click);



let btn3 = document.getElementById("btn3");

function btn3Click() {
    cards[0].style.backgroundColor = "#00ea00";
    cards[1].style.backgroundColor = "#ea0000";
    cards[2].style.backgroundColor = "#ea0000";
}

btn3.addEventListener("click", btn3Click);


let btn4 = document.getElementById("btn4");
function btn4Click() {
    h11.style.color = "red";
    p.classList.add("highlight");

}







