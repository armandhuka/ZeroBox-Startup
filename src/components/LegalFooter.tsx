
import { Link } from "react-router-dom";

const LegalFooter = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 text-center text-sm text-gray-600 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <Link to="/privacy-policy" className="hover:text-blue-600 underline">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/terms-conditions" className="hover:text-blue-600 underline">
            Terms & Conditions
          </Link>
        </div>
        <p className="mt-3 text-xs">
          © 2024 Zero Box Startup. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LegalFooter;
