class User{
    constructor(username){
        this.username = username
    }

    logMe(){

        console.log(`UserName is : ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}


const Naveen = new Teacher("Naveen", "naveen@ghmmkmkf.com", "4572365")


console.log(Naveen)
Naveen.logMe()

const Umesh = new User("Umesh")
Umesh.logMe()


// instanceof

console.log(User instanceof Teacher)