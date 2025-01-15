// for in loop -->

const myObj = {
    js : 'javaScript',
    cpp : 'C++',
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
}


const myArray = ["name" , "ruby" , "java"];

for (const key in myArray) {
    console.log(`${key} for the value is : ${myArray[key]}`);
}

