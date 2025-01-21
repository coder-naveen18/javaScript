// Object literal  ---- > collection of properties and functions

const user = {
    username : "Naveen",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from DB.")
        // console.log(`UserName : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username); // to print it.
// console.log(user.getUserDetails());
// console.log(this);


// constructor function ----->

// here new is an constructor function used to create new context 

// const  promiseOne = new Promise();
// const date = new Date();


function User(username , loginCount, isLoggedIn){
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        this.greeting = function (){
            console.log(`Welcome ${this.username}`)
        }

         return this; // it will implicitly defined
}

const userOne = new User("Naveen" , 12 , true);
const userTwo = new User("Padhai " , 11 , false);
// console.log(userOne);
// console.log(userTwo);

// checking the constructor  -- > it is the refrence of yourself    ----> " To read ----> instanceof()"

console.log(userOne.constructor);

// new- ----->

// When we create new keyword there will be created an empty object called "instance" .
// and there will be a constructor function called due to new keyword  and it will pack all the argument and give it to us
// And all these argument injected in this keyword 
// and finally we gets it



