import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
          <div>{this.props.title}</div>
          <div>{this.props.rating}</div>
          <div>{this.props.description}</div>
      </div>
    );
  }
}

export default Movie;