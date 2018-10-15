

let playerTurn = 0;
let turnCount = 0;

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

    if (turnCount > 4) {
        if ((box1 = box2 = box3) || 
        (box4 = box5 = box6) ||
        (box7 = box8 = box9) ||
        (box1 = box5 = box9) ||
        (box3 = box5 = box7) ||
        (box1 = box4 = box7) ||
        (box2 = box5 = box8) ||
        (box3 = box6 = box9)) 
        { 
            var winnerText = this.event.target.innerText;
            var winner = document.getElementById("container").children
            for (var i = 0; i < winner.length; i++) {
                winner[i].setAttribute("class", "winner")
            }
            var winBox = document.getElementById("winner-text");
            winBox.innerText = winnerText + " Wins!";
            winBox.setAttribute("class", "winner-text-visible")

        }
    }
}



//onClick handler
let clickBox = function(event) {
    board = document.getElementById("container").children;
    var target = this.event.target;
    var box = target.innerText
    if (target.hasAttribute("name", "clicked")) {
        alert("No backsies!")
    }
    if (box === "") {
        if (playerTurn === 0) {
            target.innerText = "X";
            playerTurn = 1;
            document.getElementById("turn-text").innerText ="O's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
            checkWinnerOrCat();
        } else {
            target.innerText = "O";
            playerTurn = 0;
            document.getElementById("turn-text").innerText ="X's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
            checkWinnerOrCat();
        }
    }

    if (turnCount > 8) {
        var div = document.getElementsByClassName("board-container");
        //set the board to have a red border
        div[0].setAttribute("class", "board-container-cat");
    }
}

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

} 

//create event listener to check if there is a winner
//can also check if there is no winner
//can use count + check for row
//if count > 5 we can start checking for a winner
//if count >= 8, we can declare a cats game


