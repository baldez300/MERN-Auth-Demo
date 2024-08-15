// frontend/src/components/MainPage.js

// React, useContext, useEffect: Core React functions.
// AuthContext: Used for accessing authentication-related functions like logout.
// useTranslation: Hook from react-i18next for handling language translations.
// useNavigate: React Router hook to programmatically navigate between routes.
// Bootstrap Components: Navbar, Nav, Container, Button, DropdownButton, and 
  // Dropdown are used to create a responsive and styled UI.
  // It uses Bootstrap for a clean and responsive interface.

import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const MainPage = () => {
  // Accesses the logout function from the authentication context.
  // Provides translation functions (t) and the current language (i18n.language).
  const { logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Adjusts the text direction (rtl for right-to-left languages like Arabic, 
  // and ltr for left-to-right languages) based on the current language.
  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Logs out the user and navigates to the login page.
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Changes the language based on the selected option.
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Navbar: Displays the application name, menu items, and a logout button.
  // Container: Contains the welcome message, main text, and language dropdown.
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MERN App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{t('menuItem1')}</Nav.Link>
            <Nav.Link href="#features">{t('menuItem2')}</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>
            {t('logout')}
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>{t('welcome')}</h1>
        <p>{t('mainText')}</p>
        <DropdownButton id="dropdown-basic-button" title={t('changeLanguage')} className="mt-3">
          <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage('fi')}>Finnish</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage('jp')}>Japanese</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage('ar')}>Arabic</Dropdown.Item>
        </DropdownButton>
      </Container>
    </div>
  );
};

export default MainPage;
