import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";
import Footer from "./component/footer/Footer";
import Products from "./component/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nave />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
