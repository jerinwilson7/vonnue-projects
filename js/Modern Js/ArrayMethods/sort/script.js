// const names = ['mario','shaun','chun-li','yoshi','luigi'];

// console.log(names);
// names.sort()
// console.log(names);
// names.reverse();
// console.log(names);


// const scores = [10,50,20,5,35,70,45]

// // scores.sort()
// console.log(scores);


const players = [
    {
        name: 'mario', score:20
    },
    {
        name:'luigi',
        score:10
    },
    {
        name:'chunli',
        score:50
    },
    {
        name:'yoshi',
        score:30
    },
    {
        name:'shaun',
        score:70
    }
];

players.sort((a,b)=>{
    if(a.score > b.score){
        return -1;
    }
    else if(b.score > a.score){
        return 1;
    }
    else{
        return 0
    }
})

console.log(players);
