import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.css';

const Navigation = () => {
  
  const { currentUser } = useContext(UserContext);
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            { currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign Out</span>)
              : (<Link className="nav-link" to="/auth">
              Sign In
            </Link>)
            }
            
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;