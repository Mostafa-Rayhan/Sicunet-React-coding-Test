// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import CartContextProvider from './contexts/CartContext';
import useAuth from './Hooks/useAuth';
// import useAuth from './Hooks/useAuth';
import Appointment from './Pages/Appointment/Appointment';

import About from './Pages/Homes/About/About';
import AllAdminProduct from './Pages/Homes/AllAdminProduct/AllAdminProduct';
import ProductDetails from './Pages/Homes/BuyerProducts/ProductsDetails/ProductsDetails';
import CowFeed from './Pages/Homes/Categories/Cow-Feed/CowFeed';
import Duck from './Pages/Homes/Categories/Duck/Duck';
import Fertilizer from './Pages/Homes/Categories/Fertilizer/Fertilizer';
import Fish from './Pages/Homes/Categories/Fish/Fish';
import Medicin from './Pages/Homes/Categories/Medicin/Medicin';
import Seed from './Pages/Homes/Categories/Seed/Seed';
import Truck from './Pages/Homes/Categories/Truck/Truck';
import Vegetable from './Pages/Homes/Categories/Vegetables';
import Contact from './Pages/Homes/Contact/Contact';
import Home from './Pages/Homes/Home/Home';
import ManyProducts from './Pages/Homes/ManyProducts/ManyProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import OrderReview from './Pages/OrderReview/OrderReview';
import Payment from './Pages/Payment/Payment';
import SuccessOrder from './Pages/Payment/SuccessOrder/SuccessOrder';
import Food from './Pages/Products/Food/Food';
import Vegetables from './Pages/Products/Vegetables/Vegetables';

function App() {

  // const { admin, user } = useAuth()
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>

        <BrowserRouter>
    <div>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />

      
       <Route path="/OrderReview" element={<OrderReview />} />
       <Route path="/vegetables" element={<Vegetables />} />
       <Route path="/food" element={<Food />} />
       <Route path="/appointment" element={<Appointment />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
       <Route path="/payment" element={<Payment />} />
       <Route path="success/:id" element={<SuccessOrder />} />
       <Route path="/manyProducts" element={<ManyProducts />} />
       <Route path="/vegetables" element={<Vegetable />} />
       <Route path="/fish" element={<Fish />} />
       <Route path="/duck" element={<Duck />} />
       <Route path="/cow-feed" element={<CowFeed />} />
       <Route path="/truck" element={<Truck />} />
       <Route path="/fertilizer" element={<Fertilizer />} />
       <Route path="/seed" element={<Seed />} />
       <Route path="/medicin" element={<Medicin />} />
       <Route path="/allAdminProduct" element={<AllAdminProduct />} />
       <Route path="bookDetails/:id" element={<ProductDetails />}/>


<Route>

        
      

        <Route
                path="myOrder"
                element={
                  // <AdminRoute>
                    <MyOrder />
                  // </AdminRoute>
                }
              />

        </Route>
       </Routes>
    </div>
       </BrowserRouter>

        </CartContextProvider>
     
      </AuthProvider>
     
    </div>
  );
}

export default App;
