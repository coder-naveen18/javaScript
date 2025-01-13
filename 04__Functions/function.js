// function -- > a way to do same task for multiple time without defining it again and again

function sayMyName(){

    console.log("Hello");
}


// sayMyName();


// Interesting things to know

function multiTwoNUmbers(numb1 , numb2){
    // console.log(numb1 + numb2);
}

const result = multiTwoNUmbers(7 , 8);
// console.log("result is :" , result);// it will give us a output as --- > undefined





function addTwoNumbers(num1 , num2){ // here values are called parameters
    
    // let result = numb1 + num2;
    // return result

    return num1 + num2;
}

let sum = addTwoNumbers(5 , 4); // here values are called arguments
// console.log(sum);


// how to take parameters

function loginUserMessage(username = "Sam"){ // default parameter
    if(username === undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in.`;
}

// let output = loginUserMessage("Naveen Sahu");

let output = loginUserMessage(); // retruns undefined 
// console.log(output);


// shoping card 

function calculateCartPrice(...number1){ //here we call ... as rest operator
    return number1;
}

// console.log(calculateCartPrice(200 , 400 ,500));// it will give us a array 

const userss = {
    username: "Naveen",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(userss);


handleObject({
    username : "Sam",
    price : 399
});

const myNewArray = [20 , 400 , 100 , 999];

function retrunSecondValue(getArray){
    return getArray[1];
}

// console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([100 , 500 , 800]));