const  getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
 if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
} else {
    console.log ('Error, please type: rock, paper or scissors.');
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 3:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice ) => {
 if (userChoice === computerChoice){
     return 'This game is a tie!';
 }
 if (userChoice === 'paper'){
     if (computerChoice === 'paper'){
         return "Sorry, but computer won!";
        } else {
            return "Congrats, you won!";
        }
     }
     if (userChoice === 'paper'){
         if (computerChoice === 'scissors'){
             return "Sorry, but computer won!";
         } else {
             return "Congrats, you won";
         }
     }
     if (userChoice === 'scissors'){
         if(computerChoice === 'rock'){
         return "Sorry, but computer won!";
     } else {
         return "Congrats, you won";
        }
    }

    if( userChoice === 'bomb'){
        return 'Congrats you won!'
    }
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`Your choice ${userChoice}`);
    console.log(`Computer choice ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame()
