import React, { Component } from 'react'
import TodoList from '../todoList/todoList';

class AddTodos extends Component {
    state = { 
        todos: [],
    }; 

    handleAdd = (event) => {
        event.preventDefault();
        const addtodos = document.getElementById('add-todos').value; 
        const todoList = [...this.state.todos, {id: Date.now(), text: addtodos}];
        this.setState({ todos: todoList });
    }

    render() { 
        return (
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <form className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg" onSubmit={this.handleAdd}>
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" id='add-todos' placeholder="Add Todo" required/>
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                        </div>
                    </div>
                </form>

                <div className="flex mb-4 items-center">
                    <TodoList todos={this.state.todos} />
                </div>
            </div>
        );
    }
}
 
export default AddTodos;