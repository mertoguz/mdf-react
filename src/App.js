import React from 'react';
import './assets/App.css';

//components
import Search from './components/Search';

class App extends React.Component {
  //gets callback from child to update child component's state.
  fetchMovieDetails (searchQuery, clearSearchQuery) {
    fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=c5d05685`)
      .then((response) => { return response.json() })
      .then((response) => { console.log(response) })
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
      </div>
    );
  }
}

export default App;
