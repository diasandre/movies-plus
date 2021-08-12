import axios from 'axios';

const BASE_URL = 'https://mocha-pie.herokuapp.com';
const BASE_API = '/api';

export const save = (data) => axios.post(`${BASE_URL}${BASE_API}/`, data);

export const get = (uuid) => axios.get(`${BASE_URL}${BASE_API}/${uuid}/edit`);
