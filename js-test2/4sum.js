const fourSum = (nums,target)=>{

    let result = []
    let sortedNums = nums.sort((a,b)=>a-b);

    for(let i=0;i<sortedNums.length-2;i++){
        if(i>0 && sortedNums[i]===sortedNums[i-1]) continue;
        for(j=i+1;j<sortedNums.length-2;j++){
            if(j>i+1 && sortedNums[j]===sortedNums[j-1]) continue;

            let left = j+1;
            let right = sortedNums.length -1

            while(left < right){
                let total = sortedNums[i]+sortedNums[j]+sortedNums[left]+sortedNums[right]

                if(total == target){
                    result.push([sortedNums[i],sortedNums[j],sortedNums[left],sortedNums[right]])

                 
                    while (left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                    while (left < right && sortedNums[right] === sortedNums[right - 1]) right--; 

                    left++;
                    right--;
                }
                else if (total < target){
                    left ++
                }
                else{
                    right--
                }
            }
        }
    }
    
   
    console.log(result);
    


}



const result = fourSum([2,2,2,2,2],8)

//-2,-1,0,0,1,2



// dkfjlpwwn pen and paper jfdkfkafknlksfprogram kjfdakj;fda kdfkjgskjg kjgsklkjgdgj klj;j;kjgdgsj;ljljkjkdgsl;skjlfg sklgjlkdfk;adfjikj;donot stick to one program fine its happens regularity 15kjgsjklgjkfgjg kfgjkjdg kjgsdlkfjg kljdgnkjg complicated flskjf lkjfdskjdsa dsa dsaksdjkf another [jfsjf kjaf m,nj;alfoiuroqlkj sdfkjproject ksjdfk] skdfjklogic after enhance project sdfnsdfknjsfn dkfioefjlkjdfoiafjlk dsfsferfrfasdfwerdf jjjkkjn kjkjhiukjhimnbuoiu0101gdjkjfsfjigdig gdklj kfjgllkdfjglk kjgkfjgk 8-7=11hrs,7-9=2hrs,9-12=3hrs,12-7=7hrs  7-8=1hrs 11+3+7+2+1

// sdfiifwathjlskdfdata kdjflsdkfjs six size xcz