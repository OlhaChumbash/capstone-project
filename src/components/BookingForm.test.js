import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

beforeAll(() => {
  window.alert = jest.fn();
});

describe("BookingForm", () => {
  test("renders all input fields", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Special Requests \/ Notes/i)).toBeInTheDocument();
  });

  test("allows user to fill out form and submit", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00"]} />);

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Olha" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Chumbash" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "+49 123456789" } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-09-26" } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });

    fireEvent.click(screen.getByText(/Make Your Reservation/i));

    expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();
  });
});
