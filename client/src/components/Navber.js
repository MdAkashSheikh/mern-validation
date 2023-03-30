import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export default function Navber() {
  return (
    <div>
       <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <div className='m-4'>
                <NavLink  exact to="/"     
                    style={{ textDecoration: "none", color: "black" }}
                >
                <h3>Navber</h3>
                </NavLink>
          </div>
          <Nav className="me-auto">
                <div className='m-4'>
                    <NavLink  exact to="/"     
                        style={{ textDecoration: "none", color: "black" }}
                    >
                    <h3>Home</h3>
                    </NavLink>
                </div>
                <div className='m-4'>
                    <NavLink  exact to="/show-data"     
                        style={{ textDecoration: "none", color: "black" }}
                    >
                    <h3>See-Registered</h3>
                    </NavLink>
                </div>
            
          </Nav>
          <div className='m-4'>
                <NavLink  exact to="/login"     
                    style={{ textDecoration: "none", color: "black" }}
                >
                <h3>Login</h3>
                </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
    </div>
  )
}
