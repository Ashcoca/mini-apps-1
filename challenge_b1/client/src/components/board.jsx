import React from 'react';


class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.newBoard()
        }
    }
/*
            board: [
                [1],[0],[1],[0],[1],[0],[1],[0],
                [0],[1],[0],[1],[0],[1],[0],[1],
                [1],[0],[1],[0],[1],[0],[1],[0],
                [0],[1],[0],[1],[0],[1],[0],[1],
                [1],[0],[1],[0],[1],[0],[1],[0],
                [0],[1],[0],[1],[0],[1],[0],[1],
                [1],[0],[1],[0],[1],[0],[1],[0],
                [0],[1],[0],[1],[0],[1],[0],[1],
            ]
*/

newBoard = function() {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i]=[0];
        for (let j = 0; j < 8; j++) {
            board[i][j] = [0];
        }
    }
    return board;
}

//breaking for lunch

//8x8 grid
    render() {
        return(
            <div>{this.newBoard().map((square) => {
                <div class="square">{square}</div>
            })}
            </div>
        )
    }
}

export default Board;