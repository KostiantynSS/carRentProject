import styled from '@emotion/styled';
import { Button } from 'antd';

const IconWrap=styled.div`
width:18px;
height:18px;
position:absolute;
top: 16px; 
right: 16px;
cursor:pointer;`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;`

const ModalWrap = styled.div`
width: 541px;
margin-top:40px;
position: relative;
  background: #fff;
  padding: 40px;
  border-radius:  24px;
  display:flex;
  flex-direction:column;
justify-contant:start;`

const Btn = styled(Button)`
  background-color: rgba(52, 112, 255, 1) !important;
  width: 168px;
  height: 44px;
  margin-top: 28px;
  font-size: 14px;
  border-radius: 12px;
  &:hover,
  &:focus {
   background-color:rgba(11, 68, 205, 1)!important;
  }`
  
const RentalCarLink = styled.a`
  text-decoration: none;`;

const ModalImageWrap = styled.img`
  display: block; 
  margin: 0 auto; 
 width: 468px; 
 max-height:268px;
 object-fit: cover;
  border-radius: 5%;`

const TopRow = styled.p`
  font-size: 18px;
  margin-top: 14px;
  line-height: 18px;
  margin-bottom:8px;`

const InfoList=styled.ul`
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
display:flex;
flex-wrap:wrap;
gap:2px 4px;
max-width:400px;`

const InfoItem=styled.li`
border-right: 1px solid rgba(18, 20, 23, 0.1);
padding-right:6px;
&:nth-last-of-type(1) {
    border: none;
}`

const DescriptionWrap= styled.p`
  font-size: 14px;
  margin-top:14px;
  margin-bottom: 80px;
  line-height: 18px;`

const InfoWrap = styled.div`
display: block; `

const AccessoriesWrap= styled.p`
   font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
   margin-top: 8px;
  margin-bottom: 24px;
  line-height: 18px;`

const AccessoriesTitle = styled.p`
font-size: 14px;
margin-top: 24px;
  margin-bottom: 8px;`

const RentalTitle= styled(AccessoriesTitle)``

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px; 

  li {
    font-size: 12px;
    margin-bottom: 10px;
     background-color: rgba(249, 249, 249, 1);
     border-radius: 35px;
    padding: 7px 14px;}`;

export { InfoWrap, 
    IconWrap,
    Btn, 
    RentalCarLink, 
    StyledList, 
    ModalOverlay,
    ModalWrap, 
    ModalImageWrap, 
    TopRow, 
    InfoList,
    InfoItem, 
    DescriptionWrap, 
    AccessoriesWrap, 
    AccessoriesTitle,
RentalTitle}