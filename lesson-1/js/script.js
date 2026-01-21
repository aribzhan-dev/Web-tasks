for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let age = Number(prompt("Enter your age:"));
alert("You are " + age + " years old.");


let sum;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is: " + sum);


let day = Number(prompt("Enter a day number (1-7):"));
switch (day) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
}