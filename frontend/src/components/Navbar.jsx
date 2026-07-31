import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
     const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-4xl font-bold text-pink-600"
        >
          <span className="text-3xl">🌸</span>
          <span>Bloom</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative transition hover:text-pink-600 ${
                isActive ? "text-pink-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-pink-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `relative transition hover:text-pink-600 ${
                isActive ? "text-pink-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Shop
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-pink-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative transition hover:text-pink-600 ${
                isActive ? "text-pink-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-pink-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative transition hover:text-pink-600 ${
                isActive ? "text-pink-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-pink-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FiSearch />
          </button>

         <Link
  to="/cart"
  className="relative"
>
  Cart

  {totalItems > 0 && (
    <span className="ml-2 rounded-full bg-pink-600 px-2 py-1 text-xs text-white">
      {totalItems}
    </span>
  )}
</Link>


        </div>

      </div>
    </header>
  );
  
}