const total_nine_digit_number = () =>{
    number_in_bucket = 1;
    for(i=1;i<=10;i++){
        number_in_bucket = number_in_bucket *i
        console.log(number_in_bucket);
        
    }

    return number_in_bucket
}


const result = total_nine_digit_number()
console.log(result);
