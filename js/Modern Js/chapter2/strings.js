// Strings

console.log('hello world')

let email = 'jerinwilson7@gmail.com'

console.log(email);


// string concatination

let firstName = 'Brandon';
let lastName = 'Sanderson';

console.log(firstName);
console.log(lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);


// accessing the string characters

console.log(fullName[3])


// string length property

console.log(fullName.length)



// String methods
// string methods ends with ()

console.log(fullName.toUpperCase())

let result = fullName.toLowerCase();
console.log(result);


let emailIndex = email.indexOf('@')

console.log(emailIndex);



// Common string methods

// Slice Method



let slicedEmail = email.slice(0,10);

// arguments first one: where we go from , second argument : Where we go to

console.log(slicedEmail)


// --------------------------substring---------------------------------------------


// its a depriciated one
let emailSubstring = email.substr(1,10);


console.log(emailSubstring)


// --------------------replace--------------------------------------

// it replace only the first i character not every i character

let emailReplace = email.replace('i','z');

console.log(emailReplace)