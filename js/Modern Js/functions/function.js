// const greet = ()=>{
//     console.log('hello there');
    
// };

// greet();
// greet();
// greet();
// greet();



// hoisting

// Hoisting in Javascriot is a behaviour where variable and fu nction declaration are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in your code, they are treated as if they are declared at the top of their containing scope
// only the declareation are hoisted not the initalizations


// Arrow functions

// const calculateArea = function(radius){
//     return 3.14 * radius ** 2;

// }

// const calculateArea = radius  =>  3.14 * radius **2;


// const area = calculateArea(5)

// console.log('area is: ',area);



// practise arrow functions

const greeting = () => console.log('hello');

greeting();

const bill = (products,tax) =>{
    let total = 0;
    for(let i=0;i<products.length;i++){
        total += products[i] + products[i] * tax;
    }
    return total
}

// methods

// Methods are functions which are associated with objects ,string etc