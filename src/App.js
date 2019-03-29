import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  //route component, store state
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
    ]
 

  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      {/* seperate component list */}
      {/* nest component, pass the array above(state) here */}
      <Todos todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
