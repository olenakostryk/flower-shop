import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-pink-600 uppercase font-semibold tracking-widest">
            Contact Us
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold">
            We'd Love To Hear From You
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Whether you have a question about an order, delivery,
            or choosing the perfect bouquet, our team is here to help.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <FaMapMarkerAlt className="text-pink-600 text-2xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Ankara, Türkiye
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <FaPhoneAlt className="text-pink-600 text-2xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +90 555 123 45 67
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <FaEnvelope className="text-pink-600 text-2xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    info@bloomflowers.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <FaClock className="text-pink-600 text-2xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Working Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday – Saturday
                    <br />
                    09:00 – 20:00
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl border p-4 resize-none"
              />

              <button
                className="w-full rounded-full bg-pink-600 py-4 text-white font-semibold hover:bg-pink-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <iframe
            title="Bloom Location"
            src="https://www.google.com/maps?q=Ankara&output=embed"
            className="w-full h-[450px] rounded-3xl shadow-lg border-0"
            loading="lazy"
          />

        </div>

      </section>
    </>
  );
}