import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {

    try {

      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/dashboard");

    } catch (error) {
      console.error("Registration failed", error);
    }

  };

  return (

    <div>
      <Navbar />

      <div className="flex justify-center items-center h-screen bg-gray-100">

        <div className="bg-white p-8 rounded-xl shadow-lg w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>

        </div>

      </div>

    </div>

  );
}

export default Register;