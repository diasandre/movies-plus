/* eslint-disable no-unused-vars */
// import axios from 'axios';

// const BASE_URL = 'https://mocha-pie.herokuapp.com';
// const BASE_API = '/api';

const data = [
  { name: 'Christopher Nolan', id: 1, movies: 3 },
  { name: 'Martin Scorsese', id: 2, movies: 4 },
  { name: 'Stanley Kubrick', id: 3, movies: 6 },
  { name: 'Steven Spielberg', id: 4, movies: 10 },
  { name: 'Charlie Chaplin', id: 5, movies: 3 },
  { name: 'Akira Kurosawa', id: 7, movies: 8 },
  { name: 'Alfred Hitchcock', id: 8, movies: 11 },
  { name: 'Quentin Tarantino', id: 9, movies: 9 },
];

export const list = () => new Promise((resolve, reject) => resolve(data));

// export const get = (uuid) => axios.get(`${BASE_URL}${BASE_API}/${uuid}/edit`);
