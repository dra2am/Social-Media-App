import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from "next/link"
import { useStore } from "react-redux";


const TopNav = () => {
  const store = useStore();
  const isAuth = store.getState().isAuth;
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/" className="title">All Curls</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <Link href="/"><a className="nav-link">Products</a></Link>
            </li>
            <Link href="/cart"><a className="nav-link">Cart</a></Link>
            <Link href="/login"><a className="nav-link">Login</a></Link>
            <Link href="/signup"><a className="nav-link">Sign Up</a></Link>
          </Nav>
          { isAuth ? 
          <Navbar.Text className="justify-content-end">
            Signed in as: <a>Test User</a>
          </Navbar.Text> : null
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav;