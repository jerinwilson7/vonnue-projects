const items = [
    {
        name:'Bike',
        price:100
    },
    {
        name:'Tv',
        price:200
    },
    {
        name:'Album',
        price:10
    },
    {
        name:'Book',
        price:5
    },
    {
        name:'phone',
        price:500
    },
    {
        name:'computer',
        price:1000
    },
    {
        name:'keyboard',
        price:25
    },
]

const filteredItems = items.filter(items=>items.name=="Book")
console.log("Filtered",filteredItems);


const mappedItems = items.map((item)=>{
    return item.name
})

console.log("mapped",mappedItems);

const findItems = items.find(item=>item.name=="Book")

console.log(findItems);

items.forEach((item)=>{
    console.log(item.name);
    
})

const hasInExpensiveItems = items.every((item)=>{
    return item.price <= 1000
})

console.log(hasInExpensiveItems);


const sum = (items)=>{
    let n= 0
  const i =  items.map((item)=>{
      return n+item.price
    })
    console.log(n);
  
}


const x = (()=>{
    let count = 0;
    return()=>{
        return ++count
    }
})()

console.log(x())//prints 1jnkjkjkjkjcvg
console.log(x())//prints 2

const total = items.reduce((currentTotal,item)=>{
    return item.price+currentTotal
},0)

console.log(total);


// includes

const nums = [1,2,3,4,5]

const includesTwo = nums.includes(2)

console.log(includesTwo);
