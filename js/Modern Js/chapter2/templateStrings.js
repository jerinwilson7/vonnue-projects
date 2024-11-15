// ---------------template Strings ------------------------------------------------------
// template string is also known as template literals



const title = "Best awards of 2024";
const author = "Mario";
const likes = 30;

// concatination way

let concatination = 'The blog called '+ title + ' by '+ author + ' has ' + likes + ' likes.'

console.log(concatination)



// template literals method

// the job of the template literals is to allow us to inject the variables directly into the string without comming out of it 

let templateLiterals = `the blog called ${title} by ${author} has ${likes} likes.`

console.log(templateLiterals)



// creating html templates

let html = `
             <h2>${title}</h2>
             <p>By ${author}</p>
             <span>This blog has ${likes} likes </span`

console.log(html);
             