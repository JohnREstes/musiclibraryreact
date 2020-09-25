import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchField: ''
        }
    }

    handleSearchField = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.searchField}`);
        event.preventDefault()
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                placeholder='Search'
                value={this.state.searchField} 
                onChange={this.handleSearchField}
                /> &nbsp;
                <button type="submit"> Search</button>
            </form>  
            </div>
        )
    }
}

export default Form