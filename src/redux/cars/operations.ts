import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

interface GetCars {
  page?: number;

}

const getCars = operationWrapper('cars/getCars', async ( {page=1,}:GetCars)=> {
  const response = await apiService({
    method: 'get',
    url: '',
    config: {
      params: {
        limit:12,
        page,
      },
    },
  });

  return response;
});

const getCarsByPage = operationWrapper('cars/getCarsByPage', async ( {page}:GetCars)=> {
  const response = await apiService({
    method: 'get',
    url: '',
    config: {
      params: {
        limit:12,
        page,
      },
    },
  });

  return response;
});


const toggleFavorites=operationWrapper('cars/getFavorites', async(favorites)=>favorites)

export { getCars, getCarsByPage, toggleFavorites};
