

// function responsible for counting multiple occurance and returning the name as key and count as value

const fruitsCount = (fruits)=>{
    let count = {};
    fruits.forEach((fruit)=>{
      
       if(count[fruit]){
        count[fruit]++;
       }else{
        count[fruit] = 1
       }
    })
    console.log(count);
    
    return count
}

// function responsible testing testcases


const testTestCases = (testCases)=>{
    testCases.forEach((testCase)=>{
      const {input,output} = testCase
      const result = fruitsCount(input)
      if(JSON.stringify(result) === JSON.stringify(output)){
        console.log('Test case passed');
        
      }
      else{
        console.log('test case failed');
        
      }
      
    })
}

// test cases


const testCases = [
    {
        input:['apple','banana','apple','orange','banana','apple'],
        output:{apple:3,banana:2,orange:1}
    },
    {
        input:['apple','banana','banana','orange','banana','orange'],
        output:{apple:1,banana:3,orange:2}
    },
    {
        input:['apple','banana','apple','apple','banana','apple'],
        output:{apple:4,banana:2}
    }
]


const result = testTestCases(testCases)