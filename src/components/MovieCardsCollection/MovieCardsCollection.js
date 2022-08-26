import './MovieCardsCollection.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieCardsCollection = ( { individualMovieCard } ) => {
  const movieCard = individualMovieCard.map( card => {
    return (
      <MovieCard 
      posterPath={ card.poster_path }
      id={ card.id }
      key={ card.id }
      />
    )
  })
  return (
    <div className="movie-card-collection">
      { movieCard }
    </div>
  )

}



export default MovieCardsCollection