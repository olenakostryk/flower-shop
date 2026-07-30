import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/shop?category=${category.name}`}
      className="group relative overflow-hidden rounded-3xl"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/45" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-3xl font-bold">
          {category.name}
        </h3>

        <p className="mt-2 text-sm opacity-90">
          {category.count} Bouquets
        </p>
      </div>
    </Link>
  );
}