const  fibonacciSeries =(number)=>{
    let fibSeries = [0, 1];
    for(let i = 2; i <= number; i++){
        fibSeries.push(fibSeries[i-1] + fibSeries[i-2]);
        }
        console.log(fibSeries);
        

    }

    fibonacciSeries(20);