import http from './http-commons';

export const getDrivers = () => {
  return http.get('/api/v1/users/drivers');
};

export const createDriver = (data) => {
  return http.post('/api/v1/users/drivers/register', data);
};

export const searchDriver = (data) => {
  return http.get(`/api/v1/users/drivers/${data.id}/detail`);
};

export const editDriver = (id, data) => {
  return http.put(`/api/v1/users/drivers/${id}/detail`, data);
};

export const deleteDriver = (id) => {
  return http.delete(`/api/v1/users/drivers/${id}/detail`);
};