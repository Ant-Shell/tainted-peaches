import React from 'react';
import './MovieDetails.css'
import fetchData from '../../apiCalls.js'

class MovieDetails extends React.Component {
    constructor(  selectedMovie  ) {
        super(  selectedMovie  );
        this.state = 
            {
                id: selectedMovie.selectedMovie.id,
                movieSelected: '',
                selectedMovieTrailer: ''
            }
    }
    
    componentDidMount = ( ) => {
        fetchData( `/movies/${ this.state.id }` )
        .then( data => data.movie )
        .then( movie => this.setState( { movieSelected: movie } ) )

        fetchData( `/movies/${ this.state.id }/videos` )
        .then( data => data.videos )
        .then( videos => this.setState( { selectedMovieTrailer: videos[ 0 ] } ) )
    }

    render( ) {

        return (

                <div className='movie-details-container'>
                        <img
                            src={ this.state.movieSelected.poster_path }
                            alt='movie-poster'
                            className='poster-image'/>
                    <div className='movie-details'>
                        <h1 className='movie-title'>{ this.state.movieSelected.title }</h1>
                            <h2 className="movie-overview">Movie Overview:</h2>
                                <p className="info">{ this.state.movieSelected.overview }</p>
                            <h2 className="release-date">Release Date:</h2>
                                <p className="info">{ this.state.movieSelected.release_date }</p>
                            <h2 className="genre">Genre:</h2>
                                <p className="info">{ this.state.movieSelected.genres }</p>
                            <h2 className="runtime">Runtime:</h2>
                                <p className="info">{ this.state.movieSelected.runtime } minutes</p>
                            <h2 className="average-rating">Average Rating:</h2>
                                <p className="info">{ parseInt( this.state.movieSelected.average_rating ).toFixed( 1 ) }</p>
                            { this.state.movieSelected.budget > 0 && <h2 className="budget">Budget:</h2> }
                            { this.state.movieSelected.budget > 0 && <p className="info">${ parseInt( this.state.movieSelected.budget ).toLocaleString() }</p> }
                    </div>
                    
                    <div className='movie-trailer'>
                        <iframe
                            width="853"
                            height="480"
                            src={ this.state.selectedMovieTrailer && `https://www.youtube.com/embed/${this.state.selectedMovieTrailer.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"/>
                    </div>
                    
                </div>

        )
    }

}


export default MovieDetails;