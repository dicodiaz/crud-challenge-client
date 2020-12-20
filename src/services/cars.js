import http from './http-commons';

export const getCars = () => {
  return http.get('/api/v1/cars');
};