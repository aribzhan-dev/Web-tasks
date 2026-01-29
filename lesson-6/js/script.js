let nums = [2, 5, 8, 10];
let numbers = [nums.map(n => n * 3)];
console.log(numbers); 


let arr = [12, 18, 21, 15, 30 ,10];
console.log(arr.filter(n => n >= 18));


let prices = [100, 250, 80, 400];
console.log(prices.reduce((total, price) => total + price));



let names = ['Anna', 'Brittany', 'Cinderella', 'Diana', 'Eva', "Alice"];
console.log(names.find(name => name.charAt(0) === 'A'));


let array = [3, 7, 9, 12];
console.log(array.some(n => n > 10));


let scores = [50, 70, 90, 80];
console.log(scores.every(score => score > 40));



let values = [3, 2, 10, 4, 7, 9];
console.log(values.sort((a, b) => b - a).reverse());


let fruits = ['apple', 'banana', 'orange', 'mango', "kivi"];
console.log(fruits.slice(2, 4));


let colors = ['red', 'green', 'blue'];
console.log(colors.splice(2, 1, "black"));
console.log(colors);


let cities = ['Astana', 'Almaty', 'Shymkent', "Taraz"];
console.log(cities.includes("Almaty"));
console.log(cities.indexOf("Shymkent"));