import React, { Component } from 'react';
import './index.css';
import movies from './../../movies';
import Movie from './movie';

class Movies extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.setState({ movies });
  }

  render() {
    return (
      <div className="movies-container">
        <ul>
          { this.state.movies.map(movie => 
            <li key={movie.title}>
              <Movie 
                title={movie.title}
                rating={movie.rating}
                description={movie.description}>
              </Movie>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Movies;