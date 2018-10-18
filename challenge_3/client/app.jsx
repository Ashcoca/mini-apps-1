// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Component} from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: [ 
            ["Name", "E-mail", "Password"],
            ["Address Line One", "Address Line Two", "City, ST"],
            ["Credit Card", "cvv", "Zip Code"]
            ]
        }
    }

    render() {
        return (
            <div id="form container">
            <form id="name">
            {this.state.form[0][0]}:<br/><input type="text"></input><br/>
            {this.state.form[0][1]}:<br/><input type="text"></input><br/>
            {this.state.form[0][2]}:<br/><input type="text"></input><br/>
            <br/><input type="submit"></input>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))