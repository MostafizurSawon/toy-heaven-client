import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Register from './components/LoginAndRegistration/Register';
import Login from './components/LoginAndRegistration/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import TakeProduct from './components/Products/TakeProduct';
// import AllOrders from './components/Orders/AllOrders';
import AddProduct from './components/Products/AddProduct';
import AllProducts from './components/Products/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="container-fluid custom-default">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/add-product">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/all-products">
            <AllProducts></AllProducts>
          </Route>
          {/* <PrivateRoute path="/orders">
            <MyOrders></MyOrders>
          </PrivateRoute> */}
          {/* <PrivateRoute path="/all-orders">
            <AllOrders></AllOrders>
          </PrivateRoute> */}
          <PrivateRoute exact path="/products/:productId">
            <TakeProduct></TakeProduct>
          </PrivateRoute> 
          
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;