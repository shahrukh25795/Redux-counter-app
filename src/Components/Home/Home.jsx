import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    submitHandler = (e)=>{
        e.preventDefault()
        if(this.checkValidation()){
            
        }
    }

    checkValidation =()=>{
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            if(inputs[i].value.trim() === ""){
                console.log(inputs[i].value.trim())
                document.getElementById(`error_${inputs[i].id}`).innerHTML = "Please fill in this field "
                document.getElementById(`error_${inputs[i].id}`).focus();
            }
            // myObject[inputs[i].id] = inputs[i].value;
          }
        // if (document.form.email.value.trim() === "") {
        //     console.log("shahrukh")
        //     document.form.email.focus();
        //     return false;
        // }
        // if (document.form.email.value !== "") {
        //     console.log("shahrukh khan")
        //         document.form.email.focus();
        //         return false;
        // }
        // return true;
    }
    
    render(){
        return(
            <div className="App">
                <form onSubmit={this.submitHandler} noValidate={true}>
                    <div>
                        <input id="email" type='email' value={this.state.email}  onChange={(e)=>{this.setState({email : e.target.value},()=>{this.checkValidation()})}}/>
                    <div id="error_email"></div>
                    </div>
                    <div>
                        <input id="password" type='password' value={this.state.password}  onChange={(e)=>{this.setState({password : e.target.value},()=>{this.checkValidation()})}}/>
                        <div id="error_password"></div>
                    </div>
                    <div>
                        <input type='submit' value={"submit"}/>
                    </div>
                </form>
            </div>
        )
    }
}