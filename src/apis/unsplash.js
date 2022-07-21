import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bNHPGbMH24Y6veJYiTilfZRI9kkHZY32pkAy5t0mlQg',
  },
});
