import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Business Name */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold text-gray-900"
          >
            Dacosta Jerseys
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Contact
            </Link>

            <a
              href="https://wa.me/233559999532"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-600 transition"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={closeMenu}
                className="px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-600 transition"
              >
                Shop
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-600 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-600 transition"
              >
                Contact
              </Link>

              <a
                href="https://wa.me/233559999532"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 bg-green-600 text-white px-4 py-3 rounded-lg text-center hover:bg-green-700 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
