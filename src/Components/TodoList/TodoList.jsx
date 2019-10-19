import React from 'react';

const  TodoList = (props) => {
    return(
        <div>
            {props.list.map((i,index)=>{
                return(
                    <div className="todo-app" key={i.id}>
                        {i.name}
                        <button className='input_button delete' type="button" onClick={()=>{props.deleteHandler(index)}}>Delete</button>
                        <button className='input_button edit' type="button" onClick={()=>{props.editHandler(index)}}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList