import React from 'react';


// {todos} accept the props
const Todos = ({todos, deleteTodo}) => {
    //if todo true ? list : no todos
    const todoList = todos.length ? (
        //map through that list and return JSX
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    {/* delete todo,  wrap this in an anonymous function, array function*/}
                <span>{todo.content}</span>
                <button onClick={() => deleteTodo(todo.id)} className="right waves-effect waves-light btn-small">Delete</button>
                </div>
            ) 
            }
        )
    ):(
        <p className="center">You have no todo's left, yay!</p>
    )

    return (
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos; 