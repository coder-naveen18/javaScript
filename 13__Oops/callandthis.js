function SetUserName(username){

    this.username = username;
    console.log("called")
}

function CreateUserName(username,email, password){

    // if we call only the function then it will not gonna to return the username 
    // SetUserName(username);

    //but if we call the refrences context using this then it will return 

    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const user = new CreateUserName("Naveen" , "nav@fb.com", "123456");
console.log(user);