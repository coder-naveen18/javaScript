// const name = "Naveen";
// const repoCount = 4;

// console.log(name + repoCount + " Sahu"); // not good to use due to old



// console.log(`hello my Name is ${name.toUpperCase()} and my repo count ${repoCount}`);


const gameName = new String('Naveen');// using object 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));// to find which character in which position

// console.log(gameName.indexOf('e'));


// console.log(gameName.substring(2 , 5));//last value does not includes



const anotherString  = gameName.slice(-5, 5);


console.log(anotherString);

const newString1 = "    NAveen    ";

console.log(newString1)
console.log(newString1.trim())


const newLineChar = `     my anme is naveen sahu 
Na dknkfnjj,njknas`;

console.log("Before trim :")
console.log(newLineChar);
console.log("After trim :")
console.log(newLineChar.trim());



const url = "https://linkedin.com/naveen%20sahu983";

console.log(url.replace('%20',''));


console.log(url.includes('naveen'));
console.log(url.includes('?'));


const splitCharacter = "Naveen-hc-com";

console.log(splitCharacter.split('-'));// it will return a array by spliting the value on the basics of the given values



console.log(splitCharacter.split('c'));