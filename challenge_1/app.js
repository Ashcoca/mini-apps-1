

let playerTurn = 0;
let turnCount = 1;

var checkWinnerorCat = function() {
    var box1 = document.getElementById("box1")
    var box2 = document.getElementById("box2")
    var box3 = document.getElementById("box3")
    var box4 = document.getElementById("box4")
    var box5 = document.getElementById("box5")
    var box6 = document.getElementById("box6")
    var box7 = document.getElementById("box7")
    var box8 = document.getElementById("box8")
    var box9 = document.getElementById("box9")


}


//onClick handler
let clickBox = function(event) {
    console.log(turnCount)
    var target = this.event.target;
    var box = target.innerText
    if (box === "[ ]") {
        if (playerTurn === 0) {
            target.innerText = "X";
            playerTurn = 1;
            turnCount ++;
            target.setAttribute("name", "clicked")
            console.log(target)
        } else {
            target.innerText = "O";
            playerTurn = 0;
            turnCount ++;
            target.setAttribute("name", "clicked")
            console.log(target)
        }
    }
    if (turnCount > 5) {

    }
}

let clearBoxes = function() {
    //create an array of all our 'box' elements, then we iterate through and change the val
    var allBoxes = document.getElementsByClassName("box")
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = "[ ]";
    }
} 

//create event listener to check if there is a winner
//can also check if there is no winner
//can use count + check for row
//if count > 5 we can start checking for a winner
//if count >= 8, we can declare a cats game


