import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './index.css';


class Intro extends Component {

  onClickExplore = () => {
    this.props.history.push('/movies');
  };

  render() {
    return (
      <div className="intro-container">
        <img src="assets/bg.jpg"></img>
        <div className="main-text-container">
          <h1>I set myself on a journey of watching 100 documentaries in 2019</h1>
          <button className="explore-button" onClick={this.onClickExplore}>Explore</button>
        </div>        
      </div>
    );
  }
}

export default withRouter(Intro);