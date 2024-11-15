const boxContainer = document.querySelector('.box-container');
const ballsContainer = document.querySelector('.balls-container');
let activeBox = null;
let prevActiveBox = null;
let balls = [];
let allBallsAdded = false;
const boxLength =3
    const ballLength = 8

    document.addEventListener('DOMContentLoaded',()=>{
        drawBox(boxLength);
    createBalls(ballLength);
    allBallsAdded = false; 
    })

const drawBox = (boxLength) => {
    boxContainer.innerHTML = '';
    for (let i = 0; i < boxLength; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = `box-${i + 1}`;

        const stackContainer = document.createElement('div');
        stackContainer.classList.add('stack-container');
        stackContainer.id = `stack-${i + 1}`;
        box.appendChild(stackContainer);

        box.addEventListener('click', () => {
            if (!allBallsAdded) return;
            if(activeBox === box){
                transferStack()
                return;
            }
            if (activeBox) {
                activeBox.classList.remove('active');
                if (prevActiveBox) {
                    prevActiveBox.classList.remove('pactive');
                }
                transferStack();
            }
            prevActiveBox = activeBox;
            activeBox = box;
            activeBox.classList.add('active');
            if (prevActiveBox) {
                prevActiveBox.classList.add('pactive');
            }
        });

        boxContainer.appendChild(box);
    } 
    activeBox = boxContainer.firstChild;
    activeBox.classList.add('active');
};

const createBalls = (ballLength) => {
    balls = []; 
    ballsContainer.innerHTML = '';
    for (let i = 0; i < ballLength; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.id = `ball-${i + 1}`;
        const number = document.createElement('span');
        number.textContent = i + 1;
        ball.appendChild(number);
        ballsContainer.appendChild(ball);
        balls.push(ball);

        ball.addEventListener('click', () => {
            if (!activeBox || allBallsAdded) return;
            addBallToBox(ball);
        });
    }
};

const addBallToBox = (ball) => {
    if (!activeBox) return;
    const stackContainer = activeBox.querySelector('.stack-container');
    const stack = document.createElement('div');
    stack.classList.add('stack');
    stack.appendChild(ball);
    stackContainer.appendChild(stack);
    balls = balls.filter(b => b !== ball); 
    if (balls.length === 0) {
        allBallsAdded = true; 
    }
};

const transferStack = () => {
    if (prevActiveBox) {
        const prevStackContainer = prevActiveBox.querySelector('.stack-container');
        const stacks = prevStackContainer.querySelectorAll('.stack');
        if (stacks.length > 0) {
            const lastStack = stacks[stacks.length - 1];
            const ballsToMove = Array.from(lastStack.children);
            const stackContainer = activeBox.querySelector('.stack-container');
            const newStack = document.createElement('div');
            newStack.classList.add('stack');
            ballsToMove.forEach(ball => {
                newStack.appendChild(ball);
            });
            stackContainer.appendChild(newStack);
            lastStack.remove();
            if (lastStack.children.length === 0) {
                lastStack.remove();
            }
        }
    }
};

createBtn.addEventListener('click', onSubmit);
;







