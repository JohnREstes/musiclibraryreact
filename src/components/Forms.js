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

    render(){
        return (
            <div>
            <form>
                <input type='text' 
                placeholder='Type to search...'
                value={this.state.searchField} 
                onChange={this.handleFormChange}
                /> 
            </form>  
            </div>
        )
    }
}

export default Form