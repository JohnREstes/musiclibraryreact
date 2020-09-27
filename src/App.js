import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BuildTable from './components/buildTable.js';
import Form from './components/Forms.js'
import SortColumn from './components/SortColumn.js'

class App extends Component {

  constructor(props) {
    super(props)
    const titleClicked = '';
    this.state = {
      musicCollection:[],
      filteredMusic: [],
      loading: true
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.compare = this.compare.bind(this);
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

  compare(a, b) {
    const itemA = a[this.titleClicked].toUpperCase();
    const itemB = b[this.titleClicked].toUpperCase();
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }
  
  handleSearchChange(event){
    const newList = this.myFilter(event);
    this.setState({
      filteredMusic: newList,
    });
  }

  handleTitleClick(event){
    this.titleClicked = event;
    const newList = this.state.filteredMusic.sort(this.compare);
    this.setState({
      filteredMusic: newList,
    });
  }

  render(){
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="titleHeader"><h1>Music Library</h1>
        <Form 
        handleSearchChange={this.handleSearchChange}
        />
        </div>
        <table id="music">
            <thead>
              <SortColumn 
              handleTitleClick={this.handleTitleClick}
              />
              </thead>
            <BuildTable data={this.state.filteredMusic}/>
        </table>
    </div>
    )
    )
  }  
}

export default App;