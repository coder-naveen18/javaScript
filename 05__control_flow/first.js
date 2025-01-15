// if --- >

// if(condition){
//    statement
// }

// comparition is based on the followings
// < , > , <= , >= , != , !== , == , === , 


// important case between == and ===


// if(2 == "2"){
//     console.log("executed");
    
// }

// if(2 === "2"){
//     console.log("not executed")
// }


// if-else -->


// const temperature = 55;

// if(temperature < 50){
//     console.log("less then 50");
// }
// else{
//     console.log("temperature is greater than 50");

// }



// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`)
// }

// console.log(`User power : ${power}`)  // will not run because it's out of the scope


// Short hand Notation

const balance = 1000;

// if(balance > 500) console.log("test"); // implecit scope


// if(balance < 500){
//         console.log("less than 500");
//     }
//     else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");

// }else{
//     console.log("less then 1200")
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy anything");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}
