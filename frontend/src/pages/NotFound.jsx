import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 px-6">

      <div className="max-w-2xl text-center">

        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-pink-100">
          <FaLeaf className="text-5xl text-pink-600" />
        </div>

        <p className="text-pink-600 font-semibold uppercase tracking-widest">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl md:text-7xl font-bold text-gray-900">
          Oops!
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          This page has bloomed somewhere else.
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's help you find something beautiful instead.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
          >
            Go Home
          </Link>

          <Link
            to="/shop"
            className="rounded-full border-2 border-pink-600 px-8 py-4 font-semibold text-pink-600 transition hover:bg-pink-600 hover:text-white"
          >
            Browse Flowers
          </Link>

        </div>

      </div>

    </section>
  );
}