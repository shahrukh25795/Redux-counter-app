import React from 'react';
export default class TableList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           row : '',
           col: '',
        }
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        var result ="";
        var table = document.createElement("TABLE");
        table.border = "1";
        for(var i=1; i <=this.state.col; i++){
        var row = table.insertRow(i-1);
        for (var j=1; j<=this.state.row; j++){ 
            result=(i*j);
            var cell = row.insertCell(j-1);
            cell.innerHTML = result;
        }  
        }
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }

    render(){
        return (
            <React.Fragment>
                <div className="main">
                <form onSubmit={this.submitHandler}>
                    <div className="todo-app" style={{float : "left", width : "20%"}}>
                        <input 
                            style={{width : "90%"}}
                            className='input_text' 
                            type='number'
                            placeholder="Please write no of row"
                            value={this.state.row}
                            onChange={(evt)=>{
                                if(evt.target.value.length <= 20){
                                    this.setState({row : evt.target.value})
                                }
                            }} 
                            required/>
                             </div>
                            <div className="todo-app" style={{float : "left", width : "20%"}}>
                            <input 
                                style={{width : "90%"}}
                                className='input_text' 
                                type='number'
                                placeholder="Please write no of col"
                                value={this.state.col}
                                onChange={(evt)=>{
                                    if(evt.target.value.length <= 20){
                                        this.setState({col : evt.target.value})
                                    }
                                }} 
                                required/>
                                </div>
                                <div className="todo-app" style={{float : "left", width : "10%"}}>
                                <button
                                    style={{width : "90%"}}
                                    className='input_button add'
                                    type="submit">
                                    Done
                                </button>
                            </div>
                </form>
           </div>
           <span id="dvTable"></span>
            </React.Fragment>
        )
    }
}