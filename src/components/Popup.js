import React from "react";
import { useNavigate } from "react-router-dom";

function Popup({ show, onClose, message }) {
  const navigate = useNavigate();

  if (!show) return null;

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
      }}>
        <h2>🎉 Reservation Confirmed!</h2>
        <p>{message}</p>
        <button onClick={handleClose} style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#495e57",
          color: "#fff",
          cursor: "pointer"
        }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
