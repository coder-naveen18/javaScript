// Can we change the Math.pi value like 4 or 3 , if yes how and if not then why we can't do that
// console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// When we see the properties of Math.PI provided by the javascript like writable is false and it's control is not provided to us, so we can't change it.
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(descriptor)

// const mynewObject = Object.create(null)

const chai = {
    name: "lemon",
    price:"250",
    isAvailable : true
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai , "name"))

Object.defineProperty(chai, "name" , {
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai , "name"))

// let  mynewmath = Object.defineProperty(Math , "PI" , {
//     writable: true,
//     enumerable : true
// })

// console.log(Object.getOwnPropertyDescriptor(Math , "PI"))


// let newMath = Math.PI
// console.log(newMath)
