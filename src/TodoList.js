import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    create(task, id) {
        let newTask = { ...task, id};
        this.setState(st => ({
            todos: [...st.todos, newTask],
        }))
    }

    remove(id){
        this.setState(st => ({
            todos : st.todos.filter(t => t.id !== id),
        }))
    }

    edit(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task : updatedTask}
            }
            return todo;
        });
        this.setState({todos : updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(t => {
            return (
                <Todo
                    task={t.task} 
                    key={t.id} 
                    id={t.id}
                    removeTodo={this.remove}
                    edit={this.edit}
                />
            )
        });
        return (
            <div className="TodoList">
                <h2 className="TodoList-header">TO DO LIST</h2>
                <TodoForm create={this.create} />
                <ul className="TodoList-task-list">
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;