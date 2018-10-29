import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [1], [0], [1], [0], [1], [0], [1], [0],
                [0], [1], [0], [1], [0], [1], [0], [1],
                [1], [0], [1], [0], [1], [0], [1], [0],
                [0], [0], [0], [0], [0], [0], [0], [0],
                [0], [0], [0], [0], [0], [0], [0], [0],
                [2], [0], [2], [0], [2], [0], [2], [0],
                [0], [2], [0], [2], [0], [2], [0], [2],
                [2], [0], [2], [0], [2], [0], [2], [0],
            ],
            playerTurn: 1,
            possibleMoves: []
        }
    }

/*
                  0    1    2    3    4    5    6    7
            0    [1], [0], [1], [0], [1], [0], [1], [0],
            1    [0], [1], [0], [1], [0], [1], [0], [1],
            2    [1], [0], [1], [0], [1], [0], [1], [0],
            3    [0], [0], [0], [0], [0], [0], [0], [0],
            4    [0], [0], [0], [0], [0], [0], [0], [0],
            5    [2], [0], [2], [0], [2], [0], [2], [0],
            6    [0], [2], [0], [2], [0], [2], [0], [2],
            7    [2], [0], [2], [0], [2], [0], [2], [0],

*/

    handleClick() {
//possible moves always -1 row, and +1, -1 to row
//i.e. [2, 5] can move to [1, 4] [3, 4]
//think I'm on to something here, but I need to get ready to go
    }

    render() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            board.push(<Row number={i}/>)
        }
        return (
            <div className="board">{board}</div>
        );
    }
}

export default Board;


// newBoard() {
//     let board = [];
//     for (let i = 0; i < 8; i++) {
//         let squares = [];
//         for (let j = 0; j < 8; j++) {
//             squares.push(<td>{` `}</td>)
//         }
//     board.push(<tr>{squares}</tr>)
//     }
//     return board;
// }

//8x8 grid
//     render() {
//         return(
//           <div>  
//             <table>
//                 {this.newBoard()}
//             </table>
//           </div>
//         );
//     }
// }