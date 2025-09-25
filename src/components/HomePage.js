import SpecialCard from "./SpecialCard";
import Button from "./Button";

function HomePage() {
  const styles = {
    main: {
      padding: '40px 5%',
      backgroundColor: '#f1f2f1',
      fontFamily: 'Karla, serif',
    },
    section: {
      marginBottom: '60px',
      textAlign: 'center',
    },
    h2: {
      fontSize: '36px',
      color: '#495e57',
      marginBottom: '20px',
    },
    p: {
      fontSize: '18px',
      color: '#333',
      maxWidth: '800px',
      margin: '20px auto',
      lineHeight: 1.6,
    },
    specialsGrid: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  };

  return (
    <main style={styles.main}>
      <section id="about" style={styles.section}>
        <h2 style={styles.h2}>About Us</h2>
        <p style={styles.p}>
          At Little Lemon, we combine traditional Mediterranean flavors with modern touches.
          Our chefs Mario and Adrian ensure fresh ingredients and unforgettable meals.
        </p>
        <Button to="/reservations"> Book a table </Button>
      </section>

      <section id="specials" style={styles.section}>
        <h2 style={styles.h2}>Specials</h2>
        <div style={styles.specialsGrid}>
          <SpecialCard
            imgSrc="/dishes/greek-salad.jpg"
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic."
          />
          <SpecialCard
            imgSrc="/dishes/bruchetta.svg"
            title="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          />
          <SpecialCard
            imgSrc="/dishes/lemon-dessert.jpg"
            title="Lemon dessert"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </div>
      </section>
    </main>

  );
}

export default HomePage;
