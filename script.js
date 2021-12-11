let playerTurn = 1;
let player1Blocks = [];
let player2Blocks = [];
let player1Color = '';
let player2Color = '';
let gameBoard = ['','','','','','','','','']
let currentPlayer = ''
let winner = false


player1Color = prompt('player one choose color');
player2Color= prompt('player 2 color')

function getId(id){

    if (playerTurn == 1){
        if(!player2Blocks.includes(id)){
            document.getElementById(id).style.backgroundColor = player1Color;
            playerTurn += 1;
            player1Blocks.push(id)
            currentPlayer = 'p1'
            gameBoard[id - 1] = 'p1'
            console.log(gameBoard)
            
        }else{
            alert('choose a different box')
        }
        
    }else{
        if(!player1Blocks.includes(id)){
            document.getElementById(id).style.backgroundColor = player2Color;
            playerTurn -= 1;
            player2Blocks.push(id)
            currentPlayer = 'p2'
            gameBoard[id - 1] = 'p2'
            console.log(gameBoard)
        }else{
            alert('choose a different box')
        }
    };

checkWin();
if (winner){
    alert(currentPlayer + ' is the winner')
    reset()
}
}


function checkWin(){
    if (gameBoard[0] === currentPlayer){
        if(gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer){
            winner = true
        }
    }
    if (gameBoard[3] === currentPlayer){
        if (gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[6] === currentPlayer){
        if(gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[1] === currentPlayer){
        if(gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[2] === currentPlayer){
        if(gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[0] === currentPlayer){
        if(gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[0] === currentPlayer){
        if(gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer){
            winner = true
        }
    }
    if(gameBoard[2] === currentPlayer){
        if(gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer){
            winner = true
        }
    }
}


function reset(){
        let boxes = document.querySelectorAll('td')
        player1Blocks = []
        player2Blocks = []
        winner = false
        gameBoard = ['','','','','','','','','']
        playerTurn = 1
        boxes.forEach((e) => {
            e.style.backgroundColor = 'white'
        })
}