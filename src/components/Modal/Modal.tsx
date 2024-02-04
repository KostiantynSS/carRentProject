import { useEffect } from 'react';

import { Car } from '../../redux/cars/types';
import { Icon } from '../Icon';
import { AccessoriesWrap, 
    InfoList,
    InfoItem, 
    Btn, 
    ModalImageWrap, 
    InfoWrap,
    DescriptionWrap, 
    TopRow, 
    ModalWrap, 
    ModalOverlay, 
    StyledList, 
    AccessoriesTitle,
    RentalTitle,
    IconWrap } from './Modal.styled';

interface ModalProps {
    car:Car,
    onClose:()=>void
}

const Modal:React.FC<ModalProps> = ({ car, onClose }) => {
    const splittedAddress=car.address.split(',');
  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = () => onClose();

  const handleBackdropClick = (e:any) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalWrap>
      <IconWrap>   
            <Icon
                    name="close"
                    iconWidth={{ mobile: '24px', tablet: '24px' }}
                    iconHeight={{ mobile: '24px', tablet: '24px' }}
           stroke='#121417'
                    onClick={handleClose}
               
                  />
                  </IconWrap>
       
        <ModalImageWrap src={car?.img} alt={`${car?.make} ${car?.model}`} />
        {car && (
          <InfoWrap>
            <TopRow>{`${car.make} ${car.model}, ${car.year}`}</TopRow>
            <InfoList>
               <InfoItem>{splittedAddress[1]}</InfoItem>
               <InfoItem>{splittedAddress[2]}</InfoItem>
               <InfoItem>Id: {car.id}</InfoItem>
               <InfoItem>Year: {car.year}</InfoItem>
               <InfoItem>Type: {car.type}</InfoItem>
               <InfoItem>Fuel Consumption: {car.fuelConsumption}</InfoItem>
               <InfoItem>Engine Size: {car.engineSize}</InfoItem>
            </InfoList>
            <DescriptionWrap>
              {car.description}
            </DescriptionWrap>
            <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
            <AccessoriesWrap>
              {car.accessories?.slice(0, 3).map((accessory, index) => (
                <span key={index}>{accessory} | </span>
              ))}
              {car.functionalities?.slice(0, 3).map((functionality, index) => (
                <span key={index}>{functionality} | </span>
              ))}
            </AccessoriesWrap>
            <RentalTitle>Rental Conditions:</RentalTitle>
            {car.rentalConditions && (
              <StyledList>
                {car.rentalConditions.split('\n').map((condition, index) => (
                  <li key={index} className={`class-${index}`}>
                    {index === 0 ? (
                      <span>
                        {condition.split(/(\d+)/).map((part:any, i) => (
                          isNaN(part) ? (
                            part
                          ) : (
                            <span style={{ color: 'rgba(52, 112, 255, 1)' }} key={i}>{part}</span>
                          )
                        ))}
                      </span>
                    ) : (
                      condition
                    )}
                  </li>
                ))}
                <li>Mileage: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{new Intl.NumberFormat().format(car.mileage)}</span></li>
                <li>Price: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{car.rentalPrice}</span></li>
              </StyledList>
            )}
            <a href='tel:+380730000000'>
            <Btn  type="primary"> Rental car</Btn>
            </a>
          </InfoWrap>
        )}
      </ModalWrap>
    </ModalOverlay>
  );
};

export default Modal;
