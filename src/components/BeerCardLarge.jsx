import React, { Component } from 'react';

class BeerCardLarge extends Component {
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
      <div className="m-4">
        <img src={image_url} alt="beer" className="h-56 mx-auto mt-16 mb-5" />
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-2xl font-bold mb-1 my-auto">{name}</h1>
            <h2 className="font-black text-gray-400">{tagline}</h2>
          </div>
          <div className="text-right my-auto">
            <h1 className="text-gray-300 text-2xl mb-1">{attenuation_level}</h1>
            <h3 className="font-extrabold text-xs">{first_brewed}</h3>
          </div>
        </div>
        <div>
          <p className="mt-5 mb-5 font-black text-sm leading-4">
            {description}
          </p>
          <p className="font-black text-xs text-gray-500">{contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerCardLarge;
