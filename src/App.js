import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BuildTable from './components/buildTable.js';
import Form from './components/Forms.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      musicCollection:[],
      filteredMusic: [],
      loading: true,
      searchValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
    .then(res => this.setState({ 
      musicCollection: res.data,
      filteredMusic: res.data,
      loading: false
    }));
  }
  
  myFilter(search){
    return this.state.musicCollection.filter(function(el) {
        return el["title"].toLowerCase().includes(search.toLowerCase()) ||
        el["album"].toLowerCase().includes(search.toLowerCase()) ||
        el["artist"].toLowerCase().includes(search.toLowerCase()) ||
        el["genre"].toLowerCase().includes(search.toLowerCase());
    }
  )}

  handleChange(event){
    this.setState({searchValue: event})
    const newList = this.myFilter(event);
    this.setState({
      filteredMusic: newList,
    })
  }

  render(){
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="title"><h1>Music Library</h1>
        <Form 
        handleFormChange={this.handleChange}
        />
        </div>
        <table id="music">
          <thead>
            <tr>
              <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th>
            </tr>
            </thead>
            <BuildTable data={this.state.filteredMusic}/>
        </table>

    </div>
    )
    )
  }  
}

export default App;