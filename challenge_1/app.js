

let playerTurn = "X";
let turnCount = 0;
let gameOver = false;
let winCount = {
    X: 0,
    O: 0
    };

//helper function to check for winners
var checkWinnerOrCat = function() {

    var box1 = document.getElementById("box1").innerText;
    var box2 = document.getElementById("box2").innerText;
    var box3 = document.getElementById("box3").innerText;
    var box4 = document.getElementById("box4").innerText;
    var box5 = document.getElementById("box5").innerText;
    var box6 = document.getElementById("box6").innerText;
    var box7 = document.getElementById("box7").innerText;
    var box8 = document.getElementById("box8").innerText;
    var box9 = document.getElementById("box9").innerText;

    let matrix = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9]
    ];

    //handle cat games
    if ((turnCount > 8) && (gameOver === false))  {
        var winBox = document.getElementById("winner-text");
        winBox.innerText = "Tie!";
        var div = document.getElementsByClassName("board-container");
        //set the board to have a red border
        div[0].setAttribute("class", "board-container-cat");
        winBox.setAttribute("class", "winner-text-visible");
        document.getElementById("new-game-btn").innerText = "Rematch?";
        return;
    }

    for (var i = 0; i < matrix.length; i++) {
        
        //horizontal match
        //matrix[row][column]
        if (
            matrix[i][0] !== "" &&
            matrix[i][0] === matrix[i][1] &&
            matrix[i][1] === matrix[i][2] 
        ) 
        { 
            var winner = this.event.target.innerText 
            gameOver = true;
            gameWinner(winner)
        };
        //vertical match
        if (
            matrix[0][i] !== "" &&
            matrix[0][i] === matrix[1][i] &&
            matrix[1][i] === matrix[2][i] 
        )
        {   var winner = this.event.target.innerText 
            gameOver = true;
            gameWinner(winner)
        };
        //left diagonal
        if (
            matrix[0][0] !== "" &&
            matrix[0][0] === matrix[1][1] &&
            matrix[1][1] === matrix[2][2] 
        )
        {   var winner = this.event.target.innerText 
            gameOver = true;
            gameWinner(winner)
        };
        //right diagonal
        if (
            matrix[2][0] !== "" &&
            matrix[2][0] === matrix[1][1] &&
            matrix[1][1] === matrix[0][2] 
        )
        {   var winner = this.event.target.innerText 
            gameOver = true;
            gameWinner(winner)
        };
    }
    

}

//fn to handle wins
var gameWinner = function(winText) {
    var winnerText = winText;
    var winner = document.getElementById("container").children
    var winBox = document.getElementById("winner-text");

    for (var i = 0; i < winner.length; i++) {
        winner[i].setAttribute("class", "winner")
    }
    winBox.innerText = winnerText + " Wins!";
    winBox.setAttribute("class", "winner-text-visible")
   
    if (winnerText === "X") {
        winCount.X ++;
        document.getElementById("win-x").innerText = winCount.X;
    }
    if (winnerText === "O") {
        winCount.O ++;
        document.getElementById("win-o").innerText = winCount.O;
    }
}

//onClick handler
let clickBox = function(event) {
    board = document.getElementById("container").children;
    var target = this.event.target;
    var box = target.innerText

    if (box === "") {
        if (playerTurn === "X") {
            target.innerText = "X";
            playerTurn = "O";
            document.getElementById("turn-text").innerText ="O's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
            checkWinnerOrCat();
        } else {
            target.innerText = "O";
            playerTurn = "X";
            document.getElementById("turn-text").innerText ="X's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
            checkWinnerOrCat();
        }
    }
}

//reset games
let clearBoxes = function() {
    //create an array of all our 'box' elements, then we iterate through and change the val
    var allBoxes = document.getElementById("container").children;
    for (var i = 0; i < allBoxes.length-1; i++) {
        allBoxes[i].innerText = "";
        allBoxes[i].setAttribute("class", "box");
    }
    //reset the turnCount
    turnCount = 0;
    //This is a different (better) way to set the attribute
    document.getElementById("container").setAttribute("class", "board-container");
    document.getElementById("winner-text").innerText = "";
    document.getElementById("winner-text").setAttribute("class", "winner");
    document.getElementById("new-game-btn").innerText = "Restart";
    gameOver = false;


} 



