import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
      

  <nav className= "md:fixed z-50 top-0 py-2 py-4">
    <div className="container px-4 mx-auto flex items-center">

      <div className="flex justify-between items-center">
        <NavLink to="/" activeClassName="active" ><img className='h-20 w-24 ml-16' src="/assets/Icons/MyIcon.png" alt="" /></NavLink>
   
      </div>

      <div className="block  md:flex flex-col md:flex-row md:ml-96 mt-4  md:mt-0" >
  
        <NavLink to="/" exact activeClassName="active" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</NavLink>
        <NavLink to="/Statistics" activeClassName="active" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Statistics</NavLink>
        <NavLink to="/Apply" activeClassName="active" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Applied</NavLink>
        <NavLink to="/Blog" activeClassName="active" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Blog</NavLink>
<button
  type="button"
  className="inline-block rounded bg-primary-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
  Apply Now
</button>
      </div>
    </div>
  </nav>




        </div>
    );
};

export default Header;