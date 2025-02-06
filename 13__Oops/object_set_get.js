const User = {
    _email : 'nav@jaani.com',
    p_assword : '1254@ABS',

    get email(){
        return this._email
    },

    set email(value){
        this.email = value

    }
}

const naveen = Object.create(User) // here we have used the factory function

console.log(naveen.email)