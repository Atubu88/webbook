import React, { useState } from "react";
import {API_BASE_URL} from "./config.js";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, datetime }),
    });
    if (response.ok) {
      alert("Бронирование успешно отправлено!");
      setName("");
      setEmail("");
      setDatetime("");
    } else {
      alert("Ошибка бронирования");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
        maxWidth: 350,
        margin: "0 auto",
        background: "#fff",
        padding: 32,
        borderRadius: 14,
        boxShadow: "0 4px 32px rgba(50,80,140,0.10)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2e70d4", margin: 0 }}>Бронирование</h2>
      <input
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #bcd0ee",
          fontSize: 16,
        }}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #bcd0ee",
          fontSize: 16,
        }}
      />
      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
        required
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #bcd0ee",
          fontSize: 16,
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 0",
          background: "linear-gradient(90deg,#2e70d4 0%,#4ab3c9 100%)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: 1,
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        Забронировать
      </button>
    </form>
  );
}

export default BookingForm;
