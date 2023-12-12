import React from 'react';
import Movie from './Movie';

function Genre({ name, description, movieTitle1, movieTitle2 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Movie title={movieTitle1} year={2022} />
      <Movie title={movieTitle2} year={2021} />
    </div>
  );
}

export default Genre;