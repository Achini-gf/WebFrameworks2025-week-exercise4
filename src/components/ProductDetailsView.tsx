import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../products";

const ProductDetailsView: React.FC = () => {
  // Get the dynamic id parameter from the URL using useParams hook
  const { id } = useParams<{ id: string }>();
  
  // Convert string id to number and handle undefined case
  const productId = id ? parseInt(id, 10) : 0;
  
  // Get product details
  const product = getProductById(productId);

  // Handle case where product is not found
  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <Link to="/">Back to Products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div style={{ marginTop: "20px" }}>
            {/* No functionality is required for this button */}
            <button>Add to Cart</button>{" "}
          </div>
          <div style={{ marginTop: "20px" }}>
            {/* Replace anchor element with router Link */}
            <Link to="/">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;
