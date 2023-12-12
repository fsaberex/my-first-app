import React from 'react';
import Genre from './Genre';

function Container() {
  return (
    <div>
      <h1>Movie App</h1>
      <Genre
        name="Comedy"
        description="Funny movies for a good laugh"
        movieTitle1="Super Funny Movie"
        movieTitle2="Hilarious Comedy"
      />
      <Genre
        name="Romance"
        description="Heartwarming love stories"
        movieTitle1="Love is in the Air"
        movieTitle2="Romantic Bliss"
      />
    </div>
  );
}

export default Container;