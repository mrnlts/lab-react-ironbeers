import React, { Component } from 'react';
import Header from './Header';
import BeerCardSmall from '../components/BeerCardSmall';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: this.props.beers,
    };
  }

  render() {
    const { beers } = this.state;
    return (
      <div className="pt-1">
        <Header />
        <div className="m-1">
          <ul>
            {beers.map((beer, index) => (
              <BeerCardSmall key={index} beer={beer} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllBeers;
