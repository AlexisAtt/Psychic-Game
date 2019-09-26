
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesLeftSoFar;
var guessedLetters = [];
 



var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");
var computerGuessText = document.getElementById("computerGuess-text");



document.onkeyup = function(event) {




var userGuess = event.key; 
guessedLetters.push(userGuess);


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];






if (userGuess === computerGuess) {
    wins++;
    guessedLetters = [];
    
   
}



if (userGuess !== computerGuess ) {
    guessesLeft--

}

if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    guessedLetters = [];
    

}



winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessesLeft;
guessesSoFarText.textContent = "guesses so far: " + guessedLetters;
computerGuessText.textContent = "computer guess: " + computerGuess;





}



//user guess, keytouchup
//variable a-z
//computer generated letter 


//counters: wins, losses, guesses left (9)

//if you get 9 wrong the game resets

//your guesses so far: print the users guesses a 











