import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";

import electricianImg from "../assets/electrician.jpeg";
import plumberImg from "../assets/plumber.jpeg";
import acImg from "../assets/ac.jpeg";
import tvImg from "../assets/tv.jpg";
import driverImg from "../assets/driver.jpg";
import cleaningImg from "../assets/cleaning.jpg";
import carwashImg from "../assets/carwash.jpeg";
import interiorImg from "../assets/interior.jpg";
import pestImg from "../assets/pest.jpg";

import Chat from "../components/Chat";

function Dashboard() {

  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // check if user logged in
  const token = localStorage.getItem("token");

  const services = [
    { id:1, name:"Electrician", desc:"Experienced home electrician", price:499, rating:5, img:electricianImg },
    { id:2, name:"Plumber", desc:"5+ years experience", price:599, rating:4, img:plumberImg },
    { id:3, name:"AC Repair", desc:"Fast and reliable service", price:799, rating:5, img:acImg },
    { id:4, name:"TV Repair", desc:"LED / Smart TV repair", price:399, rating:4, img:tvImg },
    { id:5, name:"Driver", desc:"Professional drivers", price:899, rating:4, img:driverImg },
    { id:6, name:"Home Cleaning", desc:"Deep home cleaning", price:1499, rating:5, img:cleaningImg },
    { id:7, name:"Car Wash", desc:"Doorstep car wash", price:299, rating:4, img:carwashImg },
    { id:8, name:"Interior Designer", desc:"Modern home interiors", price:4999, rating:5, img:interiorImg },
    { id:9, name:"Pest Control", desc:"Cockroach & termite control", price:999, rating:4, img:pestImg }
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
    <Navbar />
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">

        <div>
         

          <ul className="space-y-4 text-gray-700">

            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </li>

           <li
  className="hover:text-blue-600 cursor-pointer"
  onClick={() => navigate("/appointments")}>
                   Appointments
                     </li>

            <li
  className="hover:text-blue-600 cursor-pointer"
  onClick={() => navigate("/profile")}
>
  Profile
</li>

          </ul>
        </div>

        
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h2 className="text-3xl font-bold mb-6">
          Available Professionals
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search service..."
          className="mb-8 p-3 border rounded-lg w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredServices.map((service) => (

            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >

              <img
                src={service.img}
                alt={service.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <h3 className="text-xl font-semibold text-center mt-4">
                {service.name}
              </h3>

              <p className="text-gray-500 text-center mt-2">
                {service.desc}
              </p>

              <div className="flex justify-center mt-3">
                {[...Array(service.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-center text-blue-600 font-bold mt-3">
                ₹ {service.price} / visit
              </p>
             
              <button
  onClick={() => setSelectedService(service)}
       className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
             Book Now
                   </button>

            </div>

          ))}

        </div>

      </div>

      <Chat />


    </div>
    {selectedService && (
  <BookingModal
    service={selectedService}
    onClose={() => setSelectedService(null)}
  />
)}
    </>
    
  );
}

export default Dashboard;