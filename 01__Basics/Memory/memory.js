// Stack(primitive) , Heap(Non-premitive)

// it will be stored in stack
let myYoutubeName = "NaveenSahu.com";
let anotherName = myYoutubeName;

anotherName = "Padna";

console.log(myYoutubeName);
console.log(anotherName);




// It will be stored in heap  ---- and provides a reference 
let user = {
    email : "User@google.com",
    upi : "user@ybl"
}

let user2 = user;

user2.email = "sahu@google.com";

console.log(user.email);
console.log(user2.email);