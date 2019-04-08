import React from 'react';


// {todos} accept the props
const Todos = ({todos, deleteTodo}) => {
    //if todo true ? list : no todos
    const todoList = todos.length ? (
        //map through that list and return JSX
        todos.map(todo => {
            return(
                    <li className="collection-item" key={todo.id}><label><input type="checkbox"/><span>{todo.content}</span></label><a href="#!" onClick={() => deleteTodo(todo.id)} className="secondary-content" style={{color: '#ff8a65'}}><i className="material-icons">delete</i></a></li>               
            ) 
            }
        )
    ):(
        <p className="center">You have no todo's left, yay!</p>
    )

    return (
        <ul className="collection">
        {todoList}
        </ul>
       

    )
}

export default Todos; 