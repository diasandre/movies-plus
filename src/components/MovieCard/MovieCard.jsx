import React from 'react';
import { CardWrapper } from '../../styles';

const MovieCard = ({ movie }) => (
  <CardWrapper>
    <h3 style={{ color: '#da0037' }}>{`${movie.title} - ${movie.year}`}</h3>
    <p>{`Directed by ${movie.director}`}</p>
    {movie?.imdb_rating && <p>{`IMDB rating: ${movie?.imdb_rating}`}</p>}
    {movie?.rotten_tomatoes_audience_rating && (
      <p>{`Rotten Tomatoes audience rating: ${movie?.rotten_tomatoes_audience_rating}`}</p>
    )}
    {movie?.rotten_tomatoes_critics_rating && (
      <p>{`Rotten Tomatoes critics rating: ${movie?.rotten_tomatoes_critics_rating}`}</p>
    )}
    <p>{movie.stars.join(', ')}</p>
  </CardWrapper>
);

export default MovieCard;
