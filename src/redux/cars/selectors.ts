import { RootState } from '../rootReducer';

export const selectCars = (state: RootState) => state.cars.cars;
export const selectFavorites = (state: RootState) => state.cars.favorites;
export const selectIsLoading=(state:RootState)=>state.cars.isLoading