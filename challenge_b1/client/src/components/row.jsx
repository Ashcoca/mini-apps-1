import React from 'react';
import Square from './square.jsx';

class Row extends React.Component {
    
    render() {
        let rows = [];
        for (let i = 1; i < 9; i++) {
            rows.push(<Square number={(this.props.number * 8) + i}/>)
        }
        return (
            <div className="row">{rows}</div>
        );
    }
}

export default Row;