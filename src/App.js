import React, { Component, setState } from 'react';
import axios from 'axios';
import './App.css';

const api = axios.create({
  baseURL: `http://www.devcodecampmusiclibrary.com/api/music`
})

class App extends Component {

  state = {
    musicCollection:[]
  }

  constructor() {
    super();
    this.getMusic();
  } catch (err){
    console.log(err);
  }

  getMusic = async () => {
    let data = await api.get('/').then(({data}) => data);
    this.setState({ musicCollection: data})
  }

  
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h3 className="display-4">Music Library Search</h3>
        {this.state.musicCollection.map(music => <h2 key={music.id}>{music.title}</h2>)}
      </header>
    </div>
    )};
}

export default App;
