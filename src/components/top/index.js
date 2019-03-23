import React from "react";
import "./index.css";

const Top = () => (
  <div className="top-container">
    <div className="top-header-container">
      <h1 className="top-title">Top 10 documentaries</h1>
    </div>

    <ul className="top-list">
      <li>
        <TopMovie
          year={2013}
          source={"assets/top/movies/blackfish.jpg"}
          url={"https://www.imdb.com/title/tt2545118/"}
        >
          Blackfish
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2005}
          source={"assets/top/movies/earthlings.jpg"}
          url={"https://www.imdb.com/title/tt0358456/"}
        >
          Earthlings
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2016}
          source={"assets/top/movies/flood.jpg"}
          url={"https://www.imdb.com/title/tt5929776/"}
        >
          Before the Flood
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2010}
          source={"assets/top/movies/senna.jpg"}
          url={"https://www.imdb.com/title/tt1424432/"}
        >
          Senna
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2014}
          source={"assets/top/movies/boy.jpg"}
          url={"https://www.imdb.com/title/tt3268458/"}
        >
          The Internet's Own Boy
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2015}
          source={"assets/top/movies/winter.jpg"}
          url={"https://www.imdb.com/title/tt4908644/"}
        >
          Winter on Fire
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2002}
          source={"assets/top/movies/endurance.jpg"}
          url={"https://www.imdb.com/title/tt1189370/"}
        >
          Shackleton's Endurance
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2010}
          source={"assets/top/movies/happy.jpg"}
          url={"https://www.imdb.com/title/tt1683876/"}
        >
          Happy People
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2014}
          source={"assets/top/movies/salt.jpg"}
          url={"https://www.imdb.com/title/tt3674140/"}
        >
          The salt of the earth
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2016}
          source={"assets/top/movies/beatles.jpg"}
          url={"https://www.imdb.com/title/tt2531318/"}
        >
          The Beatles - The Touring Years
        </TopMovie>
      </li>
    </ul>

    <div className="top-header-container">
      <h1 className="top-title">Top Series</h1>
    </div>
    <ul className="top-list">
      <li>
        <TopMovie
          year={2011}
          source={"assets/top/series/human-planet.jpg"}
          url={"https://www.imdb.com/title/tt1806234/"}
        >
          Human Planet
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2006}
          source={"assets/top/series/planet-earth.jpg"}
          url={"https://www.imdb.com/title/tt0795176/"}
        >
          Planet Earth
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2014}
          source={"assets/top/series/cosmos.jpg"}
          url={"https://www.imdb.com/title/tt2395695/"}
        >
          Cosmos
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={1973}
          source={"assets/top/series/the-world-at-war.jpg"}
          url={"https://www.imdb.com/title/tt0071075/"}
        >
          The World at War
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={2003}
          source={"assets/top/series/the-first-world-war.jpg"}
          url={"https://www.imdb.com/title/tt0426688/"}
        >
          The First World War
        </TopMovie>
      </li>
      <li>
        <TopMovie
          year={1995}
          source={"assets/top/series/the-death-of-yugoslavia.jpg"}
          url={"https://www.imdb.com/title/tt0283181/"}
        >
          The Death of Yugoslavia
        </TopMovie>
      </li>
    </ul>
  </div>
);

export default Top;

const TopMovie = ({ year, source, children }) => (
  <div className="top-movie-container">
    <div className="top-movie-title">{children}</div>
    <div className="top-movie-year">- {year} -</div>
    <img className="top-movie-image" src={source} alt="movie" />
  </div>
);
