import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Task : </label>
                    <input
                        id="task"
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;