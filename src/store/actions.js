import { getDrivers, setDriver } from '../services/driver';
import { getCustomers } from '../services/customer';
import { getCars } from '../services/car';
import { getRides } from '../services/ride';

export const SET_DRIVER = 'SET_DRIVER';
export const SET_DRIVER_ERROR = 'SET_DRIVER_ERROR';

export const setDriverAction = (info) => {
  const data = {
    firstname: info.firstNameValue,
    lastname: info.lastNameValue,
    driverId: info.driverIdValue,
    age: info.ageValue,
    username: info.usernameValue
  };

  return dispatch => {
    setDriver(data)
      .then(response => {
        dispatch(setDriverAsync(response));
      })
      .catch(error => {
        dispatch(setDriverErrorAsync(error));
      });
  }
};

export const setDriverAsync = (payload) => ({
  type: SET_DRIVER,
  payload: payload
});

export const setDriverErrorAsync = (error) => ({
  type: SET_DRIVER_ERROR,
  error: error
});

export const GET_DRIVERS_LIST = 'GET_DRIVERS_LIST';
export const GET_DRIVERS_LIST_ERROR = 'GET_DRIVERS_LIST_ERROR';

export const getDriverListAction = () => {
  return dispatch => {
    getDrivers()
      .then(response => {
        dispatch(getDriverListAsync(response));
      })
      .catch(error => {
        dispatch(getDriverListErrorAsync(error));
      });
  }
};

export const getDriverListAsync = (payload) => ({
  type: GET_DRIVERS_LIST,
  payload: payload
});

export const getDriverListErrorAsync = (error) => ({
  type: GET_DRIVERS_LIST_ERROR,
  error: error
});

export const GET_CUSTOMERS_LIST = 'GET_CUSTOMERS_LIST';
export const GET_CUSTOMERS_LIST_ERROR = 'GET_CUSTOMERS_LIST_ERROR';

export const getCustomerListAction = () => {
  return dispatch => {
    getCustomers()
      .then(response => {
        dispatch(getCustomerListAsync(response));
      })
      .catch(error => {
        dispatch(getCustomerListErrorAsync(error));
      });
  }
};

export const getCustomerListAsync = (payload) => ({
  type: GET_CUSTOMERS_LIST,
  payload: payload
});

export const getCustomerListErrorAsync = (error) => ({
  type: GET_CUSTOMERS_LIST_ERROR,
  error: error
});

export const GET_CARS_LIST = 'GET_CARS_LIST';
export const GET_CARS_LIST_ERROR = 'GET_CARS_LIST_ERROR';

export const getCarListAction = () => {
  return dispatch => {
    getCars()
      .then(response => {
        dispatch(getCarListAsync(response));
      })
      .catch(error => {
        dispatch(getCarListErrorAsync(error));
      });
  }
};

export const getCarListAsync = (payload) => ({
  type: GET_CARS_LIST,
  payload: payload
});

export const getCarListErrorAsync = (error) => ({
  type: GET_CARS_LIST_ERROR,
  error: error
});

export const GET_RIDES_LIST = 'GET_RIDES_LIST';
export const GET_RIDES_LIST_ERROR = 'GET_RIDES_LIST_ERROR';

export const getRideListAction = () => {
  return dispatch => {
    getRides()
      .then(response => {
        dispatch(getRideListAsync(response));
      })
      .catch(error => {
        dispatch(getRideListErrorAsync(error));
      });
  }
};

export const getRideListAsync = (payload) => ({
  type: GET_RIDES_LIST,
  payload: payload
});

export const getRideListErrorAsync = (error) => ({
  type: GET_RIDES_LIST_ERROR,
  error: error
});
