import { getDrivers, createDriver, searchDriver, editDriver, deleteDriver, authenticateDriver } from '../services/drivers';
import { getCustomers } from '../services/customers';
import { getCars } from '../services/cars';
import { getRides } from '../services/rides';

// getAllDrivers
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

// createDriver
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const CREATE_DRIVER_ERROR = 'CREATE_DRIVER_ERROR';

export const createDriverAction = (data) => {
  return dispatch => {
    createDriver(data)
      .then(response => {
        dispatch(createDriverAsync(response));
      })
      .catch(error => {
        dispatch(createDriverErrorAsync(error));
      });
  }
};

export const createDriverAsync = (payload) => ({
  type: CREATE_DRIVER,
  payload: payload
});

export const createDriverErrorAsync = (error) => ({
  type: CREATE_DRIVER_ERROR,
  error: error
});

// searchDriver
export const SEARCH_DRIVER = 'SEARCH_DRIVER';
export const SEARCH_DRIVER_ERROR = 'SEARCH_DRIVER_ERROR';

export const searchDriverAction = (data) => {
  return dispatch => {
    searchDriver(data)
      .then(response => {
        dispatch(searchDriverAsync(response));
      })
      .catch(error => {
        dispatch(searchDriverErrorAsync(error));
      });
  }
};

export const searchDriverAsync = (payload) => ({
  type: SEARCH_DRIVER,
  payload: payload
});

export const searchDriverErrorAsync = (error) => ({
  type: SEARCH_DRIVER_ERROR,
  error: error
});

// editDriver
export const EDIT_DRIVER = 'EDIT_DRIVER';
export const EDIT_DRIVER_ERROR = 'EDIT_DRIVER_ERROR';

export const editDriverAction = (id, data) => {
  return dispatch => {
    editDriver(id, data)
      .then(response => {
        dispatch(editDriverAsync(response));
      })
      .catch(error => {
        dispatch(editDriverErrorAsync(error));
      });
  }
};

export const editDriverAsync = (payload) => ({
  type: EDIT_DRIVER,
  payload: payload
});

export const editDriverErrorAsync = (error) => ({
  type: EDIT_DRIVER_ERROR,
  error: error
});

// deleteDriver
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const DELETE_DRIVER_ERROR = 'DELETE_DRIVER_ERROR';

export const deleteDriverAction = (id, data) => {
  return dispatch => {
    deleteDriver(id, data)
      .then(response => {
        dispatch(deleteDriverAsync(response));
      })
      .catch(error => {
        dispatch(deleteDriverErrorAsync(error));
      });
  }
};

export const deleteDriverAsync = (payload) => ({
  type: DELETE_DRIVER,
  payload: payload
});

export const deleteDriverErrorAsync = (error) => ({
  type: DELETE_DRIVER_ERROR,
  error: error
});

// authenticateDriver
export const AUTHENTICATE_DRIVER = 'AUTHENTICATE_DRIVER';
export const AUTHENTICATE_DRIVER_ERROR = 'AUTHENTICATE_DRIVER_ERROR';

export const authenticateDriverAction = (data) => {
  return dispatch => {
    authenticateDriver(data)
      .then(response => {
        dispatch(authenticateDriverAsync(response));
      })
      .catch(error => {
        dispatch(authenticateDriverErrorAsync(error));
      });
  }
};

export const authenticateDriverAsync = (payload) => ({
  type: AUTHENTICATE_DRIVER,
  payload: payload
});

export const authenticateDriverErrorAsync = (error) => ({
  type: AUTHENTICATE_DRIVER_ERROR,
  error: error
});

// getAllCustomers
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

// getAllCars
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

//getAllRides
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
