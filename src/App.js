import React, { Component } from 'react';
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
    this.setState({ musicCollection: data});
  }

  renderTableData(){
    return this.state.musicCollection.map(music => {
      const { id, title, album, artist, genre } = music
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{album}</td>
          <td>{artist}</td>
          <td>{genre}</td>
        </tr>
      )
    })
  }
  
  render(){
    return (
    <div>
        <h3 className="display-3" id="title">Music Library</h3>
        <table id="music">
          <tbody>
            <tr>
              <th>Title</th><th>Album</th><th>Artist</th><th>Genre</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
    </div>
    )
  }  
}

export default App;