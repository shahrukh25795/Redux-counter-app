import React from 'react';

export default class GitHubSigleUserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    render(){
        return (
            <div>git single user</div>
        )
    }
}   