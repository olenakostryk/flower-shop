
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Explore
          </span>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Browse our carefully curated flower collections and find the
            perfect bouquet for every occasion.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}