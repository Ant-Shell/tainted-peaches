import React from 'react';

import fetchData from '../../apiCalls.js'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import MovieCardsCollection from '../MovieCardsCollection/MovieCardsCollection'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state =
    {
      movieCards: [],
      movieSelected: '',
      homeButton: false
    }
  }

  componentDidMount = () => {
    fetchData('/movies')
      .then(data => this.setState({ ...this.state, movieCards: data.movies }))
  }

  displaySingleMovie = (id) => {
    const singleMovie = this.state.movieCards.find(movie => movie.id === id)
    this.setState({ ...this.state, movieSelected: singleMovie })
    this.setState({ ...this.state, homeButton: true })
  }

  render() {
    const returnHome = () => {
      this.setState({ ...this.state, homeButton: false })
    }

    const showReturnHomeButton = () => {
      this.setState({ ...this.state, homeButton: true })
    }

    return (
      <div className='app-container'>
        <Nav
          homeButton={this.state.homeButton} />
        <Switch>
          <Route exact path="/:id" render={({ match }) => <MovieDetails
            selectedMovie={match.params.id}
            showReturnHomeButton={showReturnHomeButton}
          />
          } />
          <Route exact path="/" render={() => <MovieCardsCollection
            movieCards={this.state.movieCards}
            displaySingleMovie={this.displaySingleMovie}
            returnHome={returnHome} />
          } />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
