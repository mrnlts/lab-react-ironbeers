import React, { Component } from 'react';

class BeerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: undefined,
      contributed_by: '',
    };
  }

  handleChange = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    this.setState({
      [prop]: value,
    });
  };

  handleClick = (e) => {
    this.props.addBeer(e, this.state);
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    } = this.state;

    return (
      <div>
        <form className="ml-7 mr-7 flex flex-col font-bold text-xs">
          <label htmlFor="name" className="pt-5">
            Name
          </label>
          <input
            required
            className="border rounded-full h-7"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Tagline</label>
          <input
            required
            className="border rounded-full h-7"
            type="text"
            name="tagline"
            value={tagline}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            required
            className="border rounded-xl h-32"
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="first_brewed">First brewed in ...</label>
          <input
            required
            className="border rounded-full h-7"
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="brewer_tips">Brewer tips</label>
          <input
            required
            className="border rounded-full h-7"
            type="text"
            name="brewer_tips"
            value={brewer_tips}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            required
            className="border rounded-full h-7"
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            required
            className="border rounded-full h-7"
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={this.handleChange}
          />
          <br />
          <button
            className="text-white font-extrabold text-xs rounded-full p-2 "
            onClick={this.handleClick}
          >
            ADD NEW
          </button>
        </form>
      </div>
    );
  }
}

export default BeerForm;
