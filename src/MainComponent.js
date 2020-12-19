import React, { Component } from 'react'
import { connect } from 'react-redux'
// Task:  Import functions from ActionCreators
import { addTodo, toggleToDo, clearAllTasks, deleteAllTasks } from './redux/ActionCreators';

// Task: Assign reducer to prop
const mapStateToProps = (state) => {
  return {
    todo: state.ToDo
  }
}

// Task: add functions to dispatch
const mapDispatchToProps = {
  addTodo,
  toggleToDo,
  clearAllTasks,
  deleteAllTasks
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      // Task: dispatch the state value to the action creator
      this.props.addTodo(this.state.todoInput);
      this.setState({ todoInput: '' })
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <h1>Redux To Do List</h1>
        <ul>
          {this.props.todo.todo.map( (item, i) =>
          <li key={i}>
            <input
              type='checkbox'
              // Task: replace true with the property used to show completion
              checked={item.complete}
              // Task: dispatch toggle instead of console.log
              onChange={() => this.props.toggleToDo(i)}
            />
            {item.activity}
          </li>
          )}
          <div className='AddField'>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add To Redux</button>
              <button onClick={() => this.props.clearAllTasks()}>
                Clear Complete
              </button>
              <button onClick={() => this.props.deleteAllTasks()}>
                Clear List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div>
              <div>Add Tasks to list</div>
              <div>Status of task in Redux</div>
              <div>Ability to clear completed tasks</div>
              <div>Ability to remove all tasks</div>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main);
