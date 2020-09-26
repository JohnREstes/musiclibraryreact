import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BuildTable from './components/buildTable.js';
import Form from './components/Forms.js'
import SortColumn from './components/SortColumn.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      musicCollection:[],
      filteredMusic: [],
      loading: true,
      searchValue: '',
      clickIndex: ''
    }
    this.handleChange = this.handleSearchChange.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
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
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  mySort(sortTitle){
    this.state.filteredMusic.sort(this.compare);
  } 
  

  handleSearchChange(event){
    this.setState({searchValue: event})
    const newList = this.myFilter(event);
    this.setState({
      filteredMusic: newList,
    })
  }

  handleTitleClick(event){
    this.setState({clickIndex: event});
    console.log(event);
    this.mySort(event)
    // const newList = this.myFilter(event);
    // this.setState({
    //   filteredMusic: newList,
    // })
  }

  render(){
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="titleHeader"><h1>Music Library</h1>
        <Form 
        handleFormChange={this.handleSearchChange}
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