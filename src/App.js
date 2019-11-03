import React from 'react';
import './App.css';

//components
import Search from './components/Search';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="header">
          Search a movie by name.
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
