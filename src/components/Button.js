import { Link } from "react-router-dom";

function Button({ to, onClick, children, data }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    },
    button: {
      width: "100%",
      maxWidth: "300px",
      backgroundColor: "#f4ce14",
      fontFamily: "Arial, sans-serif",
      color: "#495e57",
      border: "none",
      borderRadius: "8px",
      padding: "12px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      textAlign: "center",
    },
  };

  if (to) {
    return (
      <div style={styles.container}>
        <Link to={to} style={styles.button}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => {
          if (onClick) onClick(data);
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
