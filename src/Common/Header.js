import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ContextApi } from '../Contest/ContestApi';
const Header = () => {
    const { logout, user } = useContext(ContextApi);

    return (
        <>
            <Navbar bg="primary" className='navbar-dark'>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            {user?<><Nav.Link as={NavLink} to="/">Home</Nav.Link></>:<></>}                            
                        </Nav>
                        <Nav className="ms-auto">
                        {user ? <>
                            <Nav.Link onClick={logout}>LogOut</Nav.Link>
                        </> : <>

                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                        </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header