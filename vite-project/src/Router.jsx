/** @format */

// import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
// import Landing from "./pages/Landing/Landing";
// import SignUp from "./pages/Auth/SignUp";
// import Payment from "./pages/Payment/Payment";
// import Order from "./pages/Orders/Orders";
// import Cart from "./pages/Cart/Cart";
// import Results from "./pages/Results/Results";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// function AppRouter() {
//   return (
//     <Router>
//             <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<SignUp />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </Router>

//   )
// }
//TODO -

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
