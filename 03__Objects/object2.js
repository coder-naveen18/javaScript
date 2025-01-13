// singleton


// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123Abs";
tinderUser.name = "Samay";
tinderUser.isLoggedIN = false; 


// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userFullName :{
            firstName : "Naveen",
            lastName: "Sahu"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstName);



const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({ } ,obj1, obj2)

const obj3 = {...obj1 , ...obj2} // most used
// console.log(obj3);


const users = [
    {
        id: 1,
        email : "h@gmail.com"
    },
    {
         id: 2,
        email : "B@gmail.com"

    }
]

console.log(users[1].email);

console.log(tinderUser);

// mthods

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIN'));


