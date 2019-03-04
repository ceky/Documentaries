import React, { Component } from 'react';
import './index.css';
import movies from './../../movies';

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.setState({ movies });
  }

  render() {
    return (
      <div className="main-container">
        Main

        <ul>
         { this.state.movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;