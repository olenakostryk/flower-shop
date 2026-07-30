import {
  FiTruck,
  FiHeart,
  FiShield,
} from "react-icons/fi";
import { GiFlowerPot } from "react-icons/gi";

const features = [
  {
    icon: <GiFlowerPot size={40} />,
    title: "Fresh Flowers",
    description:
      "Every bouquet is handcrafted using fresh, premium-quality flowers.",
  },
  {
    icon: <FiTruck size={40} />,
    title: "Fast Delivery",
    description:
      "Reliable same-day and next-day delivery for your special moments.",
  },
  {
    icon: <FiHeart size={40} />,
    title: "Made with Love",
    description:
      "Designed by experienced florists with attention to every detail.",
  },
  {
    icon: <FiShield size={40} />,
    title: "Secure Payment",
    description:
      "Your payment information is protected with secure checkout.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-pink-600">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            More Than Just Flowers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We create unforgettable floral experiences with premium blooms,
            reliable service, and attention to every detail.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-pink-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center text-pink-600">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}