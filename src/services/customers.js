import http from './http-commons';

export const getCustomers = () => {
  return http.get('/api/v1/users/customers');
};