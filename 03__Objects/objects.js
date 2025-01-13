// Singleton  ---> when we create a objects with constructor

// Object.create 

// object Literals


const mySymbol = Symbol("key1");



const userJs = {
    // key : "Value"
    name: "Naveen",
    "full Name": "Naveen Sahu",
    [mySymbol] : "myKey1",
    age: "22",
    location: "Jaipur",
    email: "naveen@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

console.log(userJs.email);
console.log(userJs["email"]);
console.log(userJs["full Name"]);
console.log(userJs[mySymbol]);



// userJs.email = "chatgpt@gmail.com";
// Object.freeze(userJs); // used to freeze an object mean we don't want that anyone change it

// userJs.age = 23;

// console.log(userJs);





// how to add the function in a object

// userJs.greeting = function(){
//     console.log("Hello js users");
// }

// console.log(userJs.greeting);
// console.log(userJs.greeting());


userJs.greeting = function(){
        console.log(`Hello js users, ${this.name}`);
    }

    console.log(userJs.greeting());



