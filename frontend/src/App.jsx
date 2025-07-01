import React from "react";
import BookingForm from "./BookingForm";

function App() {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1 style={{ textAlign: "center" }}>Система бронирования</h1>
      <BookingForm />
    </div>
  );
}

export default App;
