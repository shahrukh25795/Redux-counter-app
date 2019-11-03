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
                    clientId="605647662967-1t8v8ho5ammcd06r6m93cphd03792jn6.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    className="google"
                    onSuccess={this.gooleResponseHandler}
                    onFailure={this.gooleResponseHandler}
                />
            </div>
        )
    }
}