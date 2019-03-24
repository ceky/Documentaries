import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import "./index.css";

class Intro extends Component {
  onClickExplore = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="intro-container">
        <img className="intro-image" src="assets/bg.jpg" alt="background" />
        <div className="main-text-container">
          <div className="main-text">
            <h2>
              I've always loved documentaries. I remember as a kid enjoying
              Discovery and Animal Planet. Later in life I discovered a site
              called topdocumentaryfilms.com which became my main source of
              fulfilling my curiosity. And now with Netflix, HBO GO and others,
              all you need is time.
            </h2>
            <h2>
              As my watchlist on IMDB kept growing bigger and bigger I set
              myself on a journey of watching 100 documentaries in 2019. Also
              since there is no such thing as a stupid project. Here's mine of
              tracking the ones that I've seen and ejoyed.
            </h2>
          </div>

          <button className="explore-button" onClick={this.onClickExplore}>
            Explore
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Intro);
