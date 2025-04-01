import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "./CSS/FertilizerDetails.css";

// Sample fertilizer data
const fertilizers = [
  {
    id: "1",
    name: "Imported Super Potash",
    price: "499.00",
    description: "Setting the bar as one of the best fertilizers, Potash helps improve soil quality and promotes healthy plant growth.",
    stock: 23,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s",
  },
  {
    id: "2",
    name: "Nitrogen Booster",
    price: "399.00",
    description: "High-quality nitrogen-based fertilizer for lush green growth.",
    stock: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s",
  },
  {
    id: "3",
    name: "Organic Compost",
    price: "299.00",
    description: "Organic compost with rich nutrients to enhance plant health.",
    stock: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s",
  },
];

const FertilizerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fertilizer = fertilizers.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!fertilizer) {
    return <h2>Fertilizer Not Found</h2>;
  }

  return (
    <div>
      <Navbar />

      <div className="fertilizer-details-container">
        <img src={fertilizer.image} alt={fertilizer.name} className="fertilizer-image" />

        <div className="fertilizer-info">
          <h2>{fertilizer.name}</h2>
          <p className="price">Rs. {fertilizer.price}</p>
          <p className="description">{fertilizer.description}</p>

          <div className="stock-container">
            <p>Stock: <strong>{fertilizer.stock}</strong></p>
          </div>

          <div className="quantity-container">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

         
          <button className="booking-button" onClick={() => navigate(`/fertilizer/${id}/advance_booking`)}>
            Advance Booking
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FertilizerDetails;
