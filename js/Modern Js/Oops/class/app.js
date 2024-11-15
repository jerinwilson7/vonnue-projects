class User{
    constructor(username,email){
        //set up properties

        this.username = username;
        this.email = email
        this.score = 0

    }
    login(){
        
        // console.log(this)
        console.log(`${this.username} just logged in`);
        return this;
        
    }

    logout(){
        console.log(`${this.username} just logged out`)
        return this
    }

    increaseScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;
    }

}


class Admin extends User{

    constructor(username,email,title){
        // this.username = username;
        // this.email =email;


        super(username,email)
        this.title =title;
    }

    deleteUser(user){
        users = users.filter(u=>u.username !== user.username);

    }

}


const userOne = new User('mario','mario@gmail.com');
const userTwo = new User('luigi','luigi@gmail.com');
const userThree = new Admin('shaun', 'shaun@gmail.com','black-belt-ninja')

// console.log(userOne,userTwo,userThree);

// let users = [userOne,userTwo,userThree]

// console.log(users);

// userThree.deleteUser(userTwo)
// console.log(users);

console.log(userThree);


// userOne.deleteUser(userThree)


// console.log(userOne,userTwo);

// userOne.login();
// userTwo.login(); 

// userOne.logout();
// userTwo.logout();

// userOne.increaseScore();


// userOne.login().increaseScore().increaseScore().logout();





// the 'new' keyword
//  1 - it creates a new empty object {}
//  2 - it binds the value of 'this' to the new empty object
//  3 - it calls the constructor function to 'build' the object