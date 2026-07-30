import { useEffect, useState } from "react";
import FlowerCard from "../components/FlowerCard";
import SearchBar from "../components/SearchBar";
import { getFlowers } from "../services/flowerService";

export default function Shop() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [ordering, setOrdering] = useState("");

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        setLoading(true);

        const data = await getFlowers({
          search,
          category,
          ordering,
        });

        setFlowers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load flowers.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, [search, category, ordering]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-lg">Loading flowers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="mb-2 text-center text-4xl font-bold">
        Shop Flowers
      </h1>

      <p className="mb-10 text-center text-gray-500">
        Find the perfect bouquet for every occasion.
      </p>

      <div className="mb-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <p className="text-gray-600">
          Showing {flowers.length} flowers
        </p>

        <div className="flex gap-4">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border px-4 py-2"
          >
            <option value="">All Categories</option>
            <option value="Roses">Roses</option>
            <option value="Tulips">Tulips</option>
            <option value="Lilies">Lilies</option>
            <option value="Sunflowers">Sunflowers</option>
            <option value="Orchids">Orchids</option>
            <option value="Mixed Flowers">Mixed Flowers</option>
          </select>

          <select
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
            className="rounded-lg border px-4 py-2"
          >
            <option value="">Default</option>
            <option value="price">Price: Low → High</option>
            <option value="-price">Price: High → Low</option>
          </select>

        </div>

      </div>

      {flowers.length === 0 ? (
        <p className="text-center text-gray-500">
          No flowers found.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
            />
          ))}
        </div>
      )}

    </section>
  );
}