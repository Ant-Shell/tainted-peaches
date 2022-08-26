import './MovieCard.css'

const MovieCard = ( { posterPath, id } ) => {
  
  return (
    <div className='individual-movie-card' key={ id }>
      <img 
        className='movie-card-image' 
        src={ posterPath } 
        alt="poster" />
    </div>
  )

}

export default MovieCard