import React from 'react';
import './TodoApp.scss'
import TodoList from '../TodoList/TodoList';


export default class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            listArray: [],
            type : "add",
            index : "",
        }
    }

    submitHandler = (evt) =>{
        evt.preventDefault();
        var listArray = [...this.state.listArray];
        if(this.state.type === "add"){
            var obj ={
                "id" : Math.random().toString(36).substring(7), "name" : this.state.name
            }
            listArray.push(obj);
        }else{
            listArray[this.state.index].name = this.state.name;
        }
        this.setState({
            listArray: listArray,
            name : "",
            type : 'add',
            index : '',
        })
    }

    editHandler = (index)=>{
        var listArray = [...this.state.listArray],
        name = listArray[index].name;
        this.setState({
            name : name,
            index : index,
            type : 'edit'
        })
    }

    deleteHandler = (index) =>{
        if(window.confirm('Are you sure you want to delete this todo')){
            var listArray = [...this.state.listArray]
            listArray.splice(index,1)
            this.setState({
                listArray: listArray,
                name : "",
                type : 'add',
                index : '',
            })
        }
    }

    render(){
        return (
           <div className="main">
               <div className="todo-app">
                    <form onSubmit={this.submitHandler}>
                        <input 
                            className='input_text' 
                            type='text'
                            value={this.state.name}
                            onChange={(evt)=>{
                                if(evt.target.value.length <= 20){
                                    this.setState({name : evt.target.value})
                                }
                            }} 
                            required/>
                        <button
                            className='input_button add'
                            type="submit">
                            {this.state.type === "add" ?  "Add" : "Update"}
                        </button>
                    </form>
               </div>
            {this.state.listArray.length > 0 &&
                <TodoList 
                list={this.state.listArray}
                deleteHandler={this.deleteHandler}
                editHandler={this.editHandler}/>
            }
           </div>
        )
    }
}