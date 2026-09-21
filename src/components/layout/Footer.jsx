import { FaWhatsapp, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Business Information */}
          <div>
            <h2 className="text-xl font-bold text-white">Dacosta Jerseys</h2>

            <p className="mt-4 text-sm leading-6">
              Quality and affordable football wears for football supporters in
              Kumasi and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>

              <Link to="/shop" className="hover:text-green-400 transition">
                Shop
              </Link>

              <Link to="/about" className="hover:text-green-400 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <p>📍 Kumasi, Ghana</p>

              <a
                href="tel:0559999532"
                className="hover:text-green-400 transition"
              >
                📞 0559999532
              </a>

              <a
                href="https://wa.me/233559999532"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>

            <div className="mt-4 flex items-center gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/233559999532"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-300 hover:text-green-400 hover:scale-110 transition duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dacosta_37?_r=1&_t=ZS-99szxLzuxxh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-300 hover:text-green-400 hover:scale-110 transition duration-300"
              >
                <FaTiktok className="w-6 h-6" />
              </a>

              {/* X */}
              <a
                href="https://x.com/UtD_w00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-300 hover:text-green-400 hover:scale-110 transition duration-300"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment & Delivery */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <h3 className="font-semibold text-white">Payment & Delivery</h3>

          <div className="mt-3 text-sm space-y-2">
            <p>Telecel Cash: 0501989232</p>

            <p>Recipient: Festus Aboagye</p>

            <p>Payment is required before delivery.</p>

            <p>Delivery fee is paid by the buyer.</p>
          </div>
        </div>

        {/* Return Policy */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="font-semibold text-white">Return Policy</h3>

          <p className="mt-3 text-sm">
            Jersey with a tempered tag is not returnable.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          © {new Date().getFullYear()} Dacosta Jerseys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
