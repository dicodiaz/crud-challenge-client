import http from './http-commons';

export const getDrivers = () => {
  return http.get('/api/v1/users/drivers');
};

export const setDriver = (data) => {
  return http.post('/api/v1/users/drivers/create', data);
};
