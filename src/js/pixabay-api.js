import axios from 'axios';

const API_KEY = '29525266-43f22ff86b92049909965975c';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

export const getImagesByQuery = query => {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
};
