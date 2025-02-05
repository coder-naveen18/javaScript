
// Classes --->



// class User {
//     constructor(username , email , password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}_abc@`
//     }

//     change_username(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Naveen", "naveen@gmail.com", "145624")

// console.log(chai.encryptPassword());
// console.log(chai.change_username());


// Behind the scene

function User(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}_abc@`
}

User.prototype.change_username = function(){
    return `${this.username.toUpperCase()}`
}



const Naveen = new User("Naveen", "naveen@gmail.com", "145624")

console.log(Naveen.encryptPassword());
console.log(Naveen.change_username());