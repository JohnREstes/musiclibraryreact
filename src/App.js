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
      loading: true,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
    .then(res => this.setState({ 
      musicCollection: res.data,
      loading: false
    }));
  }

  handleChange(event){
    this.setState({value: event})
    console.log('Searched term: ' + event);
  }

  handleSubmit = () => {
    const { musicCollection } = this.state;
    console.log(`clicked submit` + musicCollection);
  }

  render(){
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="title"><h1>Music Library</h1>
        <Form 
        handleFormChange={this.handleChange}
        />
        {/* <button type="submit" onClick={this.handleSubmit}> Search</button> */}
        </div>
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