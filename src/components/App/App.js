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
        movieSelected: '',
        homeButton: false
      }
    }
    
    componentDidMount = ( ) => {
      fetchData( '/movies' )
      .then( data => this.setState( { movieCards: data.movies } ) )
  }

    displaySingleMovie = ( id ) => {
        const singleMovie = this.state.movieCards.find( movie => movie.id === id  )
        this.setState( { movieSelected: singleMovie } )
        this.setState( { homeButton: true } )
    }

   

  render( ) {

    const returnHome = ( ) => {
      this.setState( { homeButton: false } )
    }
    
    return (
      <div className='app-container'>

        <Nav homeButton={ this.state.homeButton } returnHome={ returnHome }/>

        {this.state.homeButton ? <MovieDetails selectedMovie={ this.state.movieSelected }/> : <MovieCardsCollection 
        movieCards={ this.state.movieCards } displaySingleMovie={ this.displaySingleMovie }/>}

        <Footer />

      </div>
    )
  }

}

export default App;
