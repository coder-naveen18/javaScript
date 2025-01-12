// Arrays


const myArray  = [1,2,3,4,5,6];
console.log(myArray);

const myHeros = ["Saktiman", "ViratKohli" , "suresh" , "King"]
console.log(myHeros);

const myArr2 = new Array(1,2,3,5,4);
console.log(myArr2);



// array Methods

myArray.push(40); // to add new values in right side in array
console.log(myArray);

myArray.pop();//to remove the last value from array from right side
console.log(myArray);

myArray.unshift(8);// to add new values in left side in array
console.log(myArray);

myArray.shift();//to remove the First value from array from left side
console.log(myArray);


console.log(myArray.includes(5));
console.log(myArray.indexOf(6));

const newARR = myArray.join();

console.log(myArray);

console.log(newARR);
console.log(typeof newARR);




console.log("Slice :")

console.log(myHeros);
console.log(myHeros.slice(1 , 2));
console.log(myHeros);

console.log("difference between the slice and splice");

console.log("Splice :")

console.log(myHeros);
console.log(myHeros.splice(1 , 2));
console.log(myHeros);