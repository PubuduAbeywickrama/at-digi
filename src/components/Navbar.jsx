import React, { useState } from 'react';
import Logosvg from './Logosvg';

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-700 p-4" style={{ height: '77px' }}>
      <div className="container mx-auto flex justify-between items-center h-full" style={{ padding: '26px 80px' }}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logosvg />
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4 text-sm lg:text-base" style={{ gap: '28px' }}>
            <li>
              <a href="#" className="text-white hover:text-gray-300">SERVICES</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">ABOUT US</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">CONTACT US</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">CAREERS</a>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" clipRule="evenodd"></path>
            </svg>
          </button>
          </div>
          {isMobileMenuOpen && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <div className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center">
              <button className="mt-8 px-4 py-2  text-white rounded-md hover:bg-gray-50 focus:outline-none self-end" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
              </button>
                <ul className="text-lg">
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-100" onClick={toggleMobileMenu}>SERVICES</a>
                    
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-300" onClick={toggleMobileMenu}>ABOUT US</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-300" onClick={toggleMobileMenu}>CONTACT US</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-300" onClick={toggleMobileMenu}>CAREERS</a>
                  </li>
                </ul>
                
              </div>
            </div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;
