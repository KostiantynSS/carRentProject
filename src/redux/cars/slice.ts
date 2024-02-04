import { createSlice } from '@reduxjs/toolkit';
import { getCars,getCarsByPage,toggleFavorites} from '.';
import { InitialState } from './types';
import { Car } from './types';
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const initialState:InitialState = {
  favorites:[],
  cars: [],
  error: '',
  isLoading: false,

};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
 
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, {payload}) => {
        state.cars = payload as Car[]
        state.isLoading = false;
  
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(getCarsByPage.fulfilled, (state, {payload}) => {
        state.cars = [...state.cars, ...payload] as Car[]
        state.isLoading = false;
      })
     .addCase(toggleFavorites.fulfilled, (state, {payload})=>{
      state.favorites=payload as Car[]
     })
  },
});
const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const persistedCarsReducer = persistReducer(persistConfig,slice.reducer) ;
