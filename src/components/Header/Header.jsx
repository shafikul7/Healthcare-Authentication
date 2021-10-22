import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
  const {user,signOutUser}=useFirebase();
  return (
        <div>
    <Navbar className="nav_bg" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand ><spam className="span-color">S</spam><span className="nav-color">healthcare</span>
     </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <NavLink exact to="/home">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/services">Services</NavLink>
          <NavLink exact to="/team">Team</NavLink>
          <NavLink exact to="/contacts">Contacts</NavLink>
 
      </Nav>
      <Link>{user?.email}</Link>

      {
        user?.email?(
          <NavLink onClick={signOutUser} exact to="/login">LogOut</NavLink>
        )
      :
      (<NavLink exact to="/login">
          <NavLink exact to="/login">Login</NavLink>
      </NavLink>)
    }

    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;

