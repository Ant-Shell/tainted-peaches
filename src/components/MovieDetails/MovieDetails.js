import React from 'react';
import './MovieDetails.css'
import fetchData from '../../apiCalls.js'

class MovieDetails extends React.Component {
	constructor(  selectedMovie  ) {
		super( );
		this.state = 
			{
				id: selectedMovie.selectedMovie,
				movieSelected: '',
				movieTrailers: [ ],
				selectedMovieTrailer: { },
			}
	}
    
	componentDidMount = ( ) => {
		this.props.showReturnHomeButton( );

		fetchData( `/movies/${ this.state.id }` )
		.then( data => data.movie )
		.then( movie => this.setState( { movieSelected: movie } ) )

		fetchData( `/movies/${ this.state.id }/videos` )
		.then( data => data.videos )
		.then( videos => this.setState( { movieTrailers: videos } ) )
		.then( ( ) => this.setState( { selectedMovieTrailer: this.state.movieTrailers[ 0 ] } ) )
	}  

    selectDifferentTrailer = ( video ) => {
		this.setState( { selectedMovieTrailer: video } )
	}

    render( ) {

			if( !this.state.movieSelected ) {
				return ( <h1 className='details-error-message'>Our apologies, but our servers are temporarily down. Please try again later.</h1> )
			} else {
			return ( 
				<div className='movie-details-container'>
					<img
						src={ this.state.movieSelected.backdrop_path }
						alt='movie-poster'
						className='poster-image'/>
							<div className='movie-details'>                        
								<h1 className='movie-title'>{ this.state.movieSelected.title }</h1>
									<p className="info">{ this.state.movieSelected.overview }</p>
									<p className="release-date">Release Date: { this.state.movieSelected.release_date }</p>
									<p className="genre">Genre: { this.state.movieSelected.genres.length > 1 ? ( this.state.movieSelected.genres ).join( ' - ' ) : this.state.movieSelected.genres }</p>
									<p className="runtime">Runtime: { this.state.movieSelected.runtime } minutes</p>
									<p className="average-rating">Average Rating: { parseInt( this.state.movieSelected.average_rating ).toFixed( 1 ) }/10</p>
									{ this.state.movieSelected.budget > 0 && <p className="budget">Budget: ${ parseInt( this.state.movieSelected.budget ).toLocaleString( ) }</p> }
							</div>
							
							{ this.state.selectedMovieTrailer &&
							<div className='movie-trailer'>
								<iframe
									src={ this.state.selectedMovieTrailer && `https://www.youtube.com/embed/${ this.state.selectedMovieTrailer.key }` }
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="Embedded youtube"/>
							</div> }

							<div className='select-different-trailer-container'>
								{ this.state.movieTrailers.length > 1 && this.state.movieTrailers.map( trailer => <button 
									key={ `${ trailer.id }` } 
									src={ `https://www.youtube.com/embed/${ trailer.key }` }
									onClick={ ( ) => this.selectDifferentTrailer( trailer ) }
									className='movie-trailer-buttons'>
										{ `${ trailer.type }` }
									</button> ) }
							</div>
				</div> 
            )
        }
	}

}


export default MovieDetails;