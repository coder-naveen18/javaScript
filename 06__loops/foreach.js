// for Each loop ---->  also known as higher order array loop 
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (element)  {
    // console.log(element);
});


// with arrow function
coding.forEach((element) => {
    // console.log(element);
});


// reference of the function

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);


// coding.forEach( (element , index , arr )=>{
//     console.log(element , index , arr);
// })



// array of objects --> 

const myCoding = [
    {
        langName : "javaScript",
        langfile : "js"
    },
    {
        langName : "java",
        langfile : "java"
    },
    {
        langName : "python",
        langfile : "py"
    }
    
]

myCoding.forEach((element) => {
    console.log(`languageName is : ${element.langName} and languageFile Name is  : ${element.langfile}`);
})

