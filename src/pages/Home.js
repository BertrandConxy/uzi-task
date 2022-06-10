import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Uzi Task</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="text-white link mx-2 active">
            Home
          </NavLink>
          <NavLink to="/overview" className="text-white link">
            Overview
          </NavLink>
          <NavLink to="/payment" className="text-white mx-2 link">
            Payment
          </NavLink>
          <NavLink to="/question" className="text-white link">
            Question
          </NavLink>
          <NavLink to="/result" className="text-white mx-2 link">
            Result
          </NavLink>
          <NavLink to="/answers" className="text-white mx-2 link">
            Answers
          </NavLink>
        </Nav>
      </Container>
    </Navbar>

    <Container>
      <h1>Hello</h1>
      <h4>
        Please browse the pages done by clicking on different nav link above
      </h4>
      <p>
        <strong>
          On the payment page, when you click the proceed button, it displays a
          model
        </strong>
      </p>
      <p>
        <strong>
          On the question page, when you hover on the image cards, they display
          a tooltip and image caption
        </strong>
      </p>
      <p>
        <strong>All pages are responsive</strong>
      </p>
    </Container>
  </>
);

export default Home;
