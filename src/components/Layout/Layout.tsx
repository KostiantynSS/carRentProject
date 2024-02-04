import { Outlet} from 'react-router-dom';

import { StyledLink,StyledHeader,StyledNav } from './Layout.styled';
import routes from '../../routes';



 const Layout = () => {
const {HOME,CATALOG,FAVORITES}= routes

    return (
      <>
        <StyledHeader>
          <nav>
            <StyledNav>
              <li>
                <StyledLink to={HOME}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to={CATALOG}>Catalog</StyledLink>
              </li>
              <li>
                <StyledLink to={FAVORITES}>Favorites</StyledLink>
              </li>
            </StyledNav>
          </nav>
        </StyledHeader>

          <Outlet />

      </>
    );
  };
  export default Layout