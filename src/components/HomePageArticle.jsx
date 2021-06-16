import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageArticle extends Component {
  render() {
    const { type, link, title, img } = this.props;
    return (
      <article className="m-1 mb-5">
        <Link to={link}>
          <img src={img} alt={type} />
        </Link>
        <div className="ml-1 mr-1">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vivamus
            phratera egectas lecturs, sit amete elenfend ex tincidun in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </article>
    );
  }
}

export default HomePageArticle;
