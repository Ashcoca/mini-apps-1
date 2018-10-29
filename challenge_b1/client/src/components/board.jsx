import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {

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



//         for (let i = 0; i < tanSpaces.length; i++) {
//             if (this.props.number === tanSpaces[i]) {
//                 this.props.number.className += "tan";
//             } else {
//                 this.props.number.className += "white";
//             };
//         }
//     return(
//         <div className={yourClassName}>{this.props.number}</div>
//     );
// }


// class Pieces extends React.Component {

//     render() {
//         let whitePieces = [41, 43, 45, 47, 50, 52, 54, 57, 59, 61, 63];
//         let tanPieces = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23];
    
//         for (let i = 0; i < whitePieces.length; i++) {
//             if (this.props.number === whitePieces[i]) {
//                 this.props.number.className += " white-piece"
//             }
//         }
//     }
// }




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