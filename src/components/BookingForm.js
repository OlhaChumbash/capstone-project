import React, { useState } from "react";
import Button from "./Button";


function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [notes, setNotes] = useState("");

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", {
      firstName,
      lastName,
      phone,
      date,
      time,
      guests,
      occasion,
      notes,
    });
    alert("Your reservation has been submitted!");
  };

  const styles = {
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    fullWidth: {
      gridColumn: "1 / -1",
    },
    phoneWidth: {
      gridColumn: "1 / -1",
      paddingRight: "51%",
    },
    label: {
      textAlign: "left",
      fontWeight: "bold",
      color: "#495e57",
      marginBottom: "5px",
      fontSize: "20px",
      marginLeft: "20px",
      display: "block",
    },
    requiredStar: {
      color: "red",
      marginLeft: "4px",
    },
    input: {
      width: "80%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px",
      marginLeft: "20px",
      fontFamily: "Karla, serif",
    },
    select: {
      width: "80%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px",
      marginLeft: "20px",
      fontFamily: "Karla, serif",
    },
    textarea: {
      width: "90%",
      minHeight: "100px",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      marginLeft: "20px",
      fontSize: "16px",
      fontFamily: "Karla, serif",
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" style={styles.label}>
          First Name<span style={styles.requiredStar}>*</span>
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div>
        <label htmlFor="lastName" style={styles.label}>
          Last Name<span style={styles.requiredStar}>*</span>
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.phoneWidth}>
        <label htmlFor="phone" style={styles.label}>
          Phone Number<span style={styles.requiredStar}>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+49 123 456789"
          required
          style={styles.input}
        />
      </div>

      <div>
        <label htmlFor="res-date" style={styles.label}>
          Choose Date<span style={styles.requiredStar}>*</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div>
        <label htmlFor="res-time" style={styles.label}>
          Choose Time<span style={styles.requiredStar}>*</span>
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={styles.select}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests" style={styles.label}>
          Number of Guests<span style={styles.requiredStar}>*</span>
        </label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div>
        <label htmlFor="occasion" style={styles.label}>
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          style={styles.select}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </div>

      <div style={styles.fullWidth}>
        <label htmlFor="notes" style={styles.label}>
          Special Requests / Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={styles.textarea}
          placeholder="Any allergies, preferences, or additional information..."
        />
      </div>

      <div style={styles.fullWidth}>
        <Button  type="submit">  Make Your Reservation </Button>
      </div>
    </form>
  );
}

export default BookingForm;
