/* eslint-disable no-unused-vars */
import axios from 'axios';

const BASE_URL = 'http://localhost:7000';
const BASE_API = '/directors';

export const list = () => axios.get(`${BASE_URL}${BASE_API}`);
