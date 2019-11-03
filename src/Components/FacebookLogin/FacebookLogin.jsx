import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookAuth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           userData : ""
        }
    }

    componentDidMount(){

    }

    facebookResponseHandler = (response) => {
        console.log("facebook console",response);
        if(response.accessToken){
            this.setState({userData : response})
        }
    }

    render(){
        return (
            <div>
                <FacebookLogin
                    appId="701693963668775"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.facebookResponseHandler}
                    cssClass="facebook_btn"
                    icon="fa-facebook"
                    disableMobileRedirect ="true"
                    isMobile= "true"
                />
                {this.state.userData &&
                <div className="list">
                    <p><b>Name: </b>{this.state.userData.name}</p>
                    <p><b>Email: </b>{this.state.userData.email}</p>
                    {this.state.userData.picture &&
                    <p><b>Profile: </b><img src={this.state.userData.picture.data.url} alt="" /></p>}
                    <p style={{cursor : "pointer"}} onClick={()=>this.setState({userData : ""})} ><b>Logout</b></p>
                </div>}
            </div>
        )
    }
}