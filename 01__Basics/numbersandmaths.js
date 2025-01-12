// Numbers

const score = 400;
// console.log(score);


const balance = new Number(1000);
// console.log(balance);

// // methods we can use here
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const number = new Number(50.71462);

// console.log(number.toPrecision(4));


const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));

// Maths


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(1.5));
console.log(Math.floor(1.9));
console.log(Math.ceil(4.2));
console.log(Math.sqrt(4));
console.log(Math.min(4, 3 , 4, 0));
console.log(Math.max(4, 3 , 4, 0));


console.log(Math.random());// always gives the values between 0 - 1

console.log((Math.random()*10000).toFixed(0));

console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max- min + 1) )) + min);

