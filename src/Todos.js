import React from 'react';


// {todos} accept the props
const Todos = ({todos}) => {
    //if todo true ? list : no todos
    const todoList = todos.length ? (
        //map through that list and return JSX
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
                </div>
            )
            }
        )
    ):(
        <p className="center">You have no todo's left, yay1</p>
    )

    return (
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos;