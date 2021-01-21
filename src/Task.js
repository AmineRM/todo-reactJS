import React, { Component } from 'react'

export default class Task extends Component {

    checkInput = e => {
        if ( e.target.tagName === 'SECTION' ) {
            e.target.querySelector("input").checked
            ? e.target.querySelector("input").checked = false 
            : e.target.querySelector("input").checked = true
        } else if (e.target.tagName === 'P' ) {
            if (e.target.previousSibling.tagName === 'INPUT') {
                e.target.previousSibling.checked
                ? e.target.previousSibling.checked = false 
                : e.target.previousSibling.checked = true
            }
        }
    }

    render() {
        return (
            <section className="task" onClick={this.checkInput} >
                <input 
                    type="checkbox"
                    className="checkbox"
                    />

                <p className="text">{this.props.text}</p>
            </section>
        )
    }
}
