import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const history = useHistory();
  const {
    isAuth,
    toggleIsAuth,
    isLoggedIn,
    setIsLoggedIn } = useAuth();
  const LogIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push('/profile');
    toggleIsAuth({
      Name: 'John Doe',
      Email: 'johndoe@testmail.com'
    })
  }
  return (
    <>
      <h1>Inloggen</h1>
      <p><strong>U kunt hier inloggen</strong></p>

      <form>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button onClick={(e) => { LogIn(e) }}>Log In</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;