// callback function is a function that is passed as an argument to another functhon and is intended to be called by that function at a later time, typically after some asynchronous operation or event has occured

const ul = document.querySelector('.people')




let people = ['mario','Luigi','ryu','shaun','chun-li']


// // people.forEach((person,index)=>{
// //     console.log(person,index);
    
// // })

// const logPerson = (person,index)=>{
//     console.log(`${index} - hello ${person}`);

    
// }

// people.forEach(logPerson)

let html = ``;

people.forEach((person)=>{
    html += `<li style = color:red;>${person}</li>`
})

console.log(html);

ul.innerHTML = html
