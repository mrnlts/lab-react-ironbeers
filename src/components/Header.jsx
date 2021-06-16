import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <nav className="bg-blue-400 ml-1 mr-1 mt-1 mb-1 flex justify-center pt-2 pb-2">
          <FontAwesomeIcon icon={faHome} className="text-white text-4xl" />
        </nav>
      </Link>
    );
  }
}

export default Header;
