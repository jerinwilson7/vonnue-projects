// sets

const namesArray = ['ryu','chun-li','ryu','shaun'];

console.log(namesArray)

// // const namesSet = new Set(['ryu','chunli','ryu','shaun'])

// // console.log(namesSet)


// const namesSet = new Set(namesArray);
// console.log(namesSet)

// const uniqueNames = [...namesSet];
// console.log(namesSet)

const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames)


const ages = new Set();
ages.add(20);
ages.add(25).add(30)
ages.add(25)
ages.delete(25)

console.log(ages,ages.size);
console.log(ages.has(30))

ages.clear();
console.log(ages);


const ninjas = new Set([
    {
        name: 'shaun',
        age:30
    },
    {
        name:'crystal',
        age:29
    },
    {
        name:'crystal',
        age:32
    }
])

ninjas.forEach((ninja)=>{
    console.log(ninja.name,ninja.age)
})