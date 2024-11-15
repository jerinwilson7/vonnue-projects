// constructor functions

// class User{
//     constructor(username,email){
//         this.username = username;
//         this.email = email;

//     }
// }


function User(username,email){
    this.username = username;
    this.email = email;

    // this.login = function(){
    //     console.log(`${this.username} has logged in`)
    // }
}

// function Admin (username,email){
    
// }

User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this;
}

User.prototype.logout = function(){
    console.log(`${this.username} has  logged out`)
    return this
}

function Admin(username,email,title){
    User.call(this,username,email)
    this.title =title;
}

Admin.prototype =Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    // delete user
}
 
const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gamil.com')
const userThree = new Admin('shaun','shaun@gmail.com','black-belt ninja');


console.log(userOne,userTwo,userThree)

// userOne.login()

// userTwo.logout()

userOne.login().logout()