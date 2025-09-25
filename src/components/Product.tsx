import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Define TypeScript interface for props
interface ProductProps {
  id: number;
  imagePath: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, imagePath, name, price }) => {
  return (
    <div className={styles.product} key={id} data-testid={`product-${id}`}>
      <img src={imagePath} alt="Placeholder" />
      <div>{name}</div>
      <div>${price}</div>
      <div>
        {/* Replace anchor element with router Link */}
        <Link to={`/products/${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default Product;
