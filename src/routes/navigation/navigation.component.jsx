import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
            <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
              Shop
            </NavLink>
            { currentUser ? (
              <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
              : (<NavLink to="/auth">
              Sign In
            </NavLink>)
            }
            <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;