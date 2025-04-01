import  { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import FertilizerCard from "./FertilizerCard"; // Ensure it's correctly imported
import "./CSS/ShopDetails.css";

// Sample shop data (can be replaced with an API call)
const shops = [
  {
    id: "1",
    name: "ShreeNiavs",
    address: "The Homeland, ShopBlock1 & Ground Floor, NY Circle, 150 Feet Ring Road",
    phone: "+91 9876543210",
    workingHours: "Monday - Sunday: 8:00 AM - 9:00 PM",
    description: "Your one-stop shop for high-quality gardening supplies and fertilizers.",
    image: "https://5.imimg.com/data5/IOS/Default/2022/2/BA/NZ/BR/23928856/product-jpeg-500x500.png",
  },
  {
    id: "2",
    name: "Yara Corp",
    address: "Tanera Stores, Mirmda, Ground Floor, Mangubhai Apartments, Africa Colony",
    phone: "+91 9123456789",
    workingHours: "Monday - Saturday: 9:00 AM - 8:00 PM",
    description: "A wide range of organic and synthetic fertilizers for farmers and home gardeners.",
    image: "https://5.imimg.com/data5/IOS/Default/2022/2/BA/NZ/BR/23928856/product-jpeg-500x500.png",
  },
  {
    id: "3",
    name: "MEGA Fer.",
    address: "Commercial Stores, Mirmda, Ground Floor, Amarjit Apartment, Africa Colony",
    phone: "+91 9988776655",
    workingHours: "Monday - Sunday: 7:30 AM - 10:00 PM",
    description: "Specializes in premium fertilizers for small gardens and large-scale farms.",
    image: "https://5.imimg.com/data5/IOS/Default/2022/2/BA/NZ/BR/23928856/product-jpeg-500x500.png",
  },
  {
    id: "4",
    name: "Farma Fer.",
    address: "NX University, Rajkot, Gujarat, 3600",
    phone: "+91 8899554460",
    workingHours: "Monday - Sunday: 8:00 AM - 9:00 PM",
    description: "A complete gardening solution with a variety of fertilizers.",
    image: "https://5.imimg.com/data5/IOS/Default/2022/2/BA/NZ/BR/23928856/product-jpeg-500x500.png",
  },
];

// Sample fertilizers with IDs for navigation
const fertilizers = [
  { id: "1", name: "Imported Super Potash", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
  { id: "2", name: "Nitrogen Booster", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
  { id: "3", name: "Organic Compost", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
  { id: "4", name: "Slow-Release Fertilizer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
  { id: "5", name: "Premium Soil Enhancer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
  { id: "6", name: "Super Growth Formula", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkez-to19lbdBu3fgVN-LJC2N-h-4iYrbtg&s" },
];

const ShopDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shop = shops.find((shop) => shop.id === id);

  const [searchTerm, setSearchTerm] = useState("");

  if (!shop) {
    return <h2>Shop Not Found</h2>;
  }

  const filteredFertilizers = fertilizers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <h2>{shop.name}</h2>
      </div>

      {/* Shop Information */}
      <div className="shop-container">
        <img src={shop.image} alt={shop.name} className="shop-image" />
        <div className="shop-info">
          <h2>{shop.name}</h2>
          <p><strong>📍 Address:</strong> {shop.address}</p>
          <p><strong>📞 Phone:</strong> {shop.phone}</p>
          <p><strong>⏰ Working Hours:</strong> {shop.workingHours}</p>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <h3>Description</h3>
        <p>{shop.description}</p>
      </div>

      {/* Fertilizer Section */}
      <div className="fertilizers">
        <h3>Fertilizers</h3>
        <div className="fertilizer-search">
          <input
            type="text"
            placeholder="🔍 Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="fertilizer-grid">
          {filteredFertilizers.length > 0 ? (
            filteredFertilizers.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/fertilizer/${item.id}`)}
                className="fertilizer-card"
              >
                <FertilizerCard id={item.id} name={item.name} image={item.image} />
              </div>
            ))
          ) : (
            <p>No fertilizers found</p>
          )}
        </div>
      </div>

      {/* Pagination (Static for now) */}
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="next-btn">Next</button>
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <Link to="/shop" className="back-button">← Back to Shops</Link>
      </div>

      <Footer />
    </div>
  );
};

export default ShopDetails;
