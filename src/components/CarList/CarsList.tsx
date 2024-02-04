
import { CarCard } from '../CarCard';
import { StyledList } from './CarsList.styled';
import { Car } from '../../redux/cars/types';

interface CarsListProps{
cars:Car[]
}

const CarsList:React.FC<CarsListProps>=({cars}) =>{

  return (
      <StyledList>
              {cars.map((car)=>(<CarCard car={car} key={car.id}/>))}
        </StyledList>
  )
}

export default CarsList
