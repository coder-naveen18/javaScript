# javaScript and classes
## Does JavaScript really have classes ?
- Yes, JavaScript does have classes, introduced in ECMAScript 2015 (ES6). 
- However, JavaScript classes are primarily syntactic sugar over its prototype-based inheritance system. 
- This means they provide a more familiar and structured way to define objects and manage inheritance, 
- but under the hood, they rely on JavaScript's prototypal inheritance.


## Example
``` 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Alice', 25);
person.greet(); // Output: Hello, my name is Alice and I am 25 years old.


```


## OOPs


## Object
- collection of properties and methods
- toLowerCase

## Why use OOps ?



## Parts of OOP 
- Object literal
- constructor() function 
- prototypes
- classes
- Instances (keywords :  new , this)



## 4 pillars 
- Abstraction        ---> hide details
- Encapsulation      ---> 
- Inheritance        --->
- Polymorphism       ---> many     