let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo }`);


scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}` );
// the value of scoretwo is not changed it is till 50


// -----------------------------------------------------ReferenceTypes--------------------------------------------------


const userOne = {name:'ryu', age:30};
const userTwo = userOne

console.log(userOne,userTwo);

userOne.age = 26;

console.log(userOne,userTwo);
