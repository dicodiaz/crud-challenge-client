import { combineReducers } from 'redux';
import { GET_DRIVERS_LIST, GET_DRIVERS_LIST_ERROR, CREATE_DRIVER, CREATE_DRIVER_ERROR, SEARCH_DRIVER, SEARCH_DRIVER_ERROR, EDIT_DRIVER, EDIT_DRIVER_ERROR, DELETE_DRIVER, DELETE_DRIVER_ERROR } from './actions';
import { GET_CUSTOMERS_LIST, GET_CUSTOMERS_LIST_ERROR } from './actions';
import { GET_CARS_LIST, GET_CARS_LIST_ERROR } from './actions';
import { GET_RIDES_LIST, GET_RIDES_LIST_ERROR } from './actions';

const initialDriver = {
    drivers: [],
    driver: {},
    driversError: '',
    driverError: ''
};

const driverReducers = (state = initialDriver, action) => {
    switch (action.type) {
        case GET_DRIVERS_LIST:
            return {
                ...state,
                drivers: action.payload.data
            };
        case GET_DRIVERS_LIST_ERROR:
            return {
                ...state,
                driversError: action.error
            };
        case CREATE_DRIVER:
            return {
                ...state,
                driver: action.payload.data
            };
        case CREATE_DRIVER_ERROR:
            return {
                ...state,
                driverError: action.error
            };
        case SEARCH_DRIVER:
            return {
                ...state,
                driver: action.payload.data[0]
            };
        case SEARCH_DRIVER_ERROR:
            return {
                ...state,
                driverError: action.error
            };
        case EDIT_DRIVER:
            return {
                ...state,
                driver: action.payload.data
            };
        case EDIT_DRIVER_ERROR:
            return {
                ...state,
                driverError: action.error
            };
        case DELETE_DRIVER:
            return {
                ...state,
                driver: action.payload.data
            };
        case DELETE_DRIVER_ERROR:
            return {
                ...state,
                driverError: action.error
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