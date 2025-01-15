// for loop --->
// syntax


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         // console.log("5 is best number.");
//     }
//     // console.log(element);
// }


for (let index = 1; index <= 5; index++) {
    // console.log(`Outer loop value : ${index}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`Inner loop value : ${j} and outer loop value : ${index}`);
        // console.log(index  + '*' + j + ' = ' + index * j );
        
    }
    
}


let myArray = ["flase" , "batman" , "superman"];

// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}




// Some Keywords ----->

// 1. -- break

for (let index = 1; index <= 20; index++) {
    
    if(index == 5){
        break;
    }
    // console.log(`Value of index is : ${index}`);
    
}

// 2. -- continue

for (let index = 1; index <= 20; index++) {

    if(index == 5){
        continue;
    }
    console.log(`Value of index is : ${index}`);
    
}