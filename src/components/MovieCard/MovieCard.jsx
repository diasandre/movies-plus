import React from 'react';
import { CardWrapper } from '../../styles';

const MovieCard = ({ movie }) => (
  <CardWrapper>
    <h2>{movie.title}</h2>
    <p>{movie.ratings.imdb}</p>
    <p>{movie.ratings.rottenCritics}</p>
    <p>{movie.ratings.rottenAudience}</p>
  </CardWrapper>
);

export default MovieCard;
