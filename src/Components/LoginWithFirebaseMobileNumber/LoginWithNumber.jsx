import React, { Component } from 'react';
import firebase from 'firebase';
import "./input.scss"
import CountryCodePicker from '../CountryCodePicker/CountryCodePicker';

class LoginWithNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber : "",
            code : ""
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
    //     window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //    window.recaptchaVerifier.render();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function(response) {
        }
      });
      window.recaptchaVerifier.render();
    }

    handleBtnClicked=()=>{
        firebase.auth().signOut().then(res=> {
            var phoneNumber = `+91${this.state.phoneNumber}`;
            firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult=confirmationResult;
            }).catch(function (error) {
            });
        }).catch(err=> {});
       
    }

    handleCode=()=>{
        window.confirmationResult.confirm(this.state.code).then(function (result) {
            console.log("pppppppppp",result);
        }).catch(function (error) {
            alert(error.message);
        });
    }

    countryCode=(country)=>{
        console.log(country,"country")
    }

    render() {
        return (
            <>
            <div className="input_wrapper">
                <CountryCodePicker countryCode={this.countryCode}/>
                <input className='input' type="number" value={this.state.phoneNumber} onChange={(evt)=>this.setState({phoneNumber : evt.target.value})} />
                <button className='btn' type="button" onClick={this.handleBtnClicked}>send</button>
            </div>
            <div className="input_wrapper" style={{display : "none"}} id="recaptcha-container"></div>
            <div className="input_wrapper">
            <input className='input' type="number" value={this.state.code} onChange={(evt)=>this.setState({code : evt.target.value})} />
                <button className='btn' type="button" onClick={this.handleCode}>Verify</button>
            </div>
            </>
        );
    }
}

export default LoginWithNumber;