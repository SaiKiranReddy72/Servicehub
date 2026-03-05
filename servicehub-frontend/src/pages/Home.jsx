import hero from "../assets/hero.jpeg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <Navbar />

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Professional Home Services
          </h1>
          <p className="mb-6">
            Book trusted electricians, plumbers & AC experts instantly.
          </p>

          <Link
            to="/Dashboard"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;