import MovieCard from '../MovieCard/MovieCard'

const MovieCardCollection = ({ individualMovieCard }) => {
  const movieCard = individualMovieCard.map(card => {
    return (
      <MovieCard 
      posterPath={card.poster_path}
      id={card.id}
      key={card.id}
      />
    )
  })
  return (
    <div className="movie-card-collection-container">
      { movieCard }
    </div>
  )

}



export default MovieCardCollection