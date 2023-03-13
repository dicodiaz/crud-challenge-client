import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const customers = store.getState().customersReducer.customers;
  if (customers) {
    localStorage.setItem('customers', JSON.stringify(customers));
  }
  const drivers = store.getState().driversReducer.drivers;
  if (drivers) {
    localStorage.setItem('drivers', JSON.stringify(drivers));
  }
  return result;
};

export default localStorageMiddleware;
