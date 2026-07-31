import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <section className="max-w-3xl mx-auto py-24 text-center">

      <h1 className="text-6xl mb-6">🎉</h1>

      <h2 className="text-4xl font-bold">
        Thank You!
      </h2>

      <p className="mt-6 text-gray-600">
        Your order has been placed successfully.
      </p>

      <Link
        to="/shop"
        className="mt-10 inline-block rounded-full bg-pink-600 px-8 py-4 text-white hover:bg-pink-700"
      >
        Continue Shopping
      </Link>

    </section>
  );
}