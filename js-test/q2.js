
// Function responsible for removing duplicates from the test case

const removeDuplicates = (arr)=>{
   const result = arr.filter((item,index)=>{
        return arr.indexOf(item) == index;
    })
    return result;
}



// function responsible for testing the removeDuplicate function with multiple test cases

const testRemoveDuplicates = (testCases) =>{

    let results = [];

    testCases.forEach((testCase)=>{
    //    let input = testCase.input;
    //    let expectedOutput = testCase.output;
    const {input,output} = testCase
       const AfterRemovingDuplicates = removeDuplicates(input)
    if(JSON.stringify(AfterRemovingDuplicates) === JSON.stringify(output)){
        console.log(`Test Case Passed for input ${input}`);
        results.push(AfterRemovingDuplicates)
    }
    else{
        console.log(`Test Case Failed for the input ${input}`);
        
    }
    })

    return results;

    
}


// array of test cases

const testCases = [
    {
        input: [1,2,2,3,4,4,5,1],
        output:[1,2,3,4,5]
    },

    {
        input:[5,5,7,4,6,6,7,2],
        output:[5,7,4,6,2]
    },

    {
        input:[],
        output:[]
    }
]


const result = testRemoveDuplicates(testCases)

console.log(result);


