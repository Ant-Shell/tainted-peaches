import './MovieCard.css'

const MovieCard = ( { title, posterPath, id, displaySingleMovie } ) => {
  
  
  return (
    <div className='individual-movie-card' key={ id }>
      <img 
        className='movie-card-image' 
        src={ posterPath } 
        alt={ `Movie poster for ${ title }` }
        onClick={ (  ) => displaySingleMovie( id ) }
        />
    </div>
  )

}

export default MovieCard