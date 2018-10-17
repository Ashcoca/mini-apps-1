// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Component} from 'react';

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    render() {
        return (
            <div id="form container">Testing
            {/* <form id="name">
                <input type="text" placeholder="Enter name"></input>
                <input type="text" placeholder="Enter email"></input>
                <input type="text" placeholder="Enter password"></input>
                <br/><input type="submit">Submit</input>
            </form> */}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))