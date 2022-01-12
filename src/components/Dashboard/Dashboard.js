import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Link,
    Outlet
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import './Dashboard.css';

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

const drawerWidth = 250;
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin,logout, user } = useAuth();
    console.log(user);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <h2 className="text-center my-4">DashBoard</h2>
            <Divider />
            <Box sx={{ml: 2}}>
            <Link to={`my-orders`}><Button color="success"><Fab sx={{ mr: 2 }} size="small" color="success">
                    <ShoppingCartOutlinedIcon/>
                   </Fab>My Orders</Button></Link>
            <br />
            <Link to={`pay`}><Button color="success"><Fab sx={{ mr: 2 }} size="small" color="success">
                    <LocalAtmOutlinedIcon/>
                   </Fab>Pay Now</Button></Link>
            <br />
            <Link to={`my-review`}><Button color="success"><Fab sx={{ mr: 2 }} size="small" color="success">
                    <StarBorderOutlinedIcon/>
                   </Fab>Give a review</Button></Link>
            <br />
            {admin && <Box>
                <Link to={`allOrders`}><Button color="primary"><Fab sx={{ mr: 2 }} size="small" color="primary">
                <StoreOutlinedIcon/>
                   </Fab>All Orders</Button></Link>
               
                <br />
                <Link to={`add-product`}><Button color="primary"><Fab sx={{ mr: 2 }} size="small" color="primary" aria-label="add">
                 <AddIcon />
                </Fab>Add Product</Button></Link>
                <Link to={`manage-product`}><Button color="primary"><Fab sx={{ mr: 2 }} size="small" color="primary" aria-label="add">
                 <ProductionQuantityLimitsOutlinedIcon />
                </Fab>Manage products</Button></Link>
                <br />
                <Link to={`makeAdmin`}><Button color="primary">
                <Fab sx={{ mr: 2 }} size="small" color="primary">
                    <AdminPanelSettingsOutlinedIcon/>
                </Fab> Make Admin</Button></Link>
            </Box>}
            <Link to="/register" onClick={logout}><Button sx={{ mt: 3}} color="error"><Fab sx={{ mr: 2 }} size="small" color="error">
                 <LogoutOutlinedIcon />
                </Fab> Logout </Button>
            </Link>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
             <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                 <Toolbar>
                    <IconButton
                        color="success"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    
                    <Container className="d-flex">
                        <Nav.Link>
                        <NavLink className="dash-custom" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className="dash-custom" to="/all-products">
                                  Products
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className="dash-custom" to="/dashboard">
                                  Dashboard
                        </NavLink>
                        </Nav.Link>
                        
                        <Nav.Link>
                        <div className="dash-custom">Hello@{user?.displayName}</div>
                        
                        </Nav.Link>   
                    </Container>
                    </Typography>
                </Toolbar> 
            </AppBar> 
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                 <Drawer
                    container={container}
                    vDrawerariant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer> 
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet>
                    
                </Outlet>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
