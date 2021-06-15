import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageArticle extends Component {
  render() {
    const { type, title, img } = this.props;
    return (
      <article className="mr-1 ml-1 mb-5">
        <Link to={`/${type}`}>
          <img src={img} alt={type} />
        </Link>
        <div className="ml-5 mr-5">
          <h1 className="font-extrabold text-2xl">{title}</h1>
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
