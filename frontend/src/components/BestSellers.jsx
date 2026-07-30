import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlowerCard from "./FlowerCard";

import { getFlowers } from "../services/flowerService";
import { getFeaturedFlowers } from "../services/flowerService";

export default function BestSellers() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
       const data = await getFlowers();

setFlowers(
  data.filter((flower) => flower.featured)
);
      } catch (err) {
        console.error(err);
        setError("Failed to load flowers.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-600 text-lg">Loading flowers...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Our Collection
          </span>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Best Sellers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our most loved flower arrangements, handcrafted with
            fresh blooms and designed to make every moment unforgettable.
          </p>

        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {flowers.length > 0 ? (
            flowers.map((flower) => (
              <FlowerCard
                key={flower.id}
                flower={flower}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No featured flowers found.
            </p>
          )}

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">

          <Link
            to="/shop"
            className="rounded-full border-2 border-pink-600 px-8 py-4 font-semibold text-pink-600 transition hover:bg-pink-600 hover:text-white"
          >
            View All Flowers
          </Link>

        </div>

      </div>
    </section>
  );
}