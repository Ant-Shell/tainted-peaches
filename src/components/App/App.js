import './App.css';
import React from 'react';

import fetchData from '../../apiCalls.js'
import Nav from  '../Nav/Nav'
import Footer from '../Footer/Footer'
import MovieCardsCollection from '../MovieCardsCollection/MovieCardsCollection'

// import data from "../../fakedata"


class App extends React.Component {

  constructor( ) {
    super( )
    this.state = 
      {
        movieCards: [ ]
      }
  }

  componentDidMount( ) {
    fetchData( 'movies' )
    .then( data => this.setState( { movieCards: data.movies } ) )
  }

  render( ) {
    return (
      <div className='app-container'>

        <Nav />

        <MovieCardsCollection 
          movieCards={ this.state.movieCards }/>

        <Footer />

      </div>
    )
  }

}

export default App;
