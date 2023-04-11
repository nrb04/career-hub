import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div >

  <nav className="bg-white py-2 md:py-4">
    <div className="container px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
        <Link to="/" ><img className='h-16 w-36 ml-16' src="/public/assets/Icons/MyIcon.png" alt="" /></Link>
   
      </div>

      <div className="block  md:flex flex-col md:flex-row md:ml-96 mt-4  md:mt-0" >
  
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