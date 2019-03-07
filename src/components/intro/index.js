import React, { Component } from 'react';
import './index.css';


class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <img src="assets/bg.jpg"></img>
        <div className="main-text-container">
          <h1>I set myself on a journey of watching 100 documentaries in 2019</h1>
          <a className="explore-button" href="/movies">Explore</a>
        </div>        
      </div>
    );
  }
}

export default Intro;