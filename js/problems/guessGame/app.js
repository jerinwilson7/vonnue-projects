const guessGame = () => {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;

    while (true) {
        let input = prompt("Guess a number between 1 and 100:");
        
        if (input === null) {
            console.log("Game canceled.");
            break;
        }

        guess = parseInt(input, 10);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            console.log("Too Low");
        } else if (guess > secretNumber) {
            console.log("Too High");
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts`);
            break;
        }
    }
};

guessGame();
