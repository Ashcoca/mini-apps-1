

let playerTurn = 0;
let turnCount = 0;

// var checkWinnerOrCat = function() {
//     var box1 = document.getElementById("box1");
//     var box2 = document.getElementById("box2");
//     var box3 = document.getElementById("box3");
//     var box4 = document.getElementById("box4");
//     var box5 = document.getElementById("box5");
//     var box6 = document.getElementById("box6");
//     var box7 = document.getElementById("box7");
//     var box8 = document.getElementById("box8");
//     var box9 = document.getElementById("box9");



// }


//onClick handler
let clickBox = function(event) {
    var target = this.event.target;
    var box = target.innerText
    if (box === "[ ]") {
        if (playerTurn === 0) {
            target.innerText = "X";
            playerTurn = 1;
            document.getElementById("turn-text").innerText ="O's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
        } else {
            target.innerText = "O";
            playerTurn = 0;
            document.getElementById("turn-text").innerText ="X's Turn";
            turnCount ++;
            target.setAttribute("name", "clicked")
        }
    }
    if (turnCount > 5) {
        //check for a winner
        //we'll get the children and iterate over them all to see if they have
        //the clicked attribute
        let row1 = document.getElementById("first-row").children;
        for (var i = 0; i < row1.length; i++) {
            if (row1[i].hasAttribute("name", "clicked")) {
                if (row1[i].innerText === "X") {
                    console.log("Player 1 Wins!")

                }
                if (row1[i].innerText === "O") {
                    console.log("Player 2 Wins!")
                }
            }
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
    var allBoxes = document.getElementsByClassName("box")
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = "[ ]";
    }
    //reset the turnCount
    turnCount = 0;
    //This is a different (better) way to set the attribute
    document.getElementById("container").setAttribute("class", "board-container");

} 

//create event listener to check if there is a winner
//can also check if there is no winner
//can use count + check for row
//if count > 5 we can start checking for a winner
//if count >= 8, we can declare a cats game


