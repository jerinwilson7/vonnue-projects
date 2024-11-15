// const scores = [10,20,30,15,78,21,56,9]

// const filteredScores = scores.filter((score)=>{
//     return score + 20;
// })

// console.log(scores);
// console.log(filteredScores);



const users = [
    {
        name:'shaun',
        premium:true
    },
    {
        name:'mario',
        premium:false,

    },
    {
        name:'jerin',
        premium:true,
    },
    {
        name:'yoshi',
        premium:false
    }
]

const premiumUsers = users.filter((user)=>{
    return user.premium
})

console.log(premiumUsers);
