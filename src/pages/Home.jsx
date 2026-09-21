import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const featuredProducts = [
    products[0],
    products[4],
    products[6],
    products[10],
  ];
  const heroProduct = products[0];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Hero Text */}
            <div className="max-w-3xl">
              <p className="text-green-400 font-semibold uppercase tracking-wide">
                Dacosta Jerseys
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Quality Football Jerseys at Affordable Prices
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                Get your favourite club jerseys in Player and Fan versions.
                Choose your size and order directly through WhatsApp.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition"
                >
                  Shop Jerseys
                </Link>

                <a
                  href="https://wa.me/233559999532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-gray-900 transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Jersey Image */}
            <div className="flex justify-center">
              <Link
                to={`/shop/${heroProduct.id}`}
                className="w-full max-w-md h-[420px] bg-gray-800 rounded-3xl flex items-center justify-center overflow-hidden"
              >
                <img
                  src={heroProduct.image}
                  alt={`${heroProduct.team} ${heroProduct.version} jersey`}
                  className="w-full h-full object-contain p-6 hover:scale-105 transition duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Player Version */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <p className="text-sm text-gray-500">Player Version</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">GH₵180</h2>

              <p className="mt-2 text-gray-600">
                Premium-style football jerseys available in selected sizes.
              </p>
            </div>

            {/* Fan Version */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <p className="text-sm text-gray-500">Fan Version</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">GH₵150</h2>

              <p className="mt-2 text-gray-600">
                Affordable football jerseys for everyday supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jerseys */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-green-600 font-semibold">FEATURED JERSEYS</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Check Out Our Jerseys
              </h2>

              <p className="mt-3 text-gray-600 max-w-2xl">
                Explore some of our available football jerseys and find the
                right one for you.
              </p>
            </div>

            <Link
              to="/shop"
              className="text-green-600 font-semibold hover:text-green-700 transition"
            >
              View All Jerseys →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.team} ${product.version}`}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500">{product.team}</p>

                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-gray-900">
                      GH₵{product.price}
                    </p>

                    <span className="text-xs text-gray-500">
                      {product.version}
                    </span>
                  </div>

                  <Link
                    to={`/shop/${product.id}`}
                    className="block mt-4 text-center bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition"
                  >
                    View Jersey
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600 font-semibold">SHOP BY TEAM</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Find Your Favourite Club
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Explore jerseys from some of the biggest football clubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-10">
            {[
              "Real Madrid",
              "Barcelona",
              "Arsenal",
              "Manchester United",
              "Chelsea",
              "Manchester City",
              "Liverpool",
            ].map((team) => (
              <Link
                key={team}
                to={`/shop?team=${encodeURIComponent(team)}`}
                className="border border-gray-200 rounded-xl p-5 text-center font-semibold text-gray-800 hover:border-green-500 hover:text-green-600 hover:shadow-md transition"
              >
                {team}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600 font-semibold">WHY DACOSTA JERSEYS</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Simple, Affordable & Convenient
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Quality */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Quality Jerseys
              </h3>

              <p className="mt-3 text-gray-600">
                Choose from a collection of football jerseys from popular clubs
                and teams.
              </p>
            </div>

            {/* Affordable */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Affordable Prices
              </h3>

              <p className="mt-3 text-gray-600">
                Player and Fan versions are available at clear and affordable
                prices.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Easy WhatsApp Ordering
              </h3>

              <p className="mt-3 text-gray-600">
                Select your jersey and size, then contact us directly through
                WhatsApp to place your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Order CTA */}
      <section className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold">Ready to get your jersey?</h2>

              <p className="mt-3 text-green-100">
                Browse our collection and order directly through WhatsApp.
              </p>

              <p className="mt-2 text-green-100">📍 Kumasi</p>
            </div>

            <Link
              to="/shop"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
            >
              Browse Jerseys
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
