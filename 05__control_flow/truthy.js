// const userEmail = "h@gmail.com";
const userEmail = [];

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("don't have user email");
}


// falsy values ---> 
// false , 0 , -0 , BigInt (0n), "" , null , undefined , NaN , 

// truthy values ---> 
// All the values except the falsy values are truthy
// Some of them are  ---> "0" , "'" , 'false' , " ", [], {} , function(){} ,



if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty Object")
}

// Important --->
// all these will give the true 


// false == 0;
// false == '';
// 0 == '';


// Nullish Coalescing Operator (??) : For ---> null ,  undefined
// used when we work with database
//  it saftey checks the values


let val1 ;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 6;

val1 = null ?? 10 ?? 15;
console.log(val1);


// ternary operator

// condition ? true : false 

const fullname = "Rahul";

fullname == "Rahul" ? console.log("True" ) : console.log("False"); 