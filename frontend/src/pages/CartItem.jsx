import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../hooks/useCart";

export default function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow">

      <img
        src={item.image}
        alt={item.name}
        className="h-28 w-28 rounded-xl object-cover"
      />

      <div className="flex-1">

        <h3 className="text-xl font-semibold">
          {item.name}
        </h3>

        <p className="mt-2 text-pink-600 font-bold">
          ${item.price}
        </p>

        <div className="mt-4 flex items-center gap-3">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="h-9 w-9 rounded-full border"
          >
            -
          </button>

          <span className="text-lg font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="h-9 w-9 rounded-full border"
          >
            +
          </button>

        </div>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <FiTrash2 size={22} />
      </button>

    </div>
  );
}