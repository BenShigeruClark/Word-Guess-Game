// Create an array of words.
var pioneers = ["Charles Babbage","Nathaniel Borenstein","Tim Berners-Lee","Sergey Brin",
                "Larry Page","Marty Cooper","Bill Gates","Richard Greenblatt",
                "Bill Gosper","Steve Jobs","Bob Kahn","Vint Cerf","Robert Metcalfe",
                "Admiral Grace Murray Hopper","John von Neumann","Robert Noyce","Ken Thomson",
                "Dennis Ritchie","Alan Turing","Heddy Lamar","Radia Perlaman",
                "Jorge Heraud","Lila Tretikov","Limor Fried","Reshma Sauani",
                "Mitchell Baker","Mark Zuckerberg","David Karp","Sheryl Sandberg",
                "Whitney Wolfe","Jack Dorsey","Bobby Murphy","Evan Spiegel",
                "Dror Sharon","Joe Booker","Jerry Lawson","Ken Coleman",
                "Ed Smith","Marc Hannah","Mark Dean","Clarence Ellis"]

// Create the press any key to get started
//   Choose word randomely.
var randomNumber = Math.floor(Math.random()* pioneers.length);
var chosenWord = pioneers[randomNumber];
var rightWord = [];
var wrongWord = [];
var underScores = [];

var docUnderScores = document.getElementsByClassName('underScores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

// Create underscores based on length of word.
var generateUnderScore = () => {
    for(var i = 0; i<chosenWord.length; i++) {
        underScores.push('_');
       }
       return underScores;
}

        document.onkeyup = function() {
            alert("working!");
        }
    console.log(generateUnderScore());

    document.addEventListener('keypress', (event) => {
        var keyword = String.fromCharCode(event.keyCode);
        if (chosenWord.indexOf(keyword) > -1) {
            // add to right words array
            rightWord.push(keyword);
            // replace underscore with right letter
            underScores[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScores.join('');
            docRightGuess[0].innerHTML = rightWord;
            // checks if user word matches guess
            if (underScores.join('') == chosenWord) {
                alert('wins');
            }
        }  else {
            wrongWord.push(keyword);
        }
        });

        generateUnderScore();
// Get user guess
// document.addEventListener('keypress', (event) => {
    // console.log(event);
// });
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
// Display the number of guesses the user has left
// Disply the letters that have already been guessed
// Create the number of wins to go up as each user correctly guesses name of Pioneer