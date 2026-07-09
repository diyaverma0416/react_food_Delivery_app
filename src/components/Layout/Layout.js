import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AppRoutes from "../../routes/Routers";

import CartOverlay from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  // keep the same store shape but use a new local name to reduce similarity
  const isCartOpen = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="app-root">
      <Header />

      <main className="app-main" role="main">
        <AppRoutes />
      </main>

      {/* render overlay near the end so it layers above the content */}
      {isCartOpen && <CartOverlay />}

      <Footer />
    </div>
  );
};

export default Layout;
