import React, { Component } from 'react';
import './App.scss';
import Task from './Task'

export default class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            tasks : [],
            searchBarValue : '',
            addTaskBarValue : '',
            tasksNum : 0
        }

        this.searchInput = React.createRef();
    }

    addTask = e => {
        e.preventDefault()
        if ( this.state.addTaskBarValue !== '' ){
            this.setState({
                task : this.state.tasks.push(
                    {
                        id : this.state.tasksNum,
                        text : this.state.addTaskBarValue,
                    }
                ),
                addTaskBarValue : '',
                tasksNum : this.state.tasksNum + 1
            })
        }
    }

    searchTask = e => {
        e.preventDefault()
        if ( this.state.searchBarValue !== '' ){
            this.state.tasks.forEach( task => {
                let taskText = task.text.toLowerCase();
                let searchBarValueText = this.state.searchBarValue.toLowerCase();
                if (taskText.indexOf(searchBarValueText) !== -1) {
                    console.log(task.text); // display just section has task.text
                }
            })
        }
    }

    handleSearchInputChange = e => {
        this.setState({
            searchBarValue : e.target.value
        })
    }

    handleAddTaskInputChange = e => {
        this.setState({
            addTaskBarValue : e.target.value
        })
    }

    render() {
        return (
            <>
                <form id="searchBar" onKeyUp={this.searchTask} onSubmit={this.searchTask}>
                    <label htmlFor="searchInput" onClick={this.searchTask} >
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </label>
                    <input 
                        id="searchInput"
                        value={this.state.searchBarValue}
                        onChange={this.handleSearchInputChange} 
                        ref={this.searchInput}
                        type="text"
                        placeholder="Search" />
                </form>

                <form id="writingBar" onSubmit={this.addTask} >
                    <label htmlFor="writingInput" onClick={this.addTask} >
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                    </label>
                    <input 
                        value={this.state.addTaskBarValue}
                        onChange={this.handleAddTaskInputChange} 
                        id="writingInput"
                        type="text"
                        placeholder="Write..." />
                </form>

                <div id="tasks">
                    {this.state.tasks.map(
                        task => <Task text={task.text} key={task.id} /> 
                    )}
                </div>
            </>
        )
    }

}
