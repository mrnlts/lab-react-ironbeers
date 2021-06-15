import React, { Component } from 'react';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: this.props.beers,
    };
  }

  render() {
    return (
      <div>
        <h1>All beers</h1>
      </div>
      //     <ul>
      // {beers.map((beer, index) => (
      //     <li key={index}>{beer.name}</li>
      //     ))}
      // </ul>
    );
  }
}

export default AllBeers;
