// Define HTML elements

const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text')
const logo = document.getElementById('logo')
const score = document.querySelector('.score')
const highScoreText = document.querySelector('.highScore')


// Define game VAriables 

const gridSize = 20;


const generateFood=()=>{
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x,y}

}

// Draw Food Function


const drawFood= ()=>{
    if(gameStarted){
        
        const foodElement = createGameElement('div','food');
        setPosition(foodElement,food);
        board.appendChild(foodElement)
    }
}



let snake = [{x: 10,y:10}]
let food = generateFood();
let direction ='left'
let highScore = 0
let gameInterval;
let gameSpeedDelay = 200
let gameStarted = false

// Draw game map, snake food
const draw = ()=>{
    board.innerHTML='';
    drawSnake();
    drawFood();
    updateScore();
}


// Draw Snake

const drawSnake=()=>{

    snake.forEach((segment)=>{
        const snakeElement = createGameElement('div','snake')
        setPosition(snakeElement,segment)
        board.appendChild(snakeElement)
    })
}

// Create a snake or food cube/div

const createGameElement = (tag,className)=>{
    const element = document.createElement(tag);
    element.className =className;
    return element;
}


// set the position of snake or food


const setPosition = (element,position)=>{
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y
}


// moving the snake

const move = () =>{
    const head = {...snake[0]}
    switch (direction) {
        case "right":
            head.x++
            break;
    
        case "up":
            head.y--;
            break;
        
        case "down":
            head.y++ ;
            break;
        case "left":
            head.x--;
            break;       
        
    }

    snake.unshift(head)

    // snake.pop(); 

    if(head.x === food.x && head.y === food.y){
        food = generateFood();  
        increaseSpeed();
        clearInterval(gameInterval);//clear past interval

        gameInterval = setInterval(() => {
            move();
            checkCollision();
            draw()
        }, gameSpeedDelay);
    }
    else{
        snake.pop();
    }
}



// Test Moving

// setInterval(()=>{
//     move();
//     draw();
// }, 200)


// Testing draw

// draw();



// Start game function

const startGame = () =>{
    gameStarted = true  //keep track of running game
    instructionText.style.display ='none'
    logo.style.display = 'none'

    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}


// keypress event listener

const handleKeyPress = (event)=>{
    if((!gameStarted && event.code === 'Space') ||
       (!gameStarted  && event.key === ' ') ){
        startGame();
       }
       else{
        switch (event.key) {
            case 'ArrowUp':
                direction = "up"
                break;

            case 'ArrowDown':
                direction = 'down'
                break;
            
            case 'ArrowLeft':
                direction = 'left'
                break;
              
            case 'ArrowRight':
                direction= 'right'
                break    
        
            default:
                break;
        }
       }
}


document.addEventListener('keydown',handleKeyPress)

const increaseSpeed = ()=>{
    console.log(gameSpeedDelay);
    if(gameSpeedDelay > 150){
        gameSpeedDelay -=5;
    }else if(gameSpeedDelay > 100){
        gameSpeedDelay -= 3; 
    }
    else if(gameSpeedDelay > 50){
        gameSpeedDelay -= 2;
    }
    else if(gameSpeedDelay > 25){
        gameSpeedDelay -=1;
    }
    
}

const checkCollision = ()=>{
    const head = snake[0]
    if(head.x <1 || head.x>gridSize || head.y <1 || head.y > gridSize){
        resetGame();
    }

    for(let i=1;i<snake.length;i++){
        if(head.x === snake[i].x && head.y === snake[i].y){
            resetGame();
        }
    }
}


const resetGame = ()=>{
    updateHighScore();
    stopGame();
    snake =[{x:10,y:10}]
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

const updateScore = ()=>{
    const currentScore = snake.length -1;
    score.textContent = currentScore.toString().padStart(3,'0')
}

const stopGame =()=>{
    clearInterval(gameInterval);
    gameStarted =false
    instructionText .style.display = "block";
    logo.style.display = "block"
}


const updateHighScore = ()=>{
    const currentScore = snake.length -1;
     if(currentScore > highScore){
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3,'0');
     }

     highScoreText.style.display = 'block'
}