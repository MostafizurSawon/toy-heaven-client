import React from 'react';
import {  Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Header.css';
import useAuth from './../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-end" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink className="customLogo" activeClassName="activeStyleLogo" exact="true" to="/">
                            <span className="logo-text-first"><i class="fas fa-jedi"></i> TOY HEAVEN</span>
                        </NavLink>
                    </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/all-products">
                                  Products
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/dashboard">
                                  Dashboard
                        </NavLink>
                        </Nav.Link>

                        {user.email && 
                        <Nav.Link>
                        <StyledBadge
                                    sx={{ display: 'flex' }}
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    >
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                </StyledBadge>
                        </Nav.Link>}

                        {user.email && 
                        <Nav.Link>
                        <div>{user?.displayName}</div>
                        
                        </Nav.Link>}
                        {
                            user.email ?
                        <Nav.Link>
                        <NavLink className="custom-logout d-flex align-items-center" activeClassName="activeStyle" to="/register" onClick={logout}>Logout <i className="ms-2 fas fa-sign-out-alt"></i>
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeClassName="activeStyle" to="/register">
                        <i class="fas fa-user-plus"></i> Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;