import React from 'react';
import './index.css';

const Top = () => (
    <div className="top-container">

    <div className="top-header-container">
      <h1 className="top-title">Top 10 documentaries</h1>
    </div>
    
    <ul className="top-list">
      <li>
        <TopMovie 
          year={2013}
        >
          Blackfish
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2005}
        >
          Earthlings
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2016}
        >
          Before the Flood
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2010}
        >
          Senna
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2014}
        >
          The Internet's Own Boy: The Story of Aaron Swartz
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2015}
        >
          Winter on Fire: Ukraine's Fight for Freedom
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2002}
        >
          Shackleton's Voyage of Endurance
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2010}
        >
          Happy People: A Year in the Taiga
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2014}
        >
          The salt of the earth
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2016}
        >
          The Beatles: Eight Days a Week - The Touring Years
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
          source={'assets/top/series/human-planet.jpg'} 
          url={'https://www.imdb.com/title/tt1806234/'}
        >
          Human Planet
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2006} 
          source={'assets/top/series/planet-earth.jpg'} 
          url={'https://www.imdb.com/title/tt0795176/'}
        >
        Planet Earth
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2014} 
          source={'assets/top/series/cosmos.jpg'} 
          url={'https://www.imdb.com/title/tt2395695/'}
        >
          Cosmos
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={1973} 
          source={'assets/top/series/the-world-at-war.jpg'} 
          url={'https://www.imdb.com/title/tt0071075/'}
        >
        The World at War
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={2003} 
          source={'assets/top/series/the-first-world-war.jpg'} 
          url={'https://www.imdb.com/title/tt0426688/'}
        >
        The First World War
        </TopMovie>
      </li>
      <li>
        <TopMovie 
          year={1995} 
          source={'assets/top/series/the-death-of-yugoslavia.jpg'} 
          url={'https://www.imdb.com/title/tt0283181/'}
        >
        The Death of Yugoslavia
        </TopMovie>
      </li>
    </ul>
    </div>
);

export default Top;

const TopMovie = ({year, source, children}) => (
  <div>
    <div>{children}</div>
    <div>Year: {year}</div>
    <img src={source} alt="movie"></img>
  </div>
);