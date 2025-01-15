// for of loop --->

// ["", "", ""]
// [{} , {} , {}]  //object in array

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    // console.log(element);
    
}


 const greeting = "hello world";
for (const ele of greeting) {
    if(ele == " "){
        continue;
    }
    // console.log(`Each char is : ${ele}`);
    
}


// Maps ---> it contains the unique values and preserves the order

const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

// console.log(map);

for (const [elemt , value] of map) {
    // console.log(elemt , " :- " , value);
    
}



// map is not iteratable


