import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggle, isLoggedIn }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const navigate = useNavigate()
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogin = () => {
    navigate('/signin');
  }

  const handleLogout = () => {
    // Clear or remove items from localStorage
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.reload();
        console.log("Logout successful");
    // Optionally, you can redirect to the sign-in page or perform other actions
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>SaveTrees</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {!isLoggedIn ? (
                <Button  color="success" onClick={handleLogin}>
                Login
              </Button>
              ) : (
                <Button  color="success" onClick={handleLogout}>
                Logout
              </Button>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
