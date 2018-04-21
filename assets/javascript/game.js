//Create answers
//Computer chooses answers
//User inputs one letter at a time


//Set up an array of planets
var selectPoses = ["Balasana", "Utkatasana", "Savasana", "Bakasana", "Dhanurasana", "Matsyasana", "Malasana", "Tittibhasana"];
//how many times can the letter be pressed
//



var correctLetter= [];
//incorrect letter
var incorrectLetter =[];
//Guesses the user has remaining
var guessesRemaining = 0;
const maxTries = 10;
//underscores
var underScores = [];
//The game begins
//The game ended
var gameOver = false;
//computer's choice
var computerChoice = 0;
//player's choice
var playerChoice;
var currentWord;
var correctLetterCount = [];
var guessesRemainingCount = [];
var wins = 0;
var found = false;


//audio plays on click
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}


//function to startGame
function startGame() {
//Clear out arrays
correctLetterCount = [];
guessesRemainingCount = [];
playerChoice = " ";
underScores = [];
correctLetter = [];


// computers choice of planet
computerChoice = selectPoses[Math.floor(Math.random()*selectPoses.length)];
    alert("A friendly reminder to      i n h a l e   &   e x h a l e      as you select a letter with your keyboard.")
    console.log("computer choice: " + computerChoice);
for(var i = 0; i < computerChoice.length;i++){
        underScores.push('_');
    }

    document.getElementById('wordspaces').innerHTML = underScores.join(" ");   
    guessesRemaining = 10;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;  
    console.log(computerChoice);

document.getElementById('correctLetter').innerHTML = correctLetter;

}


//Player is able to select letters
document.onkeyup = function (event) {
    var playerChoice = String.fromCharCode(event.keyCode)
     .toLowerCase();
     var incorrectChoice = true;
    if (guessesRemaining >= 1 && !found){
        console.log("player choice: "+ playerChoice);
        console.log("found letter: "+computerChoice[0]);
        //when player chooses a letter, it will appear in the appropriate place in the underscores
     for (i = 0; i < computerChoice.length; i++){
         if (playerChoice === (computerChoice[i].toLowerCase())){
             underScores[i] = playerChoice;
             console.log("Found correct letter");
             correctLetter[i] = playerChoice;
             correctLetterCount.push(i);
             console.log(" " + underScores);
             underScores[i]=playerChoice;
            incorrectChoice = false;
            document.getElementById("wordspaces").innerHTML = underScores.join (" ");
            document.getElementById("correctLetter").innerHTML = correctLetter.join (" ");

            //player gets all correct letters, they get a point
            if (underScores.indexOf("_") < 0 ) {
                wins+= 1;
                document.getElementById("wins").innerHTML = wins;
                correctLetter = []; 
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining; 
                alert("You won!")
                startGame();
            }
        }
    }
    
            if (incorrectChoice) {
                guessesRemaining -= 1;
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                correctChoice = false;
           
        }   
    }   else {
            document.getElementById('guessesRemaining'). guessesRemaining;
             guessesRemaining === 0;
            alert("You ran out of guesses.");
            console.log("You lost")
             startGame();  
    }
      }

    startGame();


       
    
    




    
    
        
        
        

  
