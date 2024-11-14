import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-purple-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page does not exist
        </p>
        <Link to="/" className="mt-6 inline-block bg-purple-500 text-white px-4 py-2 rounded-lg">
          Go Back Home
        </Link>
      </div>
    </div>

    );
};

export default Error;