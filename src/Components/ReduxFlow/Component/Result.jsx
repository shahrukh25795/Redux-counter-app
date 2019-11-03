import React from 'react';
import './Result.scss'
import IncrementCount from './IncrementCount';
import { connect } from 'react-redux'

class ReduxResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           incrementCount : 0,
        }
    }

    render(){
        return (
            <div>
                <h1 style={{textAlign : "center"}}>Counter Result</h1>
                <button className="inc_btn" onClick={()=>{this.setState({incrementCount : this.state.incrementCount + 1},()=>this.props.increment(this.state.incrementCount))}}>Iecrement</button>
                <button className="dec_btn" onClick={()=>{this.setState({incrementCount : this.state.incrementCount - 1},()=>this.props.increment(this.state.incrementCount))}}>Decrement</button>
                <IncrementCount/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (increment) => dispatch({ type: 'INCREMENT_COUNT', payload: { increment: increment } }),
    }
};

export default connect(null,mapDispatchToProps)(ReduxResult)