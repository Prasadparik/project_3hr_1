import React, { useEffect, useState } from "react";

const ProductList = ({ key }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve products from local storage on component mount
    const storedProducts =
      JSON.parse(localStorage.getItem("productData")) || [];
    console.log("DATA", storedProducts);
    setProducts(storedProducts);
  }, [key]);

  let sum = 0;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>ID:</strong> {product.id}, <strong>Selling Price:</strong>{" "}
            {product.sellingPrice}, <strong>Product Name:</strong>{" "}
            {product.productName}
            {(sum += Number(product.sellingPrice))}
          </li>
        ))}
      </ul>
      <h3> Total value worth of Products = Rs {sum}</h3>
    </div>
  );
};

export default ProductList;
