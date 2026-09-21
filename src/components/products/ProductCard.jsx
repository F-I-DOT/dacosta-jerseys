import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="relative h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Jersey image */}
        <img
          src={product.image}
          alt={`${product.team} ${product.version}`}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-300"
        />

        {/* Availability badge */}
        <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
      </div>

      {/* Product Information */}
      <div className="p-5">
        {/* Team & Version */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-gray-500">{product.team}</p>

          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              product.version === "Player Version"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {product.version}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* Price */}
        <p className="mt-3 text-2xl font-bold text-gray-900">
          GH₵{product.price}
        </p>

        {/* Sizes */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">Available sizes</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* View Button */}
        <Link
          to={`/shop/${product.id}`}
          className="block w-full mt-5 bg-gray-900 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
        >
          View Jersey
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
