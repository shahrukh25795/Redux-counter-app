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
                <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/person')}>
                <h1>Person List</h1>
            </div>
            <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/todo-app')}>
                <h1>Todo App</h1>
            </div>
            <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/redux-count')}>
                <h1>Redux Counter</h1>
            </div>
            <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/git-single-user')}>
                <h1>Git Single user</h1>
            </div>
            <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/git-multi-user')}>
                <h1>Git Multi User</h1>
            </div>
            <div style={{cursor:"pointer"}} className="container" onClick={()=>this.props.history.push('/table-list')}>
                <h1>Table List</h1>
            </div>
            </React.Fragment>
        )
    }
}