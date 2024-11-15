
// Function responsible for rotating array from the test case


const rotateArray = (arr,k)=>{
   
    const rotatedArray =  arr.slice(-k).concat(arr.slice(0,arr.length - k))
   
    

    return rotatedArray
}


// function responsible for testing the rotateArray function with multiple test cases


const testRotateArray = (testCases)=>{

    let results = []
    
    testCases.forEach((testCase)=>{
        const {input,k,output} = testCase
        const actualResult = rotateArray(input,k)
        if(JSON.stringify(output) === JSON.stringify(actualResult)){
            console.log(`Test Case Passed for input ${input}`);
            
            results.push(actualResult)
        }else{
            console.log(`Test Case Failed for input ${input}`);

        }
    })
    return results;
}



// array of test cases


const testCases = [
    {
        input:[1,2,3,4,5],
        k:2,
        output:[4,5,1,2,3]
        
    },
    {
        input:[7,8,9,4,5,6],
        k:3,
        output:[4,5,6,7,8,9]
    }
]



const result = testRotateArray(testCases)

console.log(result);
