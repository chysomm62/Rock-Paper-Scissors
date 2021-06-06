// rock-paper-scissors
// play against computer


// array to select from
var array = ['rock', 'paper', 'scissors'];

// declaration of winner
let playerScore = 0;
let computerScore = 0;

// computer selection
const computerPlay = () => {
    let selection = Math.floor(Math.random()*array.length);
    let arraySelection = array[selection];
    
    return arraySelection;
}

const playerPlay = () => {
    let player = prompt('please input a value, either rock, paper or scissors.');
    // convert to lower case to make both parameters the same case 
    player = player.toLowerCase();
    // console.log(player);

    return player;
}

var playerSelection = playerPlay();
var computerSelection = computerPlay();

// console.log(playerSelection);
// console.log(computerSelection);

// function to check the winner
const playRound = (playerSelection, computerSelection) => {

    let result = " "
    
    // check if the inputed string is part of the array
    if(!array.includes(playerSelection)){
        alert(`Please try again \n ${playerSelection} is not ${array.join(" or ")}`);
        result = "try again";
        }

    else{
        if(playerSelection === computerSelection) {
            result = 'its a tie';
        }
        else if((playerSelection === "scissors") && (computerSelection === "paper")){
            playerScore = ++playerScore;
            result = 'you win! \n scissors cuts paper';
        }
        else if((playerSelection === "scissors") && (computerSelection === "rock")){
            computerScore = ++computerScore;
            result = 'you lose! \n rock beats scissors';
        }
        else if ((playerSelection === "rock") && (computerSelection === "scissors")){
            playerScore = ++playerScore;
            result = 'you win! \n rock beats scissors';
        }
        else if ((playerSelection === "rock") && (computerSelection === "paper")){
            computerScore = ++computerScore;
            result = 'you lose! \n paper covers rock';
        }
        else if ((playerSelection === "paper") && (computerSelection === "rock")){
            playerScore = ++playerScore;
            result = 'you win! \n paper covers rock';
        }
        else if ((playerSelection === "paper") && (computerSelection === "scissors")){
            computerScore = ++computerScore;
            result = 'you lose! \n scissors cuts paper';
        }
        
        else{
            
        }
    }
    


    return (`you chose ${playerSelection} while the computer chose ${computerSelection}, \n so ${result} `);
    
   
}


// const gameRepeat = (func, times) => {
//     func();

//     times && --times && repeat(func, times);
// }

// gameRepeat(playRound(playerSelection, computerSelection), 5);




const game = (callback, interval, times) => {

    let repeated = 0;
    

    const dotask = () => {
        if (repeated < times){
            callback();
            repeated++;
        }
        else{
            clearInterval(task);
        }
    }

    const task = setInterval(dotask, interval);

}


const selectWinner = () => {
    let finalWinner = "";
    if(playerScore > computerScore){
        finalWinner = `Player wins this set by ${playerScore} to ${computerScore}`;
    }
    else{
        finalWinner = `Computer wins this set by ${computerScore} to ${playerScore}`;
    }
    return finalWinner;
}

game();

// console.log(playerScore);


console.log(playRound(playerSelection, computerSelection));
selectWinner();







