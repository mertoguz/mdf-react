import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    }

    //bind methods
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  fetchMovieDetails (searchQuery) {
    fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=c5d05685`)
      .then((response) => { return response.json() })
      .then((response) => { console.log(response) })
      .then(() => {
        this.setState({
          searchQuery: '',
        })
      });
  };

  inputChanged (event) {
    this.setState({
      searchQuery: event.target.value,
    })
  };

  render () {
    return (
      <div className="search-movie">
          <input type="text"
            name="search"
            placeholder="Movie Name..."
            className="search-query"
            value={this.state.searchQuery}
            onChange={this.inputChanged}
            autoComplete="off"
          />
          <button className="search-button"
            onClick={() => {this.fetchMovieDetails(this.state.searchQuery)}}
          >
            Details
          </button>
      </div>
    );
  }
}