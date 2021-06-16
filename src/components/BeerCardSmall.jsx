import React from 'react';

import { Link } from 'react-router-dom';

const BeerCardSmall = (props) => {
  const { image_url, _id, name, tagline, contributed_by } = props.beer;
  return (
    <div>
      <li className="mt-4 h-28">
        <Link to={`/beers/${_id}`}>
          <img
            src={image_url}
            alt="beer"
            className="h-5/6 pl-3 pr-3 w-1/4 float-left object-contain"
          />

          <div className="flex flex-col">
            <h1 className="font-extrabold text-xl pb-0">{name}</h1>
            <h2 className="font-extrabold text-gray-400">{tagline}</h2>
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
};

export default BeerCardSmall;
