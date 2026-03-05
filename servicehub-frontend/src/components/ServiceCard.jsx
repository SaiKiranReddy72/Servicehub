import { FaStar } from "react-icons/fa";

function ServiceCard({ image, title, description, price, rating }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-full object-cover mx-auto"
      />

      <h3 className="text-lg font-semibold mt-4 text-center">
        {title}
      </h3>

      <p className="text-gray-500 mt-2 text-center">
        {description}
      </p>

      <div className="flex justify-center mt-2">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      <p className="text-center text-blue-600 font-bold mt-3">
        ₹ {price} / visit
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Book Now
      </button>
    </div>
  );
}

export default ServiceCard;