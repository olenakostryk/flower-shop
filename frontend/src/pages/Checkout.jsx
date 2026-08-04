import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderService";
import { useCart } from "../hooks/useCart";


 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

export default function Checkout() {


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip_code: "",
  });

const navigate = useNavigate();

const {
  cartItems,
  totalPrice,
  clearCart,
} = useCart();

const handlePlaceOrder = async () => {
  try {
    const order = {
      ...formData,
      items: cartItems.map((item) => ({
        flower: item.id,
        quantity: item.quantity,
      })),
    };

    await createOrder(order);

    clearCart();

    navigate("/order-success");
  } catch (error) {
    console.error(error);
    alert("Failed to place order.");
  }
};
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-center mb-12">
        Checkout
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        {/* Billing Form */}

        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold mb-8">
            Billing Details
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              placeholder="First Name"
              className="rounded-xl border p-4"
            />

            <input
              placeholder="Last Name"
              className="rounded-xl border p-4"
            />

            <input
              placeholder="Email"
              className="rounded-xl border p-4 md:col-span-2"
            />

            <input
              placeholder="Phone"
              className="rounded-xl border p-4 md:col-span-2"
            />

            <input
              placeholder="Address"
              className="rounded-xl border p-4 md:col-span-2"
            />

            <input
              placeholder="City"
              className="rounded-xl border p-4"
            />

            <input
              placeholder="Country"
              className="rounded-xl border p-4"
            />

            <input
              placeholder="Zip Code"
              className="rounded-xl border p-4 md:col-span-2"
            />

          </div>

        </div>

        {/* Summary */}

        <div className="rounded-3xl bg-white p-8 shadow h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex justify-between"
              >

                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

              </div>

            ))}

          </div>

          <hr className="my-6" />

          <div className="flex justify-between">

            <span className="font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>

          </div>

         <button
  onClick={handlePlaceOrder}
  className="mt-8 w-full rounded-full bg-pink-600 py-4 font-semibold text-white hover:bg-pink-700"
>
  Place Order
</button>

          <Link
            to="/cart"
            className="mt-4 block text-center text-pink-600"
          >
            ← Back to Cart
          </Link>

        </div>

      </div>

    </section>
  );
}