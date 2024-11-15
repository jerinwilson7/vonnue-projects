// // object literals


// let blogs = [
//     {
//         title:"why mac & cheese rules",
//         likes:40,
//     },
//     {
//         title: "10 things to make with marmite",
//         likes: 48
//     }
// ]

// console.log(blogs);


// let user = {
//     name : "crystal",
//     age : "30",
//     email : "crystal@gmail.com",
//     location : 'berlin',
//     blogs : ['why mac & cheese rules', '10 things to make with marmite'],
//     login: ()=>{
//         console.log("user logged in");
        
//     },
//     upper: (name)=>{
//        user.name = name.toUpperCase();
//     },
//     logBlogs:()=>{
//         console.log('this user has written the following blogs');
//         user.blogs.forEach((blog)=>{
//             console.log(blog);
            
//         })
        
        
//     }
// }

// // console.log(user);
// // user.age = 35
// // console.log(user);
// console.log(user);
// // user.upper(user.name)
// // console.log(user);
// user.logBlogs()

// // console.log(this);



// ---------------------------------------------------MathObject---------------------------------------------


console.log(Math.PI);
console.log(Math.E);


const area = 7.7;
const flr = 4.2


console.log(Math.round(area));

console.log(Math.floor(flr));
console.log(Math.ceil(flr));
console.log(Math.trunc(area))

const randomNumber = Math.random();

console.log(randomNumber*100);
console.log(Math.round(randomNumber));

