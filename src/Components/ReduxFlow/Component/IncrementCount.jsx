import React from 'react';
import './Result.scss'
import { connect } from 'react-redux'


class IncrementCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="result increment_margin">
                    <p><b>Counter Result: </b>{this.props.incrementCount}</p>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incrementCount: state.increment.increment,
    }
};

export default connect(mapStateToProps)(IncrementCount);