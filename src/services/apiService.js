/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
// import axios from 'axios';
import { list as listActors } from './actorsService';
import { list as listDirectors } from './directorService';
import { list as listMovies } from './moviesService';

// const BASE_URL = 'https://mocha-pie.herokuapp.com';
// const BASE_API = '/api';

export const initialLoad = async () => ({
  directors: await listDirectors(),
  actors: await listActors(),
  movies: await listMovies(),
  info: {
    movies: 400,
    actors: 800,
    directors: 200,
  },
});
