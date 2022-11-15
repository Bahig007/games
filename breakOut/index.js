const grid= document.querySelector('.grid')
const scoreDisplay = document.querySelector("#score")
const blockWidth= 100;
const blockHeight = 20;
const userStart = [230 ,10];
let currentPosition = userStart;
const boardWidth = 560;
const boardHeight = 300;
const ballStart = [270,40]
let ballCurrentPostion = ballStart;
const ballDiameter = 20 ;
let timerId  ;
let xDirection = 2 ;
let yDirection = 2 ;

let score = 0 ;

class block {
    constructor(xAxis, yAxis){
    this.bottomLeft = [xAxis,yAxis]
    this.bottomRight = [xAxis+blockWidth , yAxis]
    this.topLeft = [xAxis ,yAxis +blockHeight]
    this.topRight = [xAxis+blockWidth , yAxis+blockHeight]}
}

const blocks = [
    new block (10,270),
    new block (120,270),
    new block (230,270),
    new block (340,270),
    new block (450,270),
    new block (10,240),
    new block (120,240),
    new block (230,240),
    new block (340,240),
    new block (450,240),
    new block (10,210),
    new block (120,210),
    new block (230,210),
    new block (340,210),
    new block (450,210),
]


function addBlocks () {

    for (let i = 0; i < blocks.length; i++) {

    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] +'px';
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block)
    

    }
}





const user = document.createElement('div')
user.classList.add('user');
drawUser ()
grid.appendChild(user)



addBlocks();
function drawUser () {
    user.style.left =  currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}


const drawBall = () => {
    ball.style.left = ballCurrentPostion[0] + 'px';
    ball.style.bottom = ballCurrentPostion[1] + 'px';
}







function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft' :
            if (currentPosition[0] > 0) {
            currentPosition[0] -=10 ;
            drawUser ()
        }
            break;
            case 'ArrowRight' :
                if (currentPosition[0] < boardWidth - blockWidth) {
                    currentPosition[0] +=10 ;
                    drawUser ()
                }
            break;

    }
}

document.addEventListener('keydown', moveUser)


const ball = document.createElement('div')
ball.classList.add('ball')
drawBall();
grid.appendChild(ball)


function moveBall () {
    ballCurrentPostion[0] += xDirection
    ballCurrentPostion[1] += yDirection
    drawBall()
    checkForCollisions() 
}

timerId = setInterval(moveBall , 30)



function checkForCollisions() {

    for (let i = 0 ; i < blocks.length ; i++ ) {
        if (
            (ballCurrentPostion[0] > blocks[i].bottomLeft[0] && ballCurrentPostion[0] < blocks[i].bottomRight[0]) && ((ballCurrentPostion[1] + ballDiameter)> blocks[i].bottomLeft[1] && ballCurrentPostion[1] < blocks[i].topLeft[1]) 
        ) {
            const allBlocks =Array.from( document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i , 1)
            changeDirection()
            score++ 
            scoreDisplay.innerHTML = score;

            if (blocks.length === 0 ) {
                scoreDisplay.innerHTML = " you win"
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)
            }



        }
    }





    if (ballCurrentPostion[0] >= (boardWidth-ballDiameter) || ballCurrentPostion[1] >= (boardHeight-ballDiameter) || ballCurrentPostion[0] <= 0)  {
        changeDirection()
    }


if ((ballCurrentPostion[0] > currentPosition[0] && ballCurrentPostion[0] < currentPosition[0] + blockWidth
    
    ) && (ballCurrentPostion[1] > currentPosition[1] && ballCurrentPostion[1] < currentPosition[1] + blockHeight)) {
        changeDirection()
    }
    
    
    
    
    







    if (ballCurrentPostion[1] <= 0 ) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'You Lose'
        document.removeEventListener('keydown', moveUser)
    }


}

function changeDirection () {

if (xDirection === 2 && yDirection === 2 ) {
    yDirection = -2 
    return
}

if (xDirection === 2 && yDirection === -2 ) {
    xDirection = -2 
    return
}

if (xDirection === -2 && yDirection === -2 ) {
    yDirection = 2 
    return
}
if (xDirection === -2 && yDirection === 2 ) {
    xDirection = 2 
    return
}




}