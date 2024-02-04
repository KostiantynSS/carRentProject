import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux';
import { useState } from 'react';

import { findShortestAccessory } from '../../helpers';
import { Car } from '../../redux/cars/types';
import { selectCars, selectFavorites, toggleFavorites } from '../../redux/cars';
import { Icon } from '../Icon';
import {CardWrap, InfoItem, InfoList, ListItemImg, StyledButton, TopRow,IconWrap } from './CarCard.styled'
import { Modal } from '../Modal';

interface CarCardProps{
    car:Car
}

const CarCard:React.FC<CarCardProps> = ({car}) => {

const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const dispatch= useDispatch<AppDispatch>();
const favorites=useSelector(selectFavorites);
const cars=useSelector(selectCars);
const isFavorite=favorites.find(favorite=>favorite.id===car.id)

    const splittedAddress=car.address.split(',');
    const accessory=findShortestAccessory(car.accessories);

    const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleLearnMore = () => {
        setIsModalOpen(true);
      };
    const handleClick=(e:any)=>{

        const clickedId= Number(e.currentTarget.id)
        const findCarByid=cars.filter(car=>car.id===clickedId)
        const findFavoriteById=favorites.filter(favorite=>favorite.id===clickedId)
      
        if(!findFavoriteById.length){
            const addFavorite=[...favorites,...findCarByid]
            dispatch(toggleFavorites(addFavorite))
        }
        if(findFavoriteById.length){
           const deleteFavorite =favorites.filter(favorite=>favorite.id!==clickedId)
           dispatch(toggleFavorites(deleteFavorite))
        }

    }
    return <>
    <CardWrap>
        <IconWrap>   
            <Icon
                    name="favorite"
                    iconWidth={{ mobile: '18px', tablet: '18px' }}
                    iconHeight={{ mobile: '18px', tablet: '18px' }}
                    stroke={isFavorite?'#3470ff':'rgba(255, 255, 255, 0.8);'}
                    fill={isFavorite?'#3470ff;':'none;'}
                    fillOpacity={isFavorite?'1;':'100%'}
                    onClick={handleClick}
                    id={car.id}
                  />
                  </IconWrap>
      
<ListItemImg src={car.img} alt={`${car.make}, ${car.model}`} />
<TopRow>
    <p>{`${car.make}, ${car.year}`}</p>
<p>{car.rentalPrice}</p>
</TopRow>
<InfoList>
<InfoItem>{splittedAddress[1]}</InfoItem>
<InfoItem>{splittedAddress[2]}</InfoItem>
<InfoItem>{car.rentalCompany}</InfoItem>
<InfoItem>{car.type}</InfoItem>
<InfoItem>{car.make}</InfoItem>
<InfoItem>{car.mileage}</InfoItem>
<InfoItem>{accessory}</InfoItem>
</InfoList>
<StyledButton type='button'   onClick={handleLearnMore}
>Learn More</StyledButton>
    </CardWrap>
    {isModalOpen && (
        <Modal car={car} onClose={handleCloseModal} />
      )}
</>
};

export default CarCard;




