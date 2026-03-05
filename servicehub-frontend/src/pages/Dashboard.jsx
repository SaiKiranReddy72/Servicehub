import { useState } from "react";
import { FaStar } from "react-icons/fa";

import electricianImg from "../assets/electrician.jpeg";
import plumberImg from "../assets/plumber.jpeg";
import acImg from "../assets/ac.jpeg";
import Chat from "../components/Chat";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [search, setSearch] = useState("");

  const services = [
    {
      id: 1,
      title: "Electrician",
      description: "Experienced home electrician",
      price: 499,
      rating: 5,
      image: electricianImg,
    },
    {
      id: 2,
      title: "Plumber",
      description: "5+ years experience",
      price: 599,
      rating: 4,
      image: plumberImg,
    },
    {
      id: 3,
      title: "AC Repair",
      description: "Fast and reliable service",
      price: 799,
      rating: 5,
      image: acImg,
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  return (
    <div className="flex min-h-screen bg-gray-100">
     
  
      
      {/* Sidebar */}
<div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
  <div>
    <h1 className="text-2xl font-bold text-blue-600 mb-10">
      ServiceHub
    </h1>

    <ul className="space-y-4 text-gray-700">
      <li
        className="hover:text-blue-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </li>

      <li className="hover:text-blue-600 cursor-pointer">
        Appointments
      </li>

      <li className="hover:text-blue-600 cursor-pointer">
        Profile
      </li>
    </ul>
  </div>

  <button
    onClick={handleLogout}
    className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
  >
    Logout
  </button>
</div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">
          Available Professionals
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search service..."
          className="mb-8 p-3 border rounded-lg w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <h3 className="text-xl font-semibold text-center mt-4">
                {service.title}
              </h3>

              <p className="text-gray-500 text-center mt-2">
                {service.description}
              </p>

              {/* Rating */}
              <div className="flex justify-center mt-3">
                {[...Array(service.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Price */}
              <p className="text-center text-blue-600 font-bold mt-3">
                ₹ {service.price} / visit
              </p>

              {/* Button */}
              <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default Dashboard;