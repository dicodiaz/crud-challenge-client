import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import drivers, { DriverType } from '../../data/drivers-data';
import { OmitId, PartialExceptForId } from '../../utils/custom-types';
import { RootState } from '../store';

const getDrivers = (): DriverType[] => {
  const localStorageDrivers = localStorage.getItem('drivers');
  if (localStorageDrivers) {
    return JSON.parse(localStorageDrivers);
  }
  return drivers;
};

type DriverState = {
  drivers: DriverType[];
};

const initialState: DriverState = {
  drivers: getDrivers(),
};

const driverSlice = createSlice({
  name: 'drivers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createDriver: (state, action: PayloadAction<OmitId<DriverType>>) => {
      state.drivers.unshift({
        ...action.payload,
        id: uuidv4(),
      });
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    editDriver: (state, action: PayloadAction<PartialExceptForId<DriverType>>) => {
      const relevantDriver = state.drivers.find((driver) => driver.id === action.payload.id);
      if (relevantDriver) {
        Object.assign(relevantDriver, action.payload);
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteDriver: (state, action: PayloadAction<string>) => {
      state.drivers = state.drivers.filter((driver) => driver.id !== action.payload);
    },
  },
});

export const { createDriver, editDriver, deleteDriver } = driverSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDrivers = (state: RootState) => state.driversReducer.drivers;

export default driverSlice.reducer;
