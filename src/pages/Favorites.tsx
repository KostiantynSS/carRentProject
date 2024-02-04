import { useSelector } from 'react-redux';
import { CarsList } from '../components/CarList';
import { Container } from '../components/Container';
import { selectFavorites } from '../redux/cars';
import { FormSection } from '../components/FormSection';

const Favorites:React.FC = ()=>{
    const cars=useSelector(selectFavorites);


    return(
    <Container>
         <FormSection/>
        <CarsList cars={cars}/>
        
        </Container>
    )
    }
    
    
    export default Favorites 