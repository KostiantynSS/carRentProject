import styled from '@emotion/styled';
import { Container } from "../components/Container"

const Section=styled.section`
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;`

const Home:React.FC = ()=>{



return<>
<Container><Section > 
     <div style={{fontSize:'28px'}}>RENTAL CAR PROJECT - BEST CHOOSE FOR YOUR RIDE!</div> 
      <div ><img src="../../public/hero.jpg" alt="car rental project hero image" style={{display:'block',width:'700px'}}/></div></Section>  
    </Container>
</>
}


export default Home 