// const coding = ["js", "ruby", "java", "python", "cpp"];


// forEach loop don't retrun anything

// const values = coding.forEach((item) =>{
//     // console.log(item);
//     return item;
// })

// console.log(values);



// filter ---> 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const values = myNums.filter( (num) => num > 4)

// console.log(values);



const newValues = myNums.filter((num)=> {
    return num < 4;
})

// console.log(newValues)


// if we want to do same work with forEach loop --->

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = [];

// myNumbers.forEach( (num) => {
//     if(num > 4){
//         newNumbers.push(num);
//     }
    
// })
// console.log(newNumbers);


// some more operation on the filter 

const books = [
    {title : "Psycology of money" , genre : "Economics" , publish : "1980", edition : "2021"},
    {title : "Rich Dad and poor Dad" , genre : "Economics" , publish : "1999", edition : "2019"},
    {title : "Eigth Golden rules" , genre : "Discipline" , publish : "2001", edition : "2017"},
    {title : "Physics" , genre : "Science" , publish : "1980", edition : "2021"},
    {title : "Love is Life" , genre : "Romance" , publish : "2015", edition : "2022"},
    {title : "India by Atal" , genre : "History" , publish : "1996", edition : "2014"},
];

const userBook = books.filter((bk)=> bk.genre === "Economics");
const usebook = books.filter( (bks) => {
    return bks.publish >= "2000" && bks.genre === "Romance";
}
);

console.log(userBook);
console.log(usebook);

