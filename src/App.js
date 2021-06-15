import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    const link = "https://ih-beers-api2.herokuapp.com/beers";
    axios.get(link).then(res => this.setState({ beers: res.data }))
  }
  
  render() {
    const { beers } = this.state;
    return (
      <div className="h-screen">
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/beers">
            <AllBeers beers={beers} />
          </Route>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }      
}

export default App;
