import React, { Component } from 'react';
import HomePageArticle from './HomePageArticle';
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newImg from '../assets/new-beer.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageArticle
          key={0}
          type={'beers'}
          title={'All Beers'}
          img={beersImg}
        />
        <HomePageArticle
          key={1}
          type={'random'}
          title={'Random Beer'}
          img={randomImg}
        />
        <HomePageArticle key={2} type={'new'} title={'New Beer'} img={newImg} />
      </div>
    );
  }
}

export default HomePage;
