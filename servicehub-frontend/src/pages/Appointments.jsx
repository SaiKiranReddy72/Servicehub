function Appointments() {

  const bookings =
    JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        My Appointments
      </h2>

      {bookings.map((b, i) => (

        <div key={i} className="border p-4 mb-4 rounded-lg">

          <h3 className="font-bold">{b.service}</h3>

          <p>Date: {b.date}</p>

          <p>Address: {b.address}</p>

          <p className="text-blue-600 font-bold">
            ₹ {b.price}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Appointments;