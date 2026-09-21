import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error Number */}
        <p className="text-7xl font-bold text-green-600">404</p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        {/* Back Home */}
        <Link
          to="/"
          className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
