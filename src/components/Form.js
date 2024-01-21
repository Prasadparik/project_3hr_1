import React, { useState } from "react";

function Form({ onProductAdded }) {
  const [formData, setFormData] = useState({
    id: "",
    sellingPrice: "",
    productName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = JSON.parse(localStorage.getItem("productData"));
    console.log("temp", temp);
    let productArr = [];
    if (temp) {
      productArr = [...temp];
    }
    productArr.push(formData);
    // Store data in local storage
    localStorage.setItem("productData", JSON.stringify(productArr));

    // Optional: Reset form fields after submission
    setFormData({
      id: "",
      sellingPrice: "",
      productName: "",
    });
    if (onProductAdded) {
      onProductAdded();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Selling Price:
          <input
            type="number"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
