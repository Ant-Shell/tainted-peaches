import './App.css';
import React from 'react';

import fetchData from '../../apiCalls.js'
import Nav from  '../Nav/Nav'
import Footer from '../Footer/Footer'
import MovieCardsCollection from '../MovieCardsCollection/MovieCardsCollection'
import MovieDetails from '../MovieDetails/MovieDetails'


class App extends React.Component {

  constructor( ) {
    super( )
    this.state = 
      {
        movieCards: [ ],
        movieSelected: ''
      }
    }
    
    componentDidMount = ( ) => {
      fetchData( '/movies' )
      .then( data => this.setState( { movieCards: data.movies } ) )
  }

    displaySingleMovie = ( id ) => {
        const singleMovie = this.state.movieCards.find( movie => movie.id === id  )
        this.setState( { movieSelected: singleMovie } )
    }

  render( ) {
    let display;
    if ( this.state.movieSelected ) {
      display = <MovieDetails selectedMovie={ this.state.movieSelected }/> 
    } else {
      display = <MovieCardsCollection 
      movieCards={ this.state.movieCards }
      displaySingleMovie={ this.displaySingleMovie }/>
    }


    return (
      <div className='app-container'>

        <Nav />

        { display }

        <Footer />

      </div>
    )
  }

}

export default App;
