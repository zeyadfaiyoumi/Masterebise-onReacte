import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componants/footer/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Profil from "./pages/Profil";
import Catalog from "./pages/catalog";
import Ourstory from "./pages/sory";
import Chart from "./pages/chart";
import Myproduct from "./pages/Myprduct";
import Detils from "./pages/dedils";
import Checkout from "./pages/checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="footer" element={<Footer />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Ourstory" element={<Ourstory />} />
          <Route path="/Cartt" element={<Chart />} />
          <Route path="/Myproduct" element={<Myproduct />} />
          <Route path="/details" element={<Detils />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
