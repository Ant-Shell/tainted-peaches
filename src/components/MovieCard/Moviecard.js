import './MovieCard.css'

const MovieCard = ( { title, posterPath, id } ) => {
  
  return (
    <div className='individual-movie-card' key={ id }>
      <img 
        className='movie-card-image' 
        src={ posterPath } 
        alt={ `Movie poster for ${ title }` } />
    </div>
  )

}

export default MovieCard