
// function responsible for finding common elements in two array and returning it

const commonArrayElement=(elements1,elements2)=>{
    let commonElement = []
    elements1.forEach((element1)=>{
        elements2.forEach((element2)=>{
            if(element1 === element2){
                commonElement.push(element1)
            }
        })
    })
    console.log(commonElement);
    return commonElement
    
}


// function responsible testing testcases


const testTestCases= (testCases)=>{
    testCases.forEach((testCase)=>{
        const {input1,input2,expectedOutput} = testCase
        
        const actualOutput = commonArrayElement(input1,input2)
        
        if(JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)){
            console.log('test case passed');
            
        }
        else{
            console.log('test case failed');
            
        }
        
    })
}



// Array of test cases

const testCases = [
    {
        input1:[1,2,3,4],
        input2:[3,4,5,6],
        expectedOutput:[3,4]
    },
    {
        input1:[5,6,7,8,9],
        input2:[3,4,5,6,9],
        expectedOutput:[5,6,9]
    },
   
]


const result = testTestCases(testCases)