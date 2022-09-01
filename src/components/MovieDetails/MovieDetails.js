import React from 'react';
import './MovieDetails.css'
import fetchData from '../../apiCalls.js'

class MovieDetails extends React.Component {
    constructor(  selectedMovie  ) {
        super(  selectedMovie  );
        this.state = 
            {
                id: selectedMovie.selectedMovie,
                movieSelected: '',
                movieTrailers: [ ],
                selectedMovieTrailer: { }
            }
    }
    
    componentDidMount = ( ) => {
        fetchData( `/movies/${ this.state.id }` )
        .then( data => data.movie )
        .then( movie => this.setState( { movieSelected: movie } ) )

        fetchData( `/movies/${ this.state.id }/videos` )
        .then( data => data.videos )
		.then( videos => this.setState( { movieTrailers: videos } ) )
        .then( ( ) => this.setState( { selectedMovieTrailer: this.state.movieTrailers[ 0 ] } ) )
    }  

    selectDifferentTrailer = ( videos ) => {
		this.setState( { selectedMovieTrailer: videos } )
	}

    render( ) {

        return ( 

            <div className='movie-details-container'>
                    <img
                        src={ this.state.movieSelected.backdrop_path }
                        alt='movie-poster'
                        className='poster-image'/>
                <div className='movie-details'>                        
                    <h1 className='movie-title'>{ this.state.movieSelected.title }</h1>
                        <h2 className="movie-overview">Movie Overview:</h2>
                        <p className="info">{ this.state.movieSelected.overview }</p>
                        <p className="release-date">Release Date: { this.state.movieSelected.release_date }</p>
                        <p className="genre">Genre: { this.state.movieSelected.genres }</p>
                        <p className="runtime">Runtime: { this.state.movieSelected.runtime } minutes</p>
                        <p className="average-rating">Average Rating: { parseInt( this.state.movieSelected.average_rating ).toFixed( 1 ) }</p>
                        { this.state.movieSelected.budget > 0 && <p className="budget">Budget: ${ parseInt( this.state.movieSelected.budget ).toLocaleString( ) }</p> }
                </div>
                
                <div className='movie-trailer'>
                    <iframe
                        src={ this.state.selectedMovieTrailer && `https://www.youtube.com/embed/${this.state.selectedMovieTrailer.key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"/>
                </div>

                {/* THERE'S A BUG YOU HIT THE BACK BUTTON IT MORPHS THE TRAILER AND DOESN'T RETURN TO THE HOME PAGE */}
				<div className='select-different-trailer-container'>
					{ this.state.movieTrailers.length > 1 && this.state.movieTrailers.map( trailer => <button 
						key={ `${trailer.id}` } 
						onClick={ ( ) => this.selectDifferentTrailer( trailer ) }
						className='movie-trailer-buttons'>
							{ `${ trailer.type }` }
						</button> ) }
				</div>
                
            </div> 
        )
    }

}


export default MovieDetails;