// local state to store user input 
import React, {  Component } from 'react'; 

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => { 
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        //prevent deafult submit refresh page
         e.preventDefault();
         //console.log(this.state);
         this.props.addTodo(this.state);
         //clear the input
         this.setState({
             content:''
         })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={ this.handleChange } value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;
