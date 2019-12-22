import React from 'react';
import './assets/App.css';

//components
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieDetails: null,
    }

    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }
  //gets callback from child to update child component's state.
  fetchMovieDetails (searchQuery, clearSearchQuery) {
    fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=c5d05685`)
      .then((response) => { return response.json() })
      .then((response) => {
        this.setState({
          movieDetails: response,
        })
       })
      .then(() => {
        clearSearchQuery();
      });
  };

  render () {
    return (
      <div className="App">
        <header className="header">
          Search a movie by name.
        </header>
        <Search fetchMovieDetails={this.fetchMovieDetails}/>
        <MovieDetails details={this.state.movieDetails}/>
      </div>
    );
  }
}

export default App;
