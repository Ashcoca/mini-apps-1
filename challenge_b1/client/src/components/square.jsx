import React from 'react';


class Square extends React.Component {

    render() {
        let yourClassName = "square ";
        let tanSpaces = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23, 26, 28, 30, 32, 33, 35, 37, 39, 42, 44, 46, 48, 49, 51, 53, 55, 58, 60, 62, 64]
            if (tanSpaces.includes(this.props.number)) {    
                yourClassName += "tan";
            } else {
                yourClassName += "white";
            };
            let spanClass = "piece "
            let whitePieces = [41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];
            let tanPieces = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23];
            if (whitePieces.includes(this.props.number)) {
                spanClass += "light";
            }
            if (tanPieces.includes(this.props.number)) {
                spanClass += "dark";
            }
        return (
            <div className={yourClassName}>
                <span className={spanClass}></span>
            </div>
        );
    }
}

export default Square;