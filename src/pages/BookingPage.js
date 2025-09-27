// BookingPage.js
import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
  const styles = {
    main: {
      padding: "20px 5%",
      backgroundColor: "#f1f2f1",
      fontFamily: "Karla, serif",
    },
    section: {
      marginBottom: "30px",
      textAlign: "center",
    },
    h2: {
      fontSize: "36px",
      color: "#495e57",
      marginBottom: "20px",
    },
  };

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Reserve a Table</h2>
      </section>
      <BookingForm />
    </main>
  );
}

export default BookingPage;
