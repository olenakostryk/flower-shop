import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import OrderSuccess from "../pages/OrderSuccess";
import notFound from "../pages/NotFound";
import Cart from "../pages/Cart";

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route
  path="/order-success"
  element={<OrderSuccess />}
/>
<Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}