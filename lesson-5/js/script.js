let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let box = document.querySelector('.box');

function onClickBtn1() {
    
    box.classList.toggle("active");
}



btn1.addEventListener('click', onClickBtn1);


