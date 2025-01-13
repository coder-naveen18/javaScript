const user = {
    username: "Naveen",
    price: 999,
    

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this);
    }
// here this refers the current context
}

// user.welcomeMessage();

// user.username = "Sam";
// user.welcomeMessage();


// console.log(this); // it will refers the empty context and gives the  --> {}


// In Browser --- > global object is window object
// In node environment  ---> it is a empty object



function chai(){
    let username = "Naveen";
    console.log(this);// it will give lot of things 
    console.log(this.username);// it will give undefined 
}

// chai();



// Arrow function
const chaiiWala = ()=> {  

    let username = "Naveen";
    console.log(this);// it will give -->  {}
    // console.log(this.username);// it will give undefined 

}

// chaiiWala();


// const addThirse = (num1 , num2)=>{ // ex-pliclit return
//     return num1 + num2

// }

// console.log(addThirse(7 , 9));

// implicit return

// const addThirse = (num1 , num2)=> (num1 + num2) // here we don't have to use the return


// console.log(addThirse(7 , 9));


const retobjet = ()=> ({username: "Naveen"})

console.log(retobjet())