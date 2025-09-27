import { fetchAPI, submitAPI } from "../api";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Popup from "./Popup";

function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [notes, setNotes] = useState("");

  const [availableTimes, setAvailableTimes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const selectedDate = date ? new Date(date) : new Date();
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  }, [date]);

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
    fullWidth: { gridColumn: "1 / -1" },
    phoneWidth: { gridColumn: "1 / -1", paddingRight: "51%" },
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
      marginLeft: "4px" 
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
    },
    errorText: {
      color: "red",
      fontSize: "14px",
      marginLeft: "20px",
      marginTop: "4px",
    },
  };

  const validate = () => {
    const newErrors = {};

    if (!firstName || firstName.trim().length < 2) newErrors.firstName = "First name must be at least 2 characters";
    if (!lastName || lastName.trim().length < 2) newErrors.lastName = "Last name must be at least 2 characters";

    const phoneRegex = /^\+?\d{6,15}$/;
    if (!phoneRegex.test(phone)) newErrors.phone = "Phone must be 6-15 digits and may start with +";

    if (!date) newErrors.date = "Date is required";
    else if (new Date(date) < new Date(new Date().setHours(0,0,0,0))) newErrors.date = "Date cannot be in the past";

    if (!time) newErrors.time = "Time is required";

    if (!guests || guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = { firstName, lastName, phone, date, time, guests, occasion, notes };
    const success = submitAPI(formData);

    if (success) {
      setShowPopup(true);
      setFirstName(""); setLastName(""); setPhone(""); setDate("");
      setTime(""); setGuests(1); setOccasion("Birthday"); setNotes("");
    } else {
      alert("Failed to submit reservation. Please try a different time.");
    }
  };

  return (
    <div>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="firstName" style={styles.label}>
            First Name<span style={styles.requiredStar}>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
          {errors.firstName && <div style={styles.errorText}>{errors.firstName}</div>}
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
            style={styles.input}
          />
          {errors.lastName && <div style={styles.errorText}>{errors.lastName}</div>}
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
            style={styles.input}
          />
          {errors.phone && <div style={styles.errorText}>{errors.phone}</div>}
        </div>

        <div>
          <label htmlFor="res-date" style={styles.label}>
            Choose Date<span style={styles.requiredStar}>*</span>
          </label>
          <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
          {errors.date && <div style={styles.errorText}>{errors.date}</div>}
        </div>

        <div>
          <label htmlFor="res-time" style={styles.label}>
            Choose Time<span style={styles.requiredStar}>*</span>
          </label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} style={styles.select}>
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && <div style={styles.errorText}>{errors.time}</div>}
        </div>

        <div>
          <label htmlFor="guests" style={styles.label}>
            Number of Guests<span style={styles.requiredStar}>*</span>
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={styles.input}
          />
          {errors.guests && <div style={styles.errorText}>{errors.guests}</div>}
        </div>

        <div>
          <label htmlFor="occasion" style={styles.label}>Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} style={styles.select}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </div>

        <div style={styles.fullWidth}>
          <label htmlFor="notes" style={styles.label}>Special Requests / Notes</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} style={styles.textarea} />
        </div>

        <div style={styles.fullWidth}>
          <Button type="submit">Make Your Reservation</Button>
        </div>
      </form>

      <Popup show={showPopup} onClose={() => setShowPopup(false)} message="Thank you for booking a table at Little Lemon!" />
    </div>
  );
}

export default BookingForm;
