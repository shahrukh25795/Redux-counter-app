import React, { Component } from 'react';
import firebase from 'firebase';
// import * as firebase from 'firebase/app';
import "./input.scss"

class LoginWithNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber : "",
        }
    }

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBIBiRUPLkZAEWlFD5HWe6vIeaqHWSWpmA",
            authDomain: "react-demo-7acc1.firebaseapp.com",
            databaseURL: "https://react-demo-7acc1.firebaseio.com",
            projectId: "react-demo-7acc1",
            storageBucket: "react-demo-7acc1.appspot.com",
            messagingSenderId: "460712111994",
            appId: "1:460712111994:web:d6ba202b8694491be930c3",
            measurementId: "G-3MTTQQLXX9"
          };
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    handleBtnClicked=()=>{
        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': function(response) {
                console.log(this.state.phoneNumber,response,"555555")
                this.handleLogin(recaptchaVerifier)
            }
          });
        
    }

    handleLogin=(recaptchaVerifier)=>{
        firebase.auth().signInWithPhoneNumber(this.state.phoneNumber,recaptchaVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          console.log(confirmationResult,"888888")
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
        });
    }

    render() {
        return (
            <div className="input_wrapper">
                <input className='input' type="number" value={this.state.phoneNumber} onChange={(evt)=>this.setState({phoneNumber : evt.target.value})} />
                <button className='btn' type="button" id='sign-in-button' onClick={this.handleBtnClicked}>Verify</button>
            </div>
        );
    }
}

export default LoginWithNumber;