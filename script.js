let playerTurn = 1;
let player1Blocks = [];
let player2Blocks = []

const winningCombos =[
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['1', '5', '9'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['4', '5', '6'],
    ['7', '8', '9']
]

function getId(id){
    if (playerTurn == 1){
        if(!player2Blocks.includes(id)){
            document.getElementById(id).style.backgroundColor = 'red';
            playerTurn += 1;
            player1Blocks.push(id)
        }else{
            alert('choose a different box')
        }
        
    }else{
        if(!player1Blocks.includes(id)){
            document.getElementById(id).style.backgroundColor = 'blue';
            playerTurn -= 1;
            player2Blocks.push(id)
        }else{
            alert('choose a different box')
        }
    }
    for(let i = 0; i <= winningCombos.length -1; i++){
        let newArr = []
        newArr.push(winningCombos[i])
        for(let k = 0; k <= winningCombos.length -1; k++){

            let finalArr = []
            finalArr.push(newArr[k])
            }
        }  
} 
    
function reset(){
        let boxes = document.querySelectorAll('td')
        player1Blocks = []
        player2Blocks = []
        boxes.forEach((e) => {
            e.style.backgroundColor = 'white'
        })
}
    