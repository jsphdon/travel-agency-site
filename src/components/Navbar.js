import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Get the current location
  const location = useLocation();
  return (
    <nav className="container mx-auto fixed top-0 left-0 w-full z-20 bg-transparent p-4">
      <ul className='container mx-auto flex justify-between items-center gap-20 '>
        <li className={location.pathname === "/" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Home</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Link</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Link</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Link</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Link</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-white border-b-2 border-slate-500' : 'text-gray-400'}>
          <Link to="/" className='font-semibold'>Link</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
