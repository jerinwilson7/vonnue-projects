let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]);


ninjas[1] = 'ken';
console.log(ninjas);


let ages = [30,20,40,18]

console.log(ages[2]);


let random = ['shaun','ryu',30,20];
console.log(random);

console.log(ninjas.length);



// array methods


 let arrayJoin = ninjas.join('*');

 console.log(arrayJoin);


 let arrayIndex = ninjas.indexOf('chun-li')
 

 console.log(arrayIndex);
 

 let arrayConcat = ninjas.concat(['jerin','wilson']);

 console.log(arrayConcat);
 


 let arrayPush = ninjas.push('mario');

 console.log(arrayPush);

 console.log(ninjas);
 

//  some methods doesnot alter the origan value but some does and the array.push() is one of them


 let arrayPop = ninjas.pop();

 console.log(ninjas);
 