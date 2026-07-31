import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const {
    cartItems,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="max-w-4xl mx-auto py-24 text-center">

        <h1 className="text-5xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-6 text-gray-500">
          Browse our beautiful flowers and add something special.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block rounded-full bg-pink-600 px-8 py-4 text-white"
        >
          Go Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="mb-10 text-5xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

        <div className="rounded-2xl bg-white p-8 shadow h-fit">

          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mt-8 flex justify-between">

            <span>Total</span>

            <span className="text-2xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>

          </div>

          <Link
            to="/checkout"
            className="mt-10 block rounded-full bg-pink-600 py-4 text-center font-semibold text-white hover:bg-pink-700"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </section>
  );
}