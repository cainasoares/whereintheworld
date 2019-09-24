import axios from 'axios';

const api = axios.create({ baseURL: 'https://restcountries.eu/rest/v2' });

// const apiBorder = axios.create({ baseURL: 'https://restcountries.eu/rest/v2/name' });

export default api;