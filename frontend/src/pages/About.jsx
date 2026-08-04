import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaTruck,
  FaHeart,
  FaAward,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            About Bloom
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900">
            Bringing Nature's Beauty
            <span className="text-pink-600"> Into Every Moment</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            At Bloom, we believe flowers create unforgettable memories.
            Every bouquet is handcrafted with fresh seasonal flowers,
            designed to bring happiness, comfort, and love to every occasion.
          </p>

        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=900"
            alt="Flower Shop"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Bloom began with one simple idea: every flower tells a story.
              From birthdays and anniversaries to weddings and everyday
              surprises, we create beautiful floral arrangements that make
              life's moments more meaningful.
            </p>

            <p className="text-gray-600 leading-8">
              Our florists carefully select every bloom to ensure freshness,
              elegance, and exceptional quality. Every bouquet is made with
              passion and attention to detail.
            </p>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-rose-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-pink-600 uppercase font-semibold tracking-widest">
              Why Choose Bloom
            </span>

            <h2 className="text-4xl font-bold mt-3">
              More Than Just Flowers
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow text-center">
              <FaLeaf className="mx-auto text-5xl text-pink-600 mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Fresh Flowers
              </h3>
              <p className="text-gray-600">
                Carefully selected fresh flowers delivered daily.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow text-center">
              <FaHeart className="mx-auto text-5xl text-pink-600 mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Handmade
              </h3>
              <p className="text-gray-600">
                Every bouquet is handcrafted with care and creativity.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow text-center">
              <FaTruck className="mx-auto text-5xl text-pink-600 mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Reliable same-day delivery for special occasions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow text-center">
              <FaAward className="mx-auto text-5xl text-pink-600 mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Beautiful flowers with guaranteed freshness.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-pink-600">500+</h3>
              <p className="mt-3 text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-pink-600">120+</h3>
              <p className="mt-3 text-gray-600">Bouquets</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-pink-600">10+</h3>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-pink-600">24/7</h3>
              <p className="mt-3 text-gray-600">Customer Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready to Brighten Someone's Day?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Discover our beautiful flower collections and find the perfect
            bouquet for every occasion.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-10 rounded-full bg-white px-10 py-4 font-semibold text-pink-600 hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>

        </div>

      </section>
    </>
  );
}