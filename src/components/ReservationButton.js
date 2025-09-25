import { Link, useNavigate, useLocation } from "react-router-dom";


function ReservationButton() {
  const styles = {
    button: {
      backgroundColor: '#f4ce14',
      color: '#495e57',
      border: 'none',
      borderRadius: '8px',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      margin:  '15px',
      textDecoration: 'none'
     },
  };

  return (
          <button style={styles.button}>
            <Link style={styles.button} to="/reservations">Book a table</Link>
            </button>

  );
}

export default ReservationButton;
