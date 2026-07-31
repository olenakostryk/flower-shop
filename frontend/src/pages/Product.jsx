import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { getFlower } from "../services/flowerService";
import { useCart } from "../hooks/useCart";

export default function Product() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const [flower, setFlower] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlower = async () => {
      try {
        const data = await getFlower(slug);
        setFlower(data);
      } catch (err) {
        console.error(err);
        setError("Flower not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlower();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-20 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid gap-12 md:grid-cols-2">

        <img
          src={flower.image}
          alt={flower.name}
          className="w-full rounded-3xl object-cover shadow-lg"
        />

        <div>

          <p className="text-pink-600 font-semibold uppercase">
            {flower.category}
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            {flower.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">

            <FaStar className="text-yellow-400" />

            <span>
              {flower.rating}
            </span>

            <span className="text-gray-500">
              ({flower.reviews} reviews)
            </span>

          </div>

          <p className="mt-8 text-4xl font-bold">
            ${flower.price}
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            {flower.description}
          </p>

          <div className="mt-8 space-y-2">

            <p>
              <strong>Occasion:</strong> {flower.occasion}
            </p>

            <p>
              <strong>Stock:</strong>{" "}
              {flower.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>

          </div>

          <button 
            onClick={() => addToCart(flower)}
            className="mt-10 flex items-center gap-3 rounded-full bg-pink-600 px-8 py-4 text-white font-semibold transition hover:bg-pink-700">

            <FiShoppingBag />

            Add to Cart

          </button>

        </div>

      </div>

    </section>
  );
}