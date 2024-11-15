const userOne ={
    username : 'jerin',
    email : 'jerinwilson7@gmail.com',

    login(){
        console.log('the user logged in');
        
    },
    logout(){
        console.log('the user logged out');
        
    }
}

console.log(userOne.username,userOne.email);

userOne.login();


const userTwo = {
    username : 'mario',
    email : 'mario@gmail.com',

    login(){
        console.log('user logged in')
    },

    logout(){
        console.log('user logged out')
    }
}

console.log(userTwo.email,userTwo.username);
userTwo.login();


//  