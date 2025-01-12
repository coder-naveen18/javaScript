// Arrays part ---> 2

const myArray  = [1,2,3,4,5,6];

const myHeros = ["naveen", "Viratkohli", "suresh "];

// console.log(myArray);

// myHeros.push(myArray);

// console.log(myHeros);
// console.log(myHeros[3]);
// console.log(myHeros[3][1]);



// concat method

// const suside = myHeros.concat(myArray);

// console.log(suside);



// use of spread operator
const allNewArraysElements = [...myArray, ...myHeros];

// console.log(allNewArraysElements);


const anotherArray = [1, 2, 3, [ 4, 5 , 6] , 7 , [8 , 9 ], 10];

console.log(anotherArray);

const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name : "Hitesh"}));// interesting case for interview



let score1 = 100;
let score2 = 200;
let score3 = 400;

console.log(Array.of(score1 , score2, score3));