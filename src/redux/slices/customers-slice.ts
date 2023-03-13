import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import customers, { CustomerType } from '../../data/customers-data';
import { OmitId, PartialExceptForId } from '../../utils/custom-types';
import { RootState } from '../store';

const getCustomers = (): CustomerType[] => {
  const localStorageCustomers = localStorage.getItem('customers');
  if (localStorageCustomers) {
    return JSON.parse(localStorageCustomers);
  }
  return customers;
};

type CustomerState = {
  customers: CustomerType[];
};

const initialState: CustomerState = {
  customers: getCustomers(),
};

const customerSlice = createSlice({
  name: 'customers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createCustomer: (state, action: PayloadAction<OmitId<CustomerType>>) => {
      state.customers.unshift({
        ...action.payload,
        id: uuidv4(),
      });
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    editCustomer: (state, action: PayloadAction<PartialExceptForId<CustomerType>>) => {
      const relevantCustomer = state.customers.find(
        (customer) => customer.id === action.payload.id,
      );
      if (relevantCustomer) {
        Object.assign(relevantCustomer, action.payload);
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { createCustomer, editCustomer, deleteCustomer } = customerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCustomers = (state: RootState) => state.customersReducer.customers;

export default customerSlice.reducer;
