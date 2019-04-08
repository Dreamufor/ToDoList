import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';



class App extends Component {
  //route component, store state
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
    ]
  }
  //filter the array
  deleteTodo = (id) => {
    // console.log(id);

    const todos =  this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })

  }

  
  render() {
    return (
      <div className="todo-app container">
        <div className="row">
          <div className="col s10 m6 offset-s1 offset-m3">
            <div className="card">
          <h2 className="center teal-text">Todo list</h2>
          <ul id="tabs-swipe-demo" className="tabs">
          <li className="tab col s4"><a className="active" href="#test-swipe-1">All</a></li>
          <li className="tab col s4"><a  href="#test-swipe-2">Finish</a></li>
          <li className="tab col s4"><a href="#test-swipe-3">Unfinish</a></li>
        </ul>
          <div id="test-swipe-1" className="col s12">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </div>
          <div id="test-swipe-2" className="col s12"></div>
          <div id="test-swipe-3" className="col s12"></div>
            {/* seperate component list */}
            {/* nest component, pass the array above(state) here */}
           
            <AddTodo addTodo={this.addTodo}/>
            </div>
          </div>       
        </div>
      </div>
    );
  }
}

export default App;
