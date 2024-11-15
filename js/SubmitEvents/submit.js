const form = document.querySelector('.signup-form');
// const userName = document.querySelector('#username');
// const valid = document.querySelector('.valid');
const feedback = document.querySelector('.feedback')

const userNamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(form.username.value);

    const userName = form.username.value;


    if(userNamePattern.test(userName)){
        feedback.style.color = '#00ff0d'
        feedback.textContent = 'username is valid';

    }
    else{
        feedback.style.color = 'red'
        feedback.textContent = "the user name must contain letters only and be between 6-8 characters long!"

    }

    
})

// live Feedback

form.username.addEventListener('keyup',(e)=>{
    // console.log(e.target.value);

    if(userNamePattern.test(e.target.value)){
        // console.log("passed");
        form.username.setAttribute('class','success')
        
    }
    else{
        // console.log('not passed ');
        form.username.setAttribute('class','error')
        
    }
    
})


// const userName = 'jerinwif';

// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(userName);

// // if(result){
// //     console.log("regular Expressin Test passed :)");
    
// // }

// // else{
// //     console.log("regular Expression test Failed :(");
    
// // }

// const result =  userName.search(pattern)

// console.log(result);
