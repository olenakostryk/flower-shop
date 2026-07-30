import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function FlowerCard({ flower }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative overflow-hidden">
{/* 
        {flower.sale && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold text-white">
            -{flower.discount}%
          </span>
        )} */}

        <img
          src={flower.image}
          alt={flower.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm font-medium uppercase tracking-wide text-pink-600">
          {flower.category}
        </p>

        <Link to={`/product/${flower.slug}`}>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 transition group-hover:text-pink-600">
            {flower.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <FaStar className="text-yellow-400" />

          <span className="font-medium">
            {flower.rating}
          </span>

          <span className="text-gray-500">
            ({flower.reviews} reviews)
          </span>

        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold text-gray-900">
            ${flower.price}
          </span>

          {flower.sale && (
            <span className="text-gray-400 line-through">
              ${flower.oldPrice}
            </span>
          )}

        </div>

        {/* Button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">

          <FiShoppingBag />

          Add to Cart

        </button>

      </div>

    </div>
  );
}