/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import BarChartActors from './BarChartActors';
import BarChartDirectors from './BarChartDirectors';

const IndexedMovies = ({ info = {} }) => {
  const { movies = 0, actors = 0, directors = 0 } = info;
  return (
    <div className="header">
      <h1 className="title">Statistics</h1>
      <p>Indexed movies: {movies}</p>
      <p>Indexed actors: {actors}</p>
      <p>Indexed directors: {directors}</p>
    </div>
  );
};

const Charts = ({ info }) => (
  <>
    <IndexedMovies info={info} />
    <BarChartDirectors />
    <BarChartActors />
  </>
);

export default Charts;
