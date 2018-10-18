// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Component} from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form1: ["Name", "E-mail", "Password"],
            form2: ["Address Line One", "Address Line Two", "City, ST"],
            form3: ["Credit Card", "cvv", "Zip Code"]
        }
    }


    render() {
        return (
            <div id="form container">
            <form id="name">
                {this.state.label.form1[1]}
                <input type="text"></input><br/>
                {this.state.label.form1[1]}
                <input type="text"></input><br/>
                {this.state.label.form1[1]}
                <input type="text"></input><br/>
                <input type="submit"></input>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))