// frontend/src/components/LandingPage.js

import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const LandingPage = () => {
  const { logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        <p>{t('landingText')}</p>
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

export default LandingPage;
