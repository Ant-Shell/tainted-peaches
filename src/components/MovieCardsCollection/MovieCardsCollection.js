import './MovieCardsCollection.css'
import MovieCard from '../MovieCard/MovieCard'
import { useEffect } from 'react'

const MovieCardsCollection = ({ movieCards, displaySingleMovie, returnHome }) => {

  useEffect(() => {
    returnHome()
  }, [ ])

  const movieCard = movieCards.map(card => {
    return (
      <MovieCard
        title={card.title}
        posterPath={card.poster_path}
        id={card.id}
        key={card.id}
        displaySingleMovie={displaySingleMovie}
      />
    )
  })

  return (
    <div className="movie-card-collection">
      {movieCards.length ? movieCard : <h1 className='error-message'>Our apologies, but our servers are temporarily down. Please try again later.</h1>}
    </div>
  )

}



export default MovieCardsCollection