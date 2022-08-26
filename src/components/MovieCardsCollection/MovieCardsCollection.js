import './MovieCardsCollection.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieCardsCollection = ( { movieCards } ) => {
  const movieCard = movieCards.map( card => {
    return (
      <MovieCard 
      title={ card.title }
      posterPath={ card.poster_path }
      id={ card.id }
      key={ card.id }
      />
    )
  })
  return (
    <div className="movie-card-collection">
      { movieCard }
      { !movieCards.length && <h1 className='error-message'>Our Appologies, but our servers are temorarily down. Plesae try again later.</h1> }
    </div>
  )

}



export default MovieCardsCollection