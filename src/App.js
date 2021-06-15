import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      beers: ''
    }
  }

  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(res => this.setState({beers: res.data}))
  }
  
  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        <ul>
          {[...beers].map((beer, index) => <li key={index}>{beer.name}</li>)}
          </ul>
      </div>
          );
        }
        
}

export default App;
