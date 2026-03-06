import { useState } from "react";

function BookingModal({ service, onClose }) {

  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const handleBooking = () => {

    const booking = {
      service: service.name,
      price: service.price,
      date,
      address
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];

    existing.push(booking);

    localStorage.setItem("appointments", JSON.stringify(existing));

    alert("Booking confirmed!");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl w-96">

        <h2 className="text-xl font-bold mb-4">
          Book {service.name}
        </h2>

        <input
          type="date"
          className="w-full border p-2 mb-4"
          onChange={(e)=>setDate(e.target.value)}
        />

        <textarea
          placeholder="Enter address"
          className="w-full border p-2 mb-4"
          onChange={(e)=>setAddress(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Confirm Booking
        </button>

        <button
          onClick={onClose}
          className="w-full mt-3 border py-2 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default BookingModal;