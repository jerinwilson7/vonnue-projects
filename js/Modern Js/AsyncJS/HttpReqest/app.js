const getTodos =(resource,callback)=>{
 
     return new Promise((resolve,reject)=>{

         const request = new XMLHttpRequest();
         
         request.addEventListener('readystatechange',()=>{
             // console.log(request,request.readyState );
             if(request.readyState === 4 && request.status === 200){
                 // console.log(request.responseText);
                 const data =  JSON.parse(request.responseText)
                 resolve(data)
                 
             }
             else if(request.readyState === 4){
               reject('error getting resources')
                 
             }
              
         })
         
         
         request.open('GET',resource)
         request.send();
     })
    
}


getTodos('todos/luigi.json').then(data=>{
    console.log('promise 1 resolved:',data);
    return getTodos('todos/mario.json')
})
.then((data)=>{
    console.log('promise 2 resolved',data);
    return getTodos('todos/shaun.json')
}) 
.then((data)=>{
    console.log('promise 3 resolved',data);
    
})
.catch((error)=>{
    console.log("promise rejected :",error);
    
})


// getTodos('todos/luigi.json',(err,data)=>{
//     // console.log('callback Fired');
  
//         console.log(data );
//         getTodos('todos/mario.json',(err,data)=>{
//             console.log(data);
//             getTodos('todos/luigi.json',(err,data)=>{
//                 console.log(data);
                
//         })
//         })
   
// });



// Promise


// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{
//     resolve('done something')
//     // reject("error")
//     })
// }

// // getSomething().then((response)=>{
// //     console.log(response);
    
// // },(err)=>{
// //     console.log(err);
    
// // })

// getSomething().then(data=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// })