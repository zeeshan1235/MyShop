import { FaSearch } from 'react-icons/fa';

// IMPORTANT: This is the hidden code for the admin backdoor
const SECRET_ADMIN_CODE = "9999"; 

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-white">
      {/* Search Bar with Hidden Logic */}
      <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-xl">
        <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-full p-2">
          <FaSearch className="text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search products or type secret code to access admin..."
            className="w-full p-2 text-lg focus:outline-none"
            // The actual logic to check the SECRET_ADMIN_CODE will be added here later.
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to MyShop</h1>
        <p className="text-xl text-gray-500 mt-2">Professional E-commerce Setup for England.</p>
        <p className="text-sm text-red-500 mt-4">
          Status: Core files prepared. Next step: Add product listings.
        </p>
      </div>

    </div>
  );
};

export default HomePage;
