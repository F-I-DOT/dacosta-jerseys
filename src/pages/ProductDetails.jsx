import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  // Find the product using the ID from the URL
  const product = products.find((item) => item.id === Number(id));

  // Store the size selected by the customer
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  // Show this if the product does not exist
  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Jersey Not Found</h1>

          <p className="mt-3 text-gray-500">
            The jersey you are looking for does not exist.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  // Create the WhatsApp message
  const whatsappMessage = `Hello Dacosta Jerseys 👋

I would like to order the following jersey:

Jersey: ${product.name}
Team: ${product.team}
Version: ${product.version}
Size: ${selectedSize}
Price: GH₵${product.price}

Please let me know the delivery details. Thank you.`;
  // Convert the message into a WhatsApp URL
  const whatsappUrl = `https://wa.me/233559999532?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <main className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Shop */}
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 transition"
        >
          ← Back to Shop
        </Link>

        {/* Product Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Product Image */}
          <div className="bg-gray-100 min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={`${product.team} ${product.version}`}
              className="w-full h-full object-contain p-6"
            />
          </div>

          {/* Product Information */}
          <div className="p-6 md:p-10">
            {/* Team */}
            <p className="text-sm font-medium text-gray-500">{product.team}</p>

            {/* Product Name */}
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Version */}
            <span
              className={`inline-block mt-4 text-sm font-medium px-3 py-1 rounded-full ${
                product.version === "Player Version"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {product.version}
            </span>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-gray-900">
              GH₵{product.price}
            </p>

            {/* Size Selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Select Size</h2>

                <p className="text-sm text-gray-500">
                  {product.sizes.length}{" "}
                  {product.sizes.length === 1 ? "size" : "sizes"} available
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setShowSizeWarning(false);
                    }}
                    className={`min-w-16 px-5 py-3 rounded-lg border font-medium transition ${
                      selectedSize === size
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Order Button */}
            {showSizeWarning && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Please select a jersey size before ordering.
              </p>
            )}

            <a
              href={selectedSize ? whatsappUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (!selectedSize) {
                  event.preventDefault();
                  setShowSizeWarning(true);
                }
              }}
              className={`block text-center mt-8 py-4 rounded-xl font-semibold transition ${
                selectedSize
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Order on WhatsApp
            </a>

            {/* Payment & Delivery */}
            <div className="mt-8 p-5 bg-gray-50 rounded-xl">
              <h2 className="font-semibold text-gray-900">
                Payment & Delivery
              </h2>

              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Payment:</strong> Telecel Cash
                </p>

                <p>
                  <strong>Number:</strong> 0501989232
                </p>

                <p>
                  <strong>Recipient:</strong> Festus Aboagye
                </p>

                <p>Payment is required before delivery.</p>

                <p>Delivery fee is paid by the buyer.</p>
              </div>
            </div>

            {/* Return Policy */}
            <div className="mt-5 p-5 border border-gray-200 rounded-xl">
              <h2 className="font-semibold text-gray-900">Return Policy</h2>

              <p className="mt-2 text-sm text-gray-600">
                Jersey with a tempered tag is not returnable.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mt-5 p-5 bg-green-50 rounded-xl">
              <h2 className="font-semibold text-gray-900">
                Why Choose Dacosta Jerseys?
              </h2>

              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>✓ Quality football jerseys</li>
                <li>✓ Affordable prices</li>
                <li>✓ Easy ordering through WhatsApp</li>
                <li>✓ Delivery available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
