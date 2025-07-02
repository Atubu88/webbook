import React, { useEffect, useState } from "react";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch(`${API_BASE_URL}/bookings/`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        }
      } catch (e) {
        console.error("Failed to fetch bookings", e);
      }
    }

    fetchBookings();
  }, []);

  if (bookings.length === 0) {
    return <p style={{ textAlign: "center" }}>Нет бронирований</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {bookings.map((b) => (
        <li key={b.id} style={{ marginBottom: 8 }}>
          <strong>{b.name}</strong> – {b.email} – {new Date(b.datetime).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}

export default BookingList;