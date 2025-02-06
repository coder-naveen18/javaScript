class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}why@you`
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}@javani4587`
    }

    set password(value){
        this._password = value
    }
}

const Naveen = new User("nav@gmail.com" , "123@abc")

console.log(Naveen.email)
console.log(Naveen.password)