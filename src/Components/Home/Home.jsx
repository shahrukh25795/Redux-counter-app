import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    
        }
    }
    
    render(){
        return(
            <div className="App">
                <div>
                    <Link to="/footer">Footer</Link>
                </div>
                <div>
                    <Link to="/header">Header</Link>
                </div>
                <div>
                    <Link to="/layout">Layout</Link>
                </div>
            </div>
        )
    }
}