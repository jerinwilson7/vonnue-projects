// const duplicateArray = (arr)=>{
//     return [...new Set(arr)]
// }

const duplicateArray = (arr)=>{
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}


let array = [1,2,3,4,56,7,8,56,1,2];
const newArr = duplicateArray(array)
console.log(newArr);
