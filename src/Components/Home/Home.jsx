import React from 'react';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="container" onClick={()=>this.props.history.push('/person')}>
                <h1>Person List</h1>
            </div>
            <div className="container" onClick={()=>this.props.history.push('/todo-app')}>
                <h1>Todo App</h1>
            </div>
            </React.Fragment>
        )
    }
}