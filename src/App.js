import "./app.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </CartProvider>
    
  );
    
}

export default App;
