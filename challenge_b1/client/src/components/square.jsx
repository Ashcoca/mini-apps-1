import React from 'react';


class Square extends React.Component {

    render() {
        let newClass = [];
        let yourClassName = "square ";
        let tanSpaces = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23, 26, 28, 30, 32, 33, 35, 37, 39, 42, 44, 46, 48, 49, 51, 53, 55, 58, 60, 62, 64]
            if (this.props.number % 2 === 0) {    
                yourClassName += "tan";
            } else {
                yourClassName += "white";
            };
        return (
            <div className={yourClassName}>{this.props.number}</div>
        );
    }
}

export default Square;