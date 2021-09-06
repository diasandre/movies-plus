/* eslint-disable no-unused-vars */
// import axios from 'axios';

// const BASE_URL = 'https://mocha-pie.herokuapp.com';
// const BASE_API = '/api';

const data = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Godfather: Part II', year: 1974 },
  { id: 4, title: 'The Dark Knight', year: 2008 },
  { id: 5, title: '12 Angry Men', year: 1957 },
  { id: 6, title: "Schindler's List", year: 1993 },
  { id: 7, title: 'Pulp Fiction', year: 1994 },
  { id: 8, title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 9, title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 10, title: 'Fight Club', year: 1999 },
];

const moviesData = [
  {
    id: 1,
    title: 'Bee Movie: A História de uma Abelha',
    genres: ['Animation', 'Adventure', 'Comedy'],
    ratings: {
      imdb: 6.1,
      rottenCritics: 99,
      rottenAudience: 90,
    },
    year: 2005,
    actors: ['abelha 1', 'abelha 2'],
    directors: ['abelha rainha'],
    duration: '1:31',
  },
];

export const list = () => new Promise((resolve, reject) => resolve(data));

export const getMoviesByActors = (ids) => new Promise((resolve, reject) => resolve(moviesData));

// export const get = (uuid) => axios.get(`${BASE_URL}${BASE_API}/${uuid}/edit`);
