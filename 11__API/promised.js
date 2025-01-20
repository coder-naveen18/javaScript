// // how to create a promise ----> 

// const promiseOne = new Promise( function(resolve , reject){
//     // Do an async task -->
//     // DB calls , cryptography , network

//     setTimeout(function (){
//         console.log("Async Task is complete");
//         resolve();
//     },1000)
// });


// promiseOne.then(function(){
//     console.log("Promise consumed");
// }) ; // then has a connection with a resolve



// // Way ----> 2

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async Task 2 ");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Promise consumed -- 2")
// });


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username: "chai", email : "chai@gmail.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//         console.log(user);//data consumption
// })



// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username : "Naveen" , password : "123456"})
//         }
//         else{
//             reject('Error : something went wrong');
//         }
//     }, 2000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Finally the promise is either resolved or rejected")
// })




// const promiseFive = new Promise((resolve , reject)=>{
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username : "javaScript" , password : "123456"})
//         }
//         else{
//             reject('Error : javaScript went wrong');
//         }
//     }, 2000)

// })




// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//     console.log(response);
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// consumePromiseFive();


// async function  getAllUsers(){
//    try {
//     const response =   await  fetch('https://jsonplaceholder.typicode.com/users')
// // console.log(response)
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log( "E:", error);
    
//    }
// }
// getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).catch((error)=>{
    console.log(error);
}).then((data)=>{
    console.log(data);
})




