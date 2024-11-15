// fetch API


// fetch('todos/luigi.json').then((response)=>{
//     console.log("resolved",response);
//     return response.json();
    
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log('rejected',error);
    
// })


// async & await

const getTodos = async()=>{
   const response = await fetch('todos/luigi.json');

   if(response.status != 200){
    throw new Error('cannot fetch the data')
   }
   const data = await response.json()
//    console.log(data);
   return data
}

console.log(1);
console.log(2);


getTodos().then((data)=>{
    console.log("resolved :",data);
    
}).catch((error)=>{
    console.log("rejected",error.message);
    
})

console.log(3);
console.log(4);

