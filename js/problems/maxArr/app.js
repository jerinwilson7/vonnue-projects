
const findMaxArr =(arr)=>{
    let max = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }

    return max
}

const sumArray = (arr)=>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}


let array = [5,4,8,6,2,484,62,36,556,215]
const max = findMaxArr(array);
console.log(max);
const sum = sumArray(array)
console.log(sum);

