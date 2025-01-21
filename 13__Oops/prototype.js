// let myName = "Naveen     "
// let mychannel = "Coffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.naveen = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.hiNaveen = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.naveen()
// myHeros.naveen()
// myHeros.hiNaveen()
// heroPower.hiNaveen()

// inheritance

const User = {
    name: "Code",
    email: "code@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "NightAndCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Naveen".trueLength()
"ColdCoffee".trueLength()