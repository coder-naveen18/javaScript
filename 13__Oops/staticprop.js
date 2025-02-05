class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`userName is : ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const lamba = new User("Naveen")
// console.log(lamba.createId()) // due to static keyword it can't be accessed



class Teacher extends User {
    constructor (username,email){
        super(username)
        this.email = email
    }

}

const iphone = new Teacher("Iphone", "i@email.com")

// console.log(iphone.createId()) // due to static keyword it can't be accessed
