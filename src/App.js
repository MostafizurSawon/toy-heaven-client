import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/LoginAndRegistration/Register';
import Login from './components/LoginAndRegistration/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TakeProduct from './components/Products/TakeProduct';
import AddProduct from './components/Products/AddProduct';
import AllProducts from './components/Products/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';
import AdminRoute from './components/LoginAndRegistration/AdminRoute/AdminRoute';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts';
import AllOrders from './components/Orders/AllOrders';
import GiveReview from './components/Dashboard/GiveReview';
import Pay from './components/Dashboard/Pay';
import MyOrders from './components/Orders/MyOrders';


function App() {
  return (
    <div className="container-fluid custom-default">
      <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}>
          </Route>
          <Route path="/home" element={<Home></Home>}>
          </Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
          <Route exact path={`/dashboard`} element={<MyOrders></MyOrders>}>
                    </Route>
                    <Route exact path={`my-orders`} element={<MyOrders></MyOrders>}>
                    </Route>
                    <Route exact path={`pay`} element={<Pay></Pay>}>
                    </Route>
                    <Route exact path={`my-review`} element={<GiveReview></GiveReview>}>
                    </Route>
                    <Route path={`allorders`} element={<AdminRoute><AllOrders></AllOrders></AdminRoute>}>
                    </Route>
                    <Route path={`manage-product`} element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}>
                    </Route>
                    <Route path={`makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
                    </Route>
                    <Route path={`add-product`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>}>
                    </Route>
          </Route>
          <Route path="/add-product" element={<AddProduct></AddProduct>}>
          </Route>
          <Route exact path="/all-products" element={<AllProducts></AllProducts>}>
          </Route>
          <Route exact path="/products/:productId" element={<PrivateRoute><TakeProduct></TakeProduct></PrivateRoute>}>
          </Route> 
          <Route path="/register" element={<Register></Register>}>
          </Route>
          <Route path="/login" element={<Login></Login>}>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}>
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;