import React from 'react';
import GoogleLogin from 'react-google-login';

export default class GoogleAuth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
        
    }

    gooleResponseHandler = (response) => {
        console.log("google console",response);
    }

    render(){
        return (
            <div>
                <GoogleLogin
                    clientId="460712111994-stml72vspb53guv12pflpeih324ujpq7.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    className="google_btn"
                    onSuccess={this.gooleResponseHandler}
                    onFailure={this.gooleResponseHandler}
                />
            </div>
        )
    }
}