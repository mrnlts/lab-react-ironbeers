import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import BeerForm from '../components/BeerForm';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      addedBeer: false,
    };
  }
  addBeer = (e, state) => {
    e.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    } = state;

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    };

    console.log(newBeer);
    const link = 'https://ih-beers-api2.herokuapp.com/beers/new/';

    axios.post(link, newBeer).then((res) => {
      this.setState({ addedBeer: true });
    });
  };

  render() {
    if (this.state.addedBeer) {
      return <Redirect to="/" />;
    }
    return (
      <div className="pt-1">
        <Header />
        <BeerForm addBeer={this.addBeer} />
      </div>
    );
  }
}

export default NewBeer;
