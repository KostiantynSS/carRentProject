import { useEffect, useRef } from 'react'
import { useDispatch  } from 'react-redux';
import { getCars, getCarsByPage } from '../redux/cars';
import { AppDispatch } from '../redux';
import { useSelector } from 'react-redux';
import { CarsList } from '../components/CarList';
import { Container } from '../components/Container';
import { selectCars} from '../redux/cars';
import { FormSection } from '../components/FormSection';
import { Button } from 'antd';

const Catalog:React.FC = ()=>{

    const cars = useSelector(selectCars)
    const dispatch=useDispatch<AppDispatch>()
    const pageRef=useRef<number>(1)
    useEffect(() => {
      dispatch(
        getCars({page:pageRef.current})
    
      );
    
    
    }, [dispatch]);
const handleClick=()=>{
    pageRef.current+=1
    dispatch(
        getCarsByPage({page:pageRef.current}))
}
    return(
    <Container>
        <FormSection/>
        <CarsList cars={cars}/>
      { cars.length!==32&& <Button onClick={handleClick}
        style={{margin:'0 auto ', display:'block'} }>Load more</Button>}
        </Container>
    )
    }
    
    
    export default Catalog 