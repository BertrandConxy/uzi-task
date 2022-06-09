import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../stylesheets/topNav.css';

const TopNav = () => (
  <Navbar className="color-5 m-0">
    <Container className="d-flex justify-content-center">
      <Nav className="text-capitalize fw-bold">
        <NavLink to="/payment/1" className=" top text-dark link mx-4">
          student
        </NavLink>
        <NavLink to="/payment" className="top mx-4">
          school
        </NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default TopNav;
