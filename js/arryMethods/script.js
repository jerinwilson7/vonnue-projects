const nums = [1,2,3,4,6,5,120,5,7,7,7 ]

const items = [
    {
        name:'bike',
        price:100
    },
    {
        name:'Tv',
        price:150
    },
    {
        name:'Apple',
        price:5,
    },
    {
        name:'car',
        price:400
    }
]


let maxNumber = nums.reduce((max,current)=>{
    return current>max ? current:max;
},nums[0])

console.log(maxNumber);


let maxPrice = items.reduce((max,item)=>{
    return item.price > max ? item.price:max
}, items[0].price)

console.log(maxPrice);

let car = items.some(item=>item.name='car')
console.log(car);

const includesNum= nums.includes(5)
console.log(includesNum);
