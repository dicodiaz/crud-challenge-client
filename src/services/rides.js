import http from './http-commons';

export const getRides = () => {
  return http.get('/api/v1/rides');
};