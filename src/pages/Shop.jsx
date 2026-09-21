import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

function Shop() {
  // Store the selected team
  const [searchParams] = useSearchParams();

  const teamFromUrl = searchParams.get("team");

  const [selectedTeam, setSelectedTeam] = useState(teamFromUrl || "All");

  const [selectedVersion, setSelectedVersion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("All");

  // Get all unique teams from the products
  const teams = ["All", ...new Set(products.map((product) => product.team))];

  // Filter the products
  const filteredProducts = products.filter((product) => {
    const teamMatches = selectedTeam === "All" || product.team === selectedTeam;

    const versionMatches =
      selectedVersion === "All" || product.version === selectedVersion;

    const priceMatches =
      selectedPrice === "All" || product.price === Number(selectedPrice);

    const searchMatches =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.team.toLowerCase().includes(searchTerm.toLowerCase());

    return teamMatches && versionMatches && priceMatches && searchMatches;
  });

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-green-400 font-medium">DACOSTA JERSEYS</p>

          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Shop Football Jerseys
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl">
            Browse our collection of quality and affordable football jerseys.
            Choose your preferred version and size, then order directly through
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {" "}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search Jerseys
              </label>

              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by team or jersey..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Team Filter */}
            <div className="flex-1">
              <label
                htmlFor="team"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Team
              </label>

              <select
                id="team"
                value={selectedTeam}
                onChange={(event) => setSelectedTeam(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team === "All" ? "All Teams" : team}
                  </option>
                ))}
              </select>
            </div>
            {/* Version Filter */}
            <div className="flex-1">
              <label
                htmlFor="version"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Version
              </label>

              <select
                id="version"
                value={selectedVersion}
                onChange={(event) => setSelectedVersion(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All">All Versions</option>

                <option value="Player Version">Player Version</option>

                <option value="Fan Version">Fan Version</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Price
              </label>

              <select
                id="price"
                value={selectedPrice}
                onChange={(event) => setSelectedPrice(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All">All Prices</option>
                <option value="150">GH₵150</option>
                <option value="180">GH₵180</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Available Jerseys
          </h2>

          <p className="text-sm text-gray-500">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-900">
              No jerseys found
            </h3>

            <p className="mt-2 text-gray-500">Try changing your filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;
