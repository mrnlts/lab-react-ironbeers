import React, { Component } from 'react';
import HomePageArticle from './HomePageArticle';
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newImg from '../assets/new-beer.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageArticle type={'beers'} title={'All Beers'} img={beersImg} />
        <HomePageArticle
          type={'random'}
          title={'Random Beer'}
          img={randomImg}
        />
        <HomePageArticle type={'beers'} title={'New Beer'} img={newImg} />
      </div>
    );
  }
}

export default HomePage;
