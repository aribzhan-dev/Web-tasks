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



let h1 = document.querySelectorAll("h1")[2];
h1.style.color = "blue";
h1.style.fontSize = "36px";









