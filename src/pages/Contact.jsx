import { FaWhatsapp, FaTiktok, FaXTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-green-400 font-medium">DACOSTA JERSEYS</p>

          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Contact Us</h1>

          <p className="mt-4 text-gray-300 max-w-2xl">
            Have a question about a jersey, size, payment or delivery? Contact
            Dacosta Jerseys directly.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl">📞</p>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Call Us
              </h2>

              <p className="mt-2 text-gray-600">
                Speak directly with Dacosta Jerseys.
              </p>

              <a
                href="tel:0559999532"
                className="inline-block mt-5 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition"
              >
                0559999532
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl">💬</p>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                WhatsApp
              </h2>

              <p className="mt-2 text-gray-600">
                Contact us directly about your jersey order.
              </p>

              <a
                href="https://wa.me/233559999532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl">📍</p>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Location
              </h2>

              <p className="mt-2 text-gray-600">Kumasi, Ghana</p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl">🌐</p>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Follow Us
              </h2>

              <div className="mt-5 flex items-center gap-5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/233559999532"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-700 hover:text-green-600 hover:scale-110 transition duration-300"
                >
                  <FaWhatsapp className="w-7 h-7" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@dacosta_37?_r=1&_t=ZS-99szxLzuxxh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-700 hover:text-green-600 hover:scale-110 transition duration-300"
                >
                  <FaTiktok className="w-7 h-7" />
                </a>

                {/* X */}
                <a
                  href="https://x.com/UtD_w00"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-gray-700 hover:text-green-600 hover:scale-110 transition duration-300"
                >
                  <FaXTwitter className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Payment & Delivery
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900">Payment</h3>

                <p className="mt-2 text-gray-600">Telecel Cash</p>

                <p className="mt-1 text-gray-600">0501989232</p>

                <p className="mt-1 text-gray-600">Festus Aboagye</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900">Delivery</h3>

                <p className="mt-2 text-gray-600">
                  Payment is required before delivery.
                </p>

                <p className="mt-2 text-gray-600">
                  Delivery fee is paid by the buyer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to order your jersey?</h2>

          <p className="mt-3 text-green-100">
            Contact us on WhatsApp and let us help you with your order.
          </p>

          <a
            href="https://wa.me/233559999532"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-green-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
