import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    }

    //bind methods
    this.inputChanged = this.inputChanged.bind(this);
  }

  clearSearchQuery () {
    this.setState({
      searchQuery: '',
    });
  }

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
            onClick={() => {this.props.fetchMovieDetails(this.state.searchQuery, this.clearSearchQuery.bind(this))}}
          >
            Details
          </button>
      </div>
    );
  }
}