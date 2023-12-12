import React from 'react';

function Movie({ title, year }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Year: {year}</p>
    </div>
  );
}

export default Movie;