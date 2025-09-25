import Button from "./Button";

function SpecialCard({ imgSrc, title, price, description }) {
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
  };

  return (
    <div style={styles.card}>
      <img style={styles.img} src={imgSrc} alt={title} />
      <div style={styles.row}>
        <h3 style={styles.title}>{title}</h3>
        <span style={styles.price}>{price}</span>
      </div>
      <p style={styles.description}>{description}</p>
        <Button to="/reservations"> Order </Button>
    </div>
  );
}

export default SpecialCard;
