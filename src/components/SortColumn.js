import React, { Component } from 'react'

class SortColumn extends Component {

    handleTitleClick = (event) => {
        this.props.handleTitleClick(event)
    }

    render(){
        return (
            <tr>
            <th id="title" onClick={el => this.handleTitleClick(el.target.id)}>Title</th>
            <th id="album" onClick={el => this.handleTitleClick(el.target.id)}>Album</th>
            <th id="artist" onClick={el => this.handleTitleClick(el.target.id)}>Artist</th>
            <th id="genre" onClick={el => this.handleTitleClick(el.target.id)}>Genre</th>
            </tr>
        )
    }
}

export default SortColumn