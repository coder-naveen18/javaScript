// Nested scope 

function one(){
    const userName = "Naveen";

    function two(){// it can access the variable of biger scope
        const website = "Youtube";
        //  console.log(userName);
         
    }

    // console.log(website); // because we can't access this scope 

    two();
}

// one();



if(true){
    const userName = "Naveen";

    if(userName === "Naveen"){
        const website = "gitHUb";
        // console.log(userName + " "+ website);
    }

    // console.log(website); // first error will be here because it;s outof scope
}

// console.log(userName); // second error here because it's also outof the scope



// Intresting example ----->> 
console.log(addOne(5)) // hoisting happened here
function addOne(value){ // it is a simple function
    return value + 1;
}
addOne(5); // value is returned but not printed


// addTwo(5); // in expression way we can't hoist
const addTwo = function(value){ // this is called as expression 
    return value + 2;
}
addTwo(5);






