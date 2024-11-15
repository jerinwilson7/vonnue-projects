
const generateRandomCharacter = ()=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const randomIndex = Math.floor(Math.random()*characters.length)
    return characters[randomIndex];


}
const passwordGenerator = (length)=>{
    let password = '';

    do{
        password += generateRandomCharacter();
    }while(password.length<length


    )

    return password;
}


const length =10;

const password = passwordGenerator(length);
console.log(password);

