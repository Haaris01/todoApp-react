import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            id: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.create(this.state, uuidv4());
        this.setState({
            task: '',
        })
    }

    render() {
        return (
            <div className="TodoForm">
                    <form onSubmit={this.handleSubmit} className="Todo-add-task">
                        <input
                            id="task"
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                            className="TodoForm-task-input"
                            placeholder="Add new task"
                        />
                        <input className="TodoForm-submit-task" type="submit" value="" onClick={this.handleSubmit}></input>
                    </form>
            </div>
        )
    }
}

export default TodoForm;