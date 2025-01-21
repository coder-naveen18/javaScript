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
- Example ---> toLowerCase

# Why use OOps ?
- 1. Code Reusability
- 2. Modularity
- 3. Encapsulation
- 4. Inheritance and Polymorphism
- 5. Scalability
- 6. Maintainability
- 7. Real-World Modeling



## Parts of OOP 
- Object literal
- constructor() function/method
- prototypes
- classes
- Instances (keywords :  new , this)



# 4 Pillars 
## Abstraction 
- It focuses on exposing only the essential features of an object while hiding its internal implementation details.
- It allows developers to interact with objects through well-defined interfaces without worrying about the complexity hidden underneath.
## Encapsulation
- It involves bundling data (properties) and methods (functions) that operate on the data into a single unit (class) and restricting direct access to some of the object's components.
- This helps to control how the internal state of an object is accessed or modified.
## Inheritance
- It allows one class or object to acquire the properties and methods of another. 
- It enables code reuse and establishes a hierarchical relationship between classes or objects.
## Polymorphism
- It allows objects of different classes to be treated as instances of the same class through a common interface.
- It enables a single function, method, or operation to behave differently based on the object it is applied to.
- JavaScript supports polymorphism through method overriding, method overloading (to a limited extent), and the use of inheritance.