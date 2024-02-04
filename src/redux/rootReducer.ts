import { combineReducers } from '@reduxjs/toolkit';
import { persistedCarsReducer } from './cars/slice';



const rootReducer = combineReducers({
  cars: persistedCarsReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
