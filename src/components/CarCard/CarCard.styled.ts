import styled from '@emotion/styled';

const ListItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  min-height:268px;`;

const CardWrap= styled.li`
position:relative;
max-width:274px`;

const InfoList=styled.ul`
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
display:flex;
flex-wrap:wrap;
gap:4px 6px;
height:40px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
  -webkit-line-clamp: 3;`;

const InfoItem=styled.li`
border-right: 1px solid rgba(18, 20, 23, 0.1);
padding-right:6px;
&:nth-last-of-type(1) {
    border: none;
  }`

const TopRow= styled.div`
font-weight: 500;
font-size: 16px;
line-height: 150%;
display:flex;
justify-content: space-between;
margin-top:14px;
margin-bottom:8px;`

const StyledButton=styled.button`
margin-top:28px;
width:100%;
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
border-radius: 12px;
border:none;
padding:12px 0 12px 0;
background: #3470ff;
display: flex;
align-items: center;
justify-content: center;`

const IconWrap=styled.div`
width:18px;
height:18px;
position:absolute;
top: 16px; 
right: 16px;
cursor:pointer;
`

export{CardWrap, InfoList, ListItemImg, TopRow, InfoItem,StyledButton,IconWrap}



