
const findAllOccurances = (arr,target)=>{
    
    let result = [];
    arr.forEach((item,index)=>{
        if(item === target){
            result.push(index);
        }        
    })

    return result;    
}





const fruits = ['apple','banana','apple','orange','banana','apple']

const occurance = findAllOccurances(fruits,"apple");
console.log(occurance);
