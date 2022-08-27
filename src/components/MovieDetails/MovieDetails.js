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

                <div className='movie-details'>
                    <h1>{ this.state.movieSelected.title }</h1>
                        <p>Release Date: { this.state.movieSelected.release_date }</p>
                        <p>Overview: { this.state.movieSelected.overview }</p>
                        <p>Average Rating: { this.state.movieSelected.average_rating }</p>
                        <p>Genre: { this.state.movieSelected.genres }</p>
                        <p>Runtime: { this.state.movieSelected.runtime } minutes</p>
                        <p>Budget: { this.state.movieSelected.budget }</p>
                    
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