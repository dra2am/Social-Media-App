import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux-files/actions';


const TopNav = () => {
  //if isAuth = true then user is logged in
  //Log out button in place of login and sign up button
  //Log out button sets auth to false and removes token
  const isAuth = useSelector(state => state.isAuth);
  const dispatch = useDispatch();

  const onLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logout())
  }

  //useeffect check localstorage for token, if so dispatch auth? + fetch user?
  //easier to make state of store persist?
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand className="title">All Curls</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <Link href="/"><a className="nav-link">Products</a></Link>
            </li>
            <Link href="/cart"><a className="nav-link">Cart</a></Link>
            {
            isAuth ? <Link href="/"><a onClick={onLogout} className="nav-link">Logout</a></Link> : 
            <>
              <Link href="/login"><a className="nav-link">Login</a></Link>
              <Link href="/signup"><a className="nav-link">Sign Up</a></Link>
            </>
            }
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