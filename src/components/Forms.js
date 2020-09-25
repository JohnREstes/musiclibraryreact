import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchField: ''
        }
    }

    handleFormChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
        this.props.handleFormChange(event.target.value)
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
            <form>
                <input type='text' 
                placeholder='Search'
                value={this.state.searchField} 
                onChange={this.handleFormChange}
                /> 
                {/* <button type="submit"> Search</button> */}
            </form>  
            </div>
        )
    }
}

export default Form