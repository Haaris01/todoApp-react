import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
            isCompleted: false,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleDelete(evt) {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleComplete() {
        this.setState({ isCompleted: !this.state.isCompleted });
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate} >
                        <input type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button> Save </button></form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li className="Todo-task-item">
                        <label className="Todo-task-list-item-label">
                            <input type="checkbox" onClick={this.handleComplete} />
                            <span>{this.props.task}</span>
                        </label>
                        <span onClick={this.handleDelete} className="Todo-delete-btn"></span>
                    </li>
                    {/* <button onClick={this.toggleForm}> Edit </button> */}

                </div>
            )
        }
        return (<div > {result} </div>)
    }
}

export default Todo;