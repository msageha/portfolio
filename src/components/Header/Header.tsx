import React from "react";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          >
            Mizuki Sango
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
