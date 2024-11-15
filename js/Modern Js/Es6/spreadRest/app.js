// rest parameter
const double=(...nums)=>{
    //do something

    console.log(nums)

    return nums.map(num=> num*2);
}


const result = double(1,3,5,48,4,5,6,1,78,9)
console.log(result)


//spread syntax (arrays)

const people = ['shaun','mario','ryu','jerin','wilson','subin','niju','arun','sidharth','alex']
// console.log(people)
// console.log(...people)

// const members = ['shaun','mario', ...people]
// console.log(members)
const members = [...people]
console.log(members);



//spread syntax (objects)

const person = {
    name:'shaun',
    age:30,
    job:'net ninja'
}

const personCopy = {...person,location:'manchester'}

console.log(personCopy)