import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div >

  <nav className="bg-white py-2 md:py-4">
    <div className="container px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
        <Link to="/" >JoBSeeKer</Link>
        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
  
        <Link to="/" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</Link>
        <Link to="/Statistics" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Statistics</Link>
        <Link to="/Apply" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Applied</Link>
        <Link to="/Blog" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Blog</Link>

      </div>
    </div>
  </nav>



</div>
        </div>
    );
};

export default Header;