import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";
import Footer from "./component/footer/Footer";
import Products from "./component/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nave />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
