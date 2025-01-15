// map -->

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((item) => item * 10);
// console.log(newNumbers);




// if we want to do the same work with forEach loop

// const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbs = [];

// myNumbs.forEach((item) => {
//     newNumbs.push(item * 10);
// })

// console.log(newNumbs);



// channing ---->
const newNumbs = myNumbers
.map((num)=> num * 10)
.map((num) => num + 1)
.filter((num) => num > 40)
.map((num) => num * num);

console.log(newNumbs);





