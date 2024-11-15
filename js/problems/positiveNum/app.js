const getpositiveNumber = ()=>{
    let num;

    do{
        num = prompt("Enter a positive number:");

    }while(num <= 0 );
    return num;
}

getpositiveNumber();