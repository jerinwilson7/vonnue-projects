
// function responsible for sorting by age returning name

const sortByAge = (users,age)=>{
 console.log(users);

 return users.filter((user)=>user.age > age).map(user=>user.name)
 
}


// function responsible testing testcases

const testTestCases=(testCases,age)=>{
  testCases.forEach((testCase)=>{
    const {users,output}=testCase;    
    const usersAboveAge = sortByAge(users,age)  
    console.log(usersAboveAge);
    console.log(output);
    
    if(JSON.stringify(usersAboveAge) === JSON.stringify(output)){
        console.log("test case passed");
        
    }
    else{
        console.log('test case failed');
        
    }
    
    
  })
  
  
}




// test cases

const testCases = [
    {

        users : [
    
            {
                name:'alice',
                age:24
            },
            {
                name:'bob',
                age:27,
            },
            {
                name:'charlie',
                age:30
            }
        ],
        output:['bob','charlie']
    },
    {

        users : [
    
            {
                name:'alice',
                age:27
            },
            {
                name:'bob',
                age:27,
            },
            {
                name:'charlie',
                age:30
            }
        ],
        output:['alice','bob','charlie',]
    },
    {

        users : [
    
            {
                name:'alice',
                age:20
            },
            {
                name:'bob',
                age:20,
            },
            {
                name:'charlie',
                age:30
            }
        ],
        output:['charlie',]
    }
]

const result = testTestCases(testCases,25)