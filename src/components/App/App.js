import './App.css';
import React from 'react';

import Nav from  '../Nav/Nav'
import Footer from '../Footer/Footer'
import MovieCardsCollection from '../MovieCardsCollection/MovieCardsCollection'

import data from "../../fakedata"


class App extends React.Component {

  constructor( ) {
    super( )
    this.state = 
      {
        individualMovieCard: data.movies
      }
  }

  render( ) {
    return (
      <div className='app-container'>

        <Nav />

        <MovieCardsCollection 
          individualMovieCard={ this.state.individualMovieCard }/>

        <Footer />

      </div>
    )
  }

}

export default App;
