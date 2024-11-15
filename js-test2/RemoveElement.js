


const removeELement=(nums,val)=>{

    let index = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[index] == nums[i]
            index++
        }
    }
    return index;
}





const result = removeELement([0,1,2,2,3,0,4,2],2)

console.log(result);
