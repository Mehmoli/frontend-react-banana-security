import React from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function NavBar() {
  const history = useHistory();
  // const authContext = useContext(AuthContext);

  const {
    isAuth,
    toggleIsAuth,
    isLoggedIn,
    setIsLoggedIn } = useAuth();
  console.log(isAuth);
  const LogIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push('/profile');
    toggleIsAuth({
      Name: 'John Doe',
      Email: 'johndoe@testmail.com'
    });
  }
  const LogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    toggleIsAuth(null);
    history.push('/');
  }

  return (
    <nav>
      <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>
            Banana Security
          </h3>
        </span>
      </Link>

      {isLoggedIn ? (
        <button type="button" onClick={(e) => LogOut(e)}>
          Log out
        </button>
      ) : (
        <div>
          <button type="button" onClick={(e) => LogIn(e)}>
            Log in
          </button>
          <button type="button" onClick={() => history.push('/signup')}>
            Registreren
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;