import { Link, useNavigate, useLocation } from "react-router-dom";


function ReservationButton() {
  const styles = {
    card: {
      backgroundColor: '#fde9d6',
      padding: '15px',
      borderRadius: '10px',
      width: '250px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    img: {
      width: '100%',
      borderRadius: '10px',
      marginBottom: '10px',
      maxHeight: '166px',
    },
    description: {
      fontSize: '16px',
      color: '#474747',
      marginBottom: '15px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
    },
    title: {
      fontSize: '20px',
      color: '#495e57',
      fontWeight: 'bold',
    },
    price: {
      fontSize: '18px',
      color: '#238f0bff',
      fontWeight: 'bold',
    },
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
