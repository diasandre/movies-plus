/* eslint-disable no-unused-vars */
// import axios from 'axios';

// const BASE_URL = 'https://mocha-pie.herokuapp.com';
// const BASE_API = '/api';

const data = [
  { name: 'Leonardo DiCaprio', id: 1, movies: 9 },
  { name: 'Robert De Niro', id: 2, movies: 10 },
  { name: 'Tom Hanks', id: 3, movies: 20 },
  { name: 'Meryl Streep', id: 4, movies: 18 },
  { name: 'Kate Winslet', id: 5, movies: 17 },
  { name: 'Jennifer Lawrence', id: 6, movies: 30 },
];

export const list = () => new Promise((resolve, reject) => resolve(data));
