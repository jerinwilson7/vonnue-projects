// // const x = ()=>{
// //     let count= 0;
// //     return ()=>{
// //         count++
// //         return count
// //     }
// // }

// // const x = ()=>{
// //     if(!x.count){
// //         x.count = 1;
// //     }
// //     else{
// //         x.count++
// //     }
// //     return x.count
// // }

// // const x = (()=>{
// //     let count = 0;
// //     return ()=>{
// //         count++
// //         return count
// //     }
// // })();


// // const x = ()=>{
// //     let count = 0;
// //     return function(){
// //         count++
// //         return count
        
// //     }
// // }

// const c = ()=>{
//     let count = 0;
//     return ()=>{
//         return ++count
//     }
// }

// const x = c();



// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());





// function responsible for soring on basis of the property passed

const sortByProperty = (people,property)=>{
    
    const sortList = {}
    people.forEach((person)=>{
        console.log([person]);
        
          if(sortList[person[property]]){
            sortList[person[property]].push(person)

          } 
          else{
            sortList[person[property]] = [person]
          }
    })

    console.log(sortList);
    
}

// function responsible for testing testcase


const testTestCases = (testCases,property)=>{
    testCases.forEach((testCase,index)=>{
        const {people,expectedOutput}=testCase
        
        const actualOutput = sortByProperty(people,property)
        // console.log(actualOutput);
        if(JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)){
            console.log("Test case passed")
        }
        else{
            console.log(`Test case failed for index ${index+1}`);
            console.log(`Expected output : ${expectedOutput}`);
            console.log(` Actual output : ${actualOutput}`);
            
            
        }
        
        
    })
}


// Array of test case





// i created two array of test cases ones sorts on the basis of age and other on the basis of YearOfAdmission you can uncomment any one and can test it






// const testCases = [
//     {
//         people:[
//             {
//                 name:'Alice',
//                 age:24,
//                 yearOfAdmission:2019
//             },
//             {
//                 name:'Bob',
//                 age:24,
//                 yearOfAdmission:2020

//             },
//             {
//                 name:'Charlie',
//                 age:30,
//                 yearOfAdmission:2019

            
//             },
//         ],
//         expectedOutput: {
//               '24': [
//                 {
//                     name:'Alice',
//                     age:24,
//                     yearOfAdmission:2019
//                 },
//                 {
//                     name:'Bob',
//                     age:24,
//                     yearOfAdmission:2020
    
//                 },
//               ],
//               '30': [
//                 {
//                     name:'Charlie',
//                     age:30,
//                     yearOfAdmission:2019
    
                
//                 },
//               ]
//             }
//     },
//     {
//         people:[
//             {
//                 name:'David',
//                 age:18,
//                 yearOfAdmission:2018

//             },
//             {
//                 name:'Liam',
//                 age:12,
//                 yearOfAdmission:2019

//             },
//             {
//                 name:'Elsie',
//                 age:20,
//                 yearOfAdmission:2020

//             },
//         ],
//         expectedOutput: {
//               '18': [
//                 {
//                     name:'David',
//                     age:18,
//                     yearOfAdmission:2018
    
//                 },
//               ],
//               '12': [
//                 {
//                     name:'Liam',
//                     age:12,
//                     yearOfAdmission:2019
    
//                 },
//               ],
//               '20': [
//                 {
//                     name:'Elsie',
//                     age:20,
//                     yearOfAdmission:2020
    
//                 },
//               ]
//             }
//     },
//     {
//         people:[
//             {
//                 name:'Emma',
//                 age:30,
//                 yearOfAdmission:2020

//             },
//             {
//                 name:'John',
//                 age:30,
//                 yearOfAdmission:2021

//             },
//             {
//                 name:'Doe',
//                 age:30,
//                 yearOfAdmission:2020
//             },
//         ],
//         expectedOutput: {
//               '30': [
//                 {
//                     name:'Emma',
//                     age:30,
//                     yearOfAdmission:2020
    
//                 },
//                 {
//                     name:'John',
//                     age:30,
//                     yearOfAdmission:2021
    
//                 },
//                 {
//                     name:'Doe',
//                     age:30,
//                     yearOfAdmission:2020
//                 },

//               ],
             
//             }
//     },
// ]
const yearTestCases = [
    {
        people:[
            {
                name:'Alice',
                age:24,
                yearOfAdmission:2019
            },
            {
                name:'Bob',
                age:24,
                yearOfAdmission:2020

            },
            {
                name:'Charlie',
                age:30,
                yearOfAdmission:2019

            
            },
        ],
        expectedOutput: {
              '2019': [
                {
                    name:'Alice',
                    age:24,
                    yearOfAdmission:2019
                },
                {
                    name:'Charlie',
                    age:30,
                    yearOfAdmission:2019
    
                
                },
              ],
              '2020': [
                {
                    name:'Bob',
                    age:24,
                    yearOfAdmission:2020
    
                },
              ]
            }
    },
    {
        people:[
            {
                name:'David',
                age:18,
                yearOfAdmission:2018

            },
            {
                name:'Liam',
                age:12,
                yearOfAdmission:2019

            },
            {
                name:'Elsie',
                age:20,
                yearOfAdmission:2020

            },
        ],
        expectedOutput: {
              '2018': [
                {
                    name:'David',
                    age:18,
                    yearOfAdmission:2018
    
                },
              ],
              '2019': [
                {
                    name:'Liam',
                    age:12,
                    yearOfAdmission:2019
    
                },
              ],
              '2020': [
                {
                    name:'Elsie',
                    age:20,
                    yearOfAdmission:2020
    
                },
              ]
            }
    },
    {
        people:[
            {
                name:'Emma',
                age:30,
                yearOfAdmission:2020

            },
            {
                name:'John',
                age:30,
                yearOfAdmission:2021

            },
            {
                name:'Doe',
                age:30,
                yearOfAdmission:2020
            },
        ],
        expectedOutput: {
              '2020': [
                {
                    name:'Emma',
                    age:30,
                    yearOfAdmission:2020
    
                },
                {
                    name:'Doe',
                    age:30,
                    yearOfAdmission:2020
                },

              ],
              '2021':[
                {
                    name:'John',
                    age:30,
                    yearOfAdmission:2021
    
                },
              ]
             
            }
    },
]

// dkfmkmindjfj pojjkujiijojijijo ijijioj patiance and practice  jbkjjbkbmbbhjnmn mnmnnknkloilkjijo ijooj oijoijm,njhiouljiouoi jkjh;khk;jhkhjkhioj

const result = testTestCases(yearTestCases,'yearOfAdmission')