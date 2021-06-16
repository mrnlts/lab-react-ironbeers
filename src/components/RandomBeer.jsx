import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import BeerCardLarge from '../components/BeerCardLarge';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      currentBeer: '',
    };
  }

  componentDidMount() {
    const link = 'https://ih-beers-api2.herokuapp.com/beers/random';
    axios.get(link).then((res) => this.setState({ currentBeer: res.data }));
  }

  render() {
    const { currentBeer } = this.state;
    return (
      <div className="pt-1">
        <Header />
        <BeerCardLarge beer={currentBeer} />
      </div>
    );
  }
}

export default RandomBeer;
