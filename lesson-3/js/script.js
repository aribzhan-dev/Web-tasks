// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let numInput = document.getElementById('numInput');
// let title = document.getElementById('title');
// let btn3 = document.getElementById('btn3');


// function btn1OnClick() {
//     alert('You clicked the button!');
// }

// function btn2OnClick(number) {
//     console.log("Квадрат числа:", number * number);
// }

// function btn3OnClick() {
//     title.textContent = "Hello  Aribzhan";
// }


// btn1.addEventListener('click', btn1OnClick);
// btn2.addEventListener('click', function(){
//     let number = Number(numInput.value);
//     btn2OnClick(number);
// });

// btn3.addEventListener('click', btn3OnClick);



let btn = document.getElementById('btn');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');




function btnOnClick(){
    let number = prompt("Enter a number:");
    p1.textContent = number*number;
    p2.textContent = number**3;
}

btn.addEventListener('click', btnOnClick)





