import React, { Component } from 'react';
import './index.css';


class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <img src="assets/bg.jpg"></img>
        <h3>I set myself on a journey of watching 100 documentaries in 2019</h3>
        <h4>These are the ones I've seen so far</h4>
        <a className="explore-button" href="/movies">Explore</a>
      </React.Fragment>
    );
  }
}

export default Intro;