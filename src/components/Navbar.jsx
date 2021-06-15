import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-blue-200">
        <h1>This is a navigation bar</h1>
        {/* <Route>
          <Link to="/">Home</Link>
          <Link to="/beers">About</Link>
        </Route> */}
      </nav>
    );
  }
}

export default Navbar;
