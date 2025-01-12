// Dates

let myDate = new Date();

console.log(typeof(myDate));

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toJSON());

console.log(myDate.toTimeString());

console.log(myDate.toUTCString());

console.log(myDate.getTimezoneOffset())


// to declare new date

// let myCurrentDate = new Date(2023,7,23);
// let myCurrentDate = new Date(2023,7,23 , 5 , 3);
// let myCurrentDate = new Date("2023-01-14");
let myCurrentDate = new Date("04-14-2023");

console.log(myCurrentDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCurrentDate.getTime());

// convert in sec
console.log(Math.floor(Date.now()/1000));



// more methods for date

let newDate = new Date();

console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


// `${newDate.getDay() }and the time`


let now = newDate.toLocaleString('default' , {
    weekday: "long"
})

console.log(now);



