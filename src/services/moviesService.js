/* eslint-disable no-unused-vars */
import axios from 'axios';

const BASE_URL = 'http://localhost:7000';
const BASE_API = '/movies';

export const list = () => axios.get(`${BASE_URL}${BASE_API}`);

export const getMoviesByActors = ([firstName, secondName]) =>
  axios.get(`${BASE_URL}${BASE_API}?stars=${firstName}AND${secondName}`);

export const getMoviesByActor = (actor) => axios.get(`${BASE_URL}${BASE_API}?stars=${actor}`);

export const getMoviesByRating = ({
  imdb,
  rotten_critics: rottenCritics,
  rotten_audience: rottenAudience,
}) =>
  axios.get(
    `${BASE_URL}${BASE_API}?rotten_tomatoes_critics_rating>=${rottenCritics}&rotten_tomatoes_audience_rating>=${rottenAudience}&imdb_rating>=${imdb}`,
  );

export const getMoviesByDirector = ({ name }) =>
  axios.get(`${BASE_URL}${BASE_API}?director=${name}`);
