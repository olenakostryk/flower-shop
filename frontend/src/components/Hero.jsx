import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-rose-50 via-pink-50 to-white">

      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <span className="inline-block bg-pink-100 text-pink-700 px-5 py-2 rounded-full font-medium shadow-sm">
            🌸 Fresh Flowers Since 2026
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Beautiful
            <span className="text-pink-600"> Flowers</span>
            <br />
            For Every Occasion
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            Handcrafted bouquets made with the freshest seasonal flowers.
            Celebrate birthdays, anniversaries, weddings, or simply brighten
            someone's day with flowers delivered straight to your door.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/shop"
              className="flex items-center gap-2 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg hover:bg-pink-700 hover:scale-105 transition"
            >
              Shop Now
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="rounded-full border-2 border-pink-600 px-8 py-4 font-semibold text-pink-600 hover:bg-pink-100 transition"
            >
              Learn More
            </Link>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">

            <div>
              <h3 className="text-3xl font-bold text-pink-600">500+</h3>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">120+</h3>
              <p className="text-gray-500 mt-2">Bouquets</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">24/7</h3>
              <p className="text-gray-500 mt-2">Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* Decorative circle */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-pink-100"></div>

          <img
            src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=900"
            alt="Bouquet"
            className="relative z-10 w-full max-w-lg rounded-[40px] shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* Floating Card */}
          <div className="absolute bottom-8 -left-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-5 z-20">

            <p className="font-semibold text-gray-800">
              🌷 Same-Day Delivery
            </p>

            <p className="text-sm text-gray-500">
              Fresh flowers delivered within hours.
            </p>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        ↓ Scroll
      </div>

    </section>
  );
}