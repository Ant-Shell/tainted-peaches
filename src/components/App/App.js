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
      .then(data => this.setState({ movieCards: data.movies }))
  }

  displaySingleMovie = (id) => {
    const singleMovie = this.state.movieCards.find(movie => movie.id === id)
    this.setState({ movieSelected: singleMovie })
    this.setState({ homeButton: true })
  }

  render() {
    const returnHome = () => {
      this.setState({ homeButton: false })
    }

    const showReturnHomeButton = () => {
      this.setState({ homeButton: true })
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
          <Route exact path="/tainted-peaches" render={() => <MovieCardsCollection
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
