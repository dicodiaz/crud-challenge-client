import { combineReducers } from 'redux';
import { GET_DRIVERS_LIST, GET_DRIVERS_LIST_ERROR, CREATE_DRIVER, CREATE_DRIVER_ERROR, SEARCH_DRIVER, SEARCH_DRIVER_ERROR, EDIT_DRIVER, EDIT_DRIVER_ERROR, DELETE_DRIVER, DELETE_DRIVER_ERROR, AUTHENTICATE_DRIVER, AUTHENTICATE_DRIVER_ERROR } from './actions';
import { GET_CUSTOMERS_LIST, GET_CUSTOMERS_LIST_ERROR } from './actions';
import { GET_CARS_LIST, GET_CARS_LIST_ERROR } from './actions';
import { GET_RIDES_LIST, GET_RIDES_LIST_ERROR } from './actions';

const initialDriver = {
    allDrivers: [],
    driverCreated: {},
    driversFound: [],
    driverEdited: {},
    driverDeleted: {},
    driverAuthenticated: {},
    allDriversError: '',
    driverCreatedError: '',
    driversFoundError: '',
    driverEditedError: '',
    driverDeletedError: '',
    driverAuthenticatedError: '',
};

const driverReducers = (state = initialDriver, action) => {
    switch (action.type) {
        case GET_DRIVERS_LIST:
            return {
                ...state,
                allDrivers: action.payload.data
            };
        case GET_DRIVERS_LIST_ERROR:
            return {
                ...state,
                allDriversError: action.error
            };
        case CREATE_DRIVER:
            return {
                ...state,
                driverCreated: action.payload.data
            };
        case CREATE_DRIVER_ERROR:
            return {
                ...state,
                driverCreatedError: action.error
            };
        case SEARCH_DRIVER:
            return {
                ...state,
                driversFound: action.payload.data
            };
        case SEARCH_DRIVER_ERROR:
            return {
                ...state,
                driversFoundError: action.error
            };
        case EDIT_DRIVER:
            return {
                ...state,
                driverEdited: action.payload.data
            };
        case EDIT_DRIVER_ERROR:
            return {
                ...state,
                driverEditedError: action.error
            };
        case DELETE_DRIVER:
            return {
                ...state,
                driverDeleted: action.payload.data
            };
        case DELETE_DRIVER_ERROR:
            return {
                ...state,
                driverDeletedError: action.error
            };
        case AUTHENTICATE_DRIVER:
            return {
                ...state,
                driverAuthenticated: action.payload.data
            };
        case AUTHENTICATE_DRIVER_ERROR:
            return {
                ...state,
                driverAuthenticatedError: action.error
            };
        default:
            return state;
    }
};

const initialCustomer = {
    customers: [],
    customer: {},
    customersError: '',
    customerError: ''
};

const customerReducers = (state = initialCustomer, action) => {
    switch (action.type) {
        case GET_CUSTOMERS_LIST:
            return {
                ...state,
                customers: action.payload.data
            };
        case GET_CUSTOMERS_LIST_ERROR:
            return {
                ...state,
                customersError: action.error
            };
        default:
            return state;
    }
};

const initialCar = {
    cars: [],
    car: {},
    carsError: '',
    carError: ''
};

const carReducers = (state = initialCar, action) => {
    switch (action.type) {
        case GET_CARS_LIST:
            return {
                ...state,
                cars: action.payload.data
            };
        case GET_CARS_LIST_ERROR:
            return {
                ...state,
                carsError: action.error
            };
        default:
            return state;
    }
};

const initialRide = {
    rides: [],
    ride: {},
    ridesError: '',
    rideError: ''
};

const rideReducers = (state = initialRide, action) => {
    switch (action.type) {
        case GET_RIDES_LIST:
            return {
                ...state,
                rides: action.payload.data
            };
        case GET_RIDES_LIST_ERROR:
            return {
                ...state,
                ridesError: action.error
            };
        default:
            return state;
    }
};

export const allReducers = () => combineReducers({
    driverReducers,
    customerReducers,
    carReducers,
    rideReducers
});