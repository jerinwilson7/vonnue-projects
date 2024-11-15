// // let str = prompt("enter the sting")


// // const countNumberOfVowels = (str)=>{
// //     let count = 0
// //     str.forEach((string)=>{
// //         if(string === 'a' ){
// //             count++
// //         }

// //     })
// //     return count;
// // }

// // const vowelCount = countNumberOfVowels(str)

// let str = prompt("enter the string");

// const countNumberOfVowels = (str) => {
//   let count = 0;
//   str.forEach((string) => {
//     if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') {
//       count++;
//     }
//   });
//   return count;
// };

// const vowelCount = countNumberOfVowels(str);

// console.log(vowelCount);


const countNumberOfVowels =(str)=>{
    let count = 0;
    let vowels = ['a','e','i','o','u',];
    
    for(i=0;i<=str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }

    return count
}

let str = prompt('enter a string');
const vowelCount = countNumberOfVowels(str.toLowerCase());
console.log(vowelCount);
