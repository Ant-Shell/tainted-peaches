import React from 'react';
import './App.css';
import Nav from  '../Nav/Nav'
import MovieCardCollection from '../MovieCardsCollection/MovieCardsCollection'
import Footer from '../Footer/Footer'
import data from "../../fakedata"
console.log('App', data.movies)
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      individualMovieCard: data.movies

    }
  }




  render() {
  return (
    <div>
      <Nav />
      <MovieCardCollection individualMovieCard={this.state.individualMovieCard} />
      <Footer />
    </div>
  );
  }
}

export default App;
