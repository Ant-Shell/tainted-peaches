import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ( { title, posterPath, id, displaySingleMovie, toggleHomeButton } ) => {
  
  
  return (
    <div className='individual-movie-card' key={ id }>
      <Link to={`/${id}`}>
      <img 
        className='movie-card-image' 
        src={ posterPath } 
        alt={ `Movie poster for ${ title }` }
        onClick={ (  ) => displaySingleMovie( id ) }
        />
        </Link>
    </div>
  )

}

export default MovieCard