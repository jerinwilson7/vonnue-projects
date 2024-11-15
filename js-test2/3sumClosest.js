// const threeSumClosest = (nums,target)=>{

//     let closestToTarget = nums[0]+nums[1]+nums[2];
//     console.log("close",closestToTarget);
    

//     let sortedNums = nums.sort((a, b) => a - b);
    
    
    
    

  
//     for(let i=0;i<sortedNums.length-2;i++){

//         let left = i+1;
//         let right =sortedNums.length-1
        

//         while(left < right){
//             const total =sortedNums[i] + sortedNums[left] + sortedNums[right];
                  
//             console.log(total);
            

//             if(total == target){
//                 return total;
//             }

//             else if(total < target){
//                 left++
//             }

//             else{
//                 right--
//             }

//             if(Math.abs(total -target) < Math.abs(closestToTarget - target)){
//                 closestToTarget = total
//             }
//         }
// }
//   return closestToTarget
// }

//  const result = threeSumClosest([-1,2,1,-4],1)

// // [-4, -1, 1, 2]
// //j



const threeSumClosest = (nums,target)=>{
    let closestToTarget = nums[0]+nums[1]+nums[2]

    let sortedNums = nums.sort((a,b)=>a-b)
    console.log(sortedNums);

    for(let i=0;i<sortedNums.length-2;i++){
        
        let left = i+1;
        let right = sortedNums.length-1

        let total = sortedNums[i]+sortedNums[left]+sortedNums[right]
        
        if(total == target){
            return total
        }
        else if(total < target){
            left++
        }
        else{
            right--
        }

        if(Math.abs(total-target) < Math.abs(closestToTarget-target)){
            closestToTarget = total
        }
        

    }
    console.log(closestToTarget);
    return closestToTarget
    
}




const result = threeSumClosest([-1,2,1,-4],1)
console.log(result);

//dfd