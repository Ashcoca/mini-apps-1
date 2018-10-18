// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Component} from 'react';

var userInfo = {
    name: null,
    email: null,
    password: null
}

var addressInfo = {
    addressOne: null,
    addressTwo: null,
    city: null,
    state: null,
    phone: null
}

var paymentInfo = {
    cardNumber: null,
    cvv: null,
    zipCode: null
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div class="form container">

            <label>Name: </label><br/>
            <input type="text" id="username"
                ref="username"
                defaultValue={ userInfo.name }/><br/>
            <label>E-Mail: </label><br/>
            <input type="text" id="email"
                ref="email"
                defaultValue={ userInfo.email }/><br/>
            <label>Password: </label><br/>
            <input type="text" id="password"
                ref="password"
                defaultValue={ userInfo.password }/><br/>
            <br/><input type="submit"></input>
            
            </div>
        )
    }

}
var data = {
    name : this.refs.name.getDOMNode().value,
    email : this.refs.email.getDOMNode().value,
    password : this.refs.password.getDOMNode().value,
} 

this.props.saveValues(data)



class Address extends React.Component {
    render() {
        return (
            <div class="form container">
                <label>Address Line One: </label>
                <input type="text" id="address-one"
                    ref="address-one"
                    defaultValue={ addressInfo.addressOne }/>
                <label>Address Line Two: </label>
                <input type="text" id="address-two"
                    ref="address-two"
                    defaultValue={ addressInfo.addressTwo }/>
                <label>City: </label>
                <input type="text" id="city"
                    ref="city"
                    defaultValue={ addressInfo.city }/>
                <label>State: </label>
                <input type="text" id="state"
                    ref="state"
                    defaultValue={ addressInfo.city }/>
                <label>Phone Number: </label>
                <input type="text" id="phone"
                    ref="phone"
                    defaultValue={ addressInfo.phone }/>
            </div>
        )
    }
    
}


ReactDOM.render(<App />, document.getElementById("app"))