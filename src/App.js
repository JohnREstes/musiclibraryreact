import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BuildTable from './components/buildTable.js';
import Form from './components/Forms.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      musicCollection:[],
      loading: true
    }
  }

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
    .then(res => this.setState({ 
      musicCollection: res.data,
      loading: false
    }));
  }

  render(){
    console.log(this.state.musicCollection);
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="title"><h1>Music Library</h1><Form /></div>
        <table id="music">
          <thead>
            <tr>
              <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th>
            </tr>
            </thead>
            <BuildTable data={this.state.musicCollection}/>
        </table>

    </div>
    )
    )
  }  
}

export default App;