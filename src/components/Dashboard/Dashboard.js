import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../LoginAndRegistration/AdminRoute/AdminRoute';
import MyOrders from '../Orders/MyOrders';
import AddProduct from '../Products/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AllOrders from './../Orders/AllOrders';
import { NavLink } from 'react-router-dom';
import GiveReview from './GiveReview';

const drawerWidth = 200;
const drawerHeight = 400;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin,logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to={`${url}/my-orders`}><Button color="success">My Orders</Button></Link>
            <Link to={`${url}/my-review`}><Button color="success">Give a review</Button></Link>
            {admin && <Box>
                <Link to={`${url}/allOrders`}><Button color="success">All Orders</Button></Link>
                <Link to={`${url}/makeAdmin`}><Button color="success">Make Admin</Button></Link>
                <Link to={`${url}/add-product`}><Button color="success">Add Product</Button></Link>

                <NavLink className=" d-flex justify-content-center text-danger mt-5" activeClassName="activeStyle" to="/register" onClick={logout}>Logout <i className="ms-2 fas fa-sign-out-alt"></i>
                        </NavLink>
            </Box>}
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
                    
                        <NavLink className="" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        <NavLink className="mx-3" activeClassName="activeStyle" to="/all-products">
                                  Products
                        </NavLink>

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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
                    height: drawerHeight },
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

                <Switch>
                    <Route exact path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/my-review`}>
                        <GiveReview></GiveReview>
                    </Route>
                    <AdminRoute path={`${path}/allorders`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>

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
