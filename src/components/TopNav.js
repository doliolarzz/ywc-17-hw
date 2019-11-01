import React, { useState } from 'react';
import { Navbar, Nav, Collapse } from "react-bootstrap";
import navIcon from '../static/footer.png'
function TopNav(props) {
  const { navbarItems } = props;
  const [open, setOpen] = useState(false);
  
  return (
    <Navbar bg="light" fixed="top" className='navbar-light amber lighten-4 shadow-sm'>
      <Nav className="main-nav justify-content-center flex-row w-100">
        {navbarItems && navbarItems.map((n, i) => (
          <Nav.Item key={'nav_' + i} className='navLinks'>
            <Nav.Link href={n['href']} style={{color:'black'}}>{n['label']}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <img src={navIcon} className='nav-logo' />
      <Nav className="res-nav justify-content-center align-items-end flex-column-reverse w-100">
        {open && navbarItems && navbarItems.map((n, i) => (
          <Nav.Item key={'nav_' + i}>
            <Nav.Link href={n['href']}>{n['label']}</Nav.Link>
          </Nav.Item>
        ))}
        <Nav.Item>
          <Nav.Link className='main-hamburger' onClick={() => setOpen(!open)}>☰</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default TopNav;