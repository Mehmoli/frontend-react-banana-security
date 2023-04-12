import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Profile() {

  const {
    isAuth,
    toggleIsAuth,
    isLoggedIn,
    setIsLoggedIn } = useAuth();
  const LogIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toggleIsAuth({
      Name: 'John Doe',
      Email: 'johndoe@testmail.com'
    });
  }
  const LogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    toggleIsAuth(null);
  }
  return (
    <>
      {isLoggedIn ? (<>
        <h1>Profielpagina</h1>
        <section>
          <h2>Gegevens</h2>
          <p><strong>Gebruikersnaam:</strong> {isAuth.Name}</p>
          <p><strong>Email:</strong> {isAuth.Email}</p>
        </section>
        <section>
          <h2>Strikt geheime profiel-content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
        </section>
      </>
      ) : null}
      <span> U bent {isLoggedIn ? 'Ingelogd' : 'Uitgelogd'}!!!</span>
      <br />
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
      {isLoggedIn
        ? <button onClick={(e) => { LogOut(e) }}>Log uit</button>
        : <button onClick={(e) => { LogIn(e) }}>Log In</button>
      }
    </>
  );
}

export default Profile;