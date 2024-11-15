
const removeDuplicates = (nums)=>{


    // if (nums.length === 0) return 0;
    
    // let left = 0;

    // for (let right = 1; right < nums.length; right++) {
    //     if (nums[left] !== nums[right]) {
    //         left++;
    //         nums[left] = nums[right];
    //     }
    // }

    // console.log(left);
    

    // return left + 1;

        if (nums.length === 0) return 0;

        let left =0;

       for(let i =0;i<nums.length;i++){
        if(nums[left] !== nums[i]){
            left++;
            nums[left] = nums[i]
        }
       }

       console.log(left);

       return left+1
       



    // const result = []
  

    // let left = 0
    // let right = 1

    
    
    // while(right < nums.length){

    //     if(nums[left] !== nums[right]){
        
    //         result.push(nums[left])
    //         left = right
    //         right++
    //     }
    //     else{
    //         right++
    //     }
        
    // }

    // result.push(nums[left])

    // return result
}    
  
 

    

// const result = removeDuplicates([1,1,2])hshahahdahhahahhahahahhahs
// dfdfsdf sdfsdfsdfdfdsfsdf zdlk l,;l;,
const result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])

console.log(result);


