import React from 'react';

import '../assets/movieDetails.css';

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.movieFound = this.movieFound.bind(this);
        this.movie = this.movie.bind(this);
    }

    movieFound () {
        // it's API's response structure don't blame me.
        return this.props.details.Response !== 'False';
    }

    //templates
    notFound () {
        return (
            <div>There is no such a movie in this database. Why you are not trying for some other movie?</div>
        )
    }

    movie () {
        return (
            <div>
                <p className="movie-detail-header">Title</p>
                <p>{this.props.details.Title}</p>
                <p className="movie-detail-header">Release Date</p>
                <p>{this.props.details.Released}</p>
                <p className="movie-detail-header">Actors:</p>
                <p>{this.props.details.Actors}</p>
                <p className="movie-detail-header">Plot:</p>
                <p>{this.props.details.Plot}</p>
            </div>
        )
    }
    render() {
        return this.props.details ? (
            <div className="movie-details">
                { this.movieFound() ? this.movie() : this.notFound()}
            </div>
        ) : null
    }
}