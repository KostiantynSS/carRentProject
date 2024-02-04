import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: none;
color:inherit ;
  &.active {
    color: #3470ff;
  }`;

const StyledHeader=styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content:center;
align-items: center;
min-height: 32px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
margin-bottom:150px;
background-color: #f1f3fa;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`

const StyledNav=styled.ul`
margin: 0;
padding: 0;
list-style: none;
color: black;
display: flex;
gap: 15px;
&>a{
    text-decoration: none;
    color: inherit;
  }`
  

export {StyledLink,StyledHeader,StyledNav}