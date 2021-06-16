import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';

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
      <div>
        <Header />
        <BeerCard beer={currentBeer} />
      </div>
    );
  }
}

export default RandomBeer;
