import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from "next/link"

const TopNav = () => {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav;