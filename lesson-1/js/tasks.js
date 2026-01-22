console.log("Task 1");
let number = 5;
console.log(number, typeof number);

let name = "Aribzhan";
console.log(name, typeof name);

let isActive = true;
console.log(isActive, typeof isActive);


console.log("Task 2");
let a = 10;
let b = 2;
console.log(a + " + " + b + " = " + (a + b));
console.log(a + " - " + b + " = " + (a - b));
console.log(a + " * " + b + " = " + (a * b));
console.log(a + " / " + b + " = " + (a / b));


console.log("Task 3");
let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}


console.log("Task 4");
let n = 18;
if (typeof n === "number") {
    console.log("Это число");
} else if (typeof n === "string") {
    console.log("Это строка");
} else if (typeof n === "boolean") {
    console.log("Это логическое значение");
} else {
    console.log("Неизвестный тип");
}


console.log("Task 5");
let day = Number(prompt("Enter a day number (1-7):"));
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


console.log("Task 6");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Task 7");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is: " + sum);


console.log("Task 8");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


console.log("Task 9");

counter = 10;
while (counter >= 1) {
    console.log(counter);
    counter--;
}


console.log("Task 10");

do {
    let pass = prompt("Enter the password:");
    if (pass !== "admin") {
        console.log("Incorrect password, try again.");
    } else {
        console.log("Access granted.");
        break;
    }
} while (true);