import React, { Component } from 'react';

class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: '' };
  }

  componentDidMount() {
    const { beer } = this.props;
    this.setState({ beer });
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.props.beer;

    return !this.props.beer ? (
      'Loading...'
    ) : (
      <div className="m-6">
        <img src={image_url} alt="beer" className="h-56 mx-auto mt-16 mb-5" />
        <div className="flex justify-between">
          <div className="w-3/4">
            <h1 className="text-2xl font-black mb-1 my-auto">{name}</h1>
            <h2 className="font-black text-gray-400">{tagline}</h2>
          </div>
          <div className="text-right my-auto">
            <h1 className="text-gray-300 font-black text-2xl mb-1">
              {attenuation_level}
            </h1>
            <h3 className="font-black text-xs">{first_brewed}</h3>
          </div>
        </div>
        <div>
          <p className="mt-5 mb-5 font-black text-sm leading-4">
            {description}
          </p>
          <p>{contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerCard;
