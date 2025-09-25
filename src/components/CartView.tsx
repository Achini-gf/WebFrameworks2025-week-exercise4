import React from "react";
import { Link } from "react-router-dom";

/* This component is used to render a static shopping cart UI, no dynamic functionality is required */

const CartView: React.FC = () => {
  const cartItems = [
    { id: 1, name: "Product A" },
    { id: 3, name: "Product C" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart View</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.name} - <button>Remove</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartView;
