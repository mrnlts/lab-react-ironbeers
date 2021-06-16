import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

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
      <div>
        <Header />
        <div className="m-1">
          <ul>
            {beers.map((beer, index) => {
              const { image_url, _id, name, tagline, contributed_by } = beer;
              return (
                <div>
                  <li key={index} className="h-36 mt-3">
                    <Link to={`/beers/${_id}`}>
                      <img
                        src={image_url}
                        alt="beer"
                        className="h-5/6 pl-3 pr-3 w-1/4 float-left object-contain"
                      />

                      <div className="flex flex-col pt-3">
                        <h1 className="font-extrabold text-xl pb-3">{name}</h1>
                        <h2 className="font-extrabold text-gray-500">
                          {tagline}
                        </h2>
                        <h3 className="text-xs">
                          <span className="font-extrabold">Created by: </span>
                          {contributed_by.split('<')[0]}
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <hr className="w-full"></hr>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllBeers;
