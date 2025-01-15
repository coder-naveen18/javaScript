const myNums = [1, 2, 3];


const myNumbsrs = myNums.reduce(function(acc, curr){
    console.log(`acc : ${acc} and current value : ${curr}`)
    return acc + curr;
}, 0)

console.log(myNumbsrs);


// using arrow function
const initialValue = 0;

const sum = myNums.reduce((acc , curr) => {
    return acc + curr

}, initialValue)

console.log(sum);


// Example


const shoppingCart = [
    {
        itemName: "js Course",
        price: 299,
    },
    {
        itemName: "python",
        price: 499,
    },
    {
        itemName: "Web-development",
        price: 11299,
    },
    {
        itemName: "androad",
        price: 2199,
    }
]

const totalPrice = shoppingCart.reduce((acc , item)=> (acc + item.price) , 0);
console.log(totalPrice);