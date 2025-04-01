import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const fertilizers = [
  {
    id: "1",
    name: "Topas Adva.",
    price: "499.00",
  },
  {
    id: "2",
    name: "Nitrogen Booster",
    price: "399.00",
  },
  {
    id: "3",
    name: "Organic Compost",
    price: "299.00",
  },
];

const AdvanceBooking = () => {
  const { id } = useParams();
  const fertilizer = fertilizers.find((item) => item.id === id);

  if (!fertilizer) {
    return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Fertilizer Not Found</h2>;
  }

  return (
    <div >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
        <div style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", color: "#7c7c7c", marginBottom: "10px" }}>
            <span>{fertilizer.name} x 1</span>
            <span>Rs. {fertilizer.price}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "500", marginTop: "15px" }}>
            <span>Subtotal</span>
            <span>Rs. {fertilizer.price}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "bold", marginTop: "10px", color: "#b38c30" }}>
            <span>Total</span>
            <span>Rs. {fertilizer.price}</span>
          </div>

          <hr style={{ marginTop: "20px", marginBottom: "20px", border: "0.5px solid #dcdcdc" }} />

          <button style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "25px",
            border: "2px solid black",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            transition: "background 0.3s ease",
            outline: "none"
          }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#f5f5f5"}
            onMouseOut={(e) => e.target.style.backgroundColor = "white"}>
            Advance Book
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdvanceBooking;
