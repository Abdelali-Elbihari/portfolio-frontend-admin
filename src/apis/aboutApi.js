import api from './serverApi.js';

export const addAboutApi = (about) => {
  return api.post('/abouts/', about);
};

export const getAboutsApi = () => {
  return api.get('/abouts/');
};

export const deleteAboutApi = (aboutId) => {
  return api.delete(`/abouts/${aboutId}`);
};

export const updateAboutApi = (aboutId, about) => {
  return api.put(`/abouts/${aboutId}`, about);
};
