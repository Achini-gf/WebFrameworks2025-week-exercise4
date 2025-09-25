import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
          {/* Replace anchor elements with router Link */}
          <Link to="/" style={{ marginRight: "15px" }}>
            Products
          </Link>
          <Link to="/cart">Cart</Link>
        </nav>

        {/* Define routes - only one component renders at a time */}
        <Routes>
          <Route path="/" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
