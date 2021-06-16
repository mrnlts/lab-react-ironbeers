import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import OneBeer from './components/OneBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
    }
  }

  componentDidMount(){
    const link = "https://ih-beers-api2.herokuapp.com/beers";
    axios.get(link).then(res => this.setState({ beers: res.data }))
  }

  render() {
    const { beers} = this.state;
    return (
      <div className="h-screen">
        <Switch>
          <Route exact path="/beers/:id" component={OneBeer}/>
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
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
