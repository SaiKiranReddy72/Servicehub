import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">
        ServiceHub
      </h1>

      <div className="space-x-6">
        {!token ? (
          <>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>

            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;