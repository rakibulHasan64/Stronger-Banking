
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="container mx-auto">
         {/* Navbar */}
         <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-10">
            {/* Logo */}
            <div className="text-xl font-bold text-purple-600">
               <Link to="/">
                  <img src="/Screder_Logo 1.png" alt="Screder Logo" className="h-8" />
               </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5">
               <Link to="/Features" className="text-gray-600 hover:text-purple-600">
                  Features
               </Link>
               <Link to="/about" className="text-gray-600 hover:text-purple-600">
                  About Us
               </Link>
               <Link to="/Pricing" className="text-gray-600 hover:text-purple-600">
                  Pricing
               </Link>
               <Link to="/contact" className="text-gray-600 hover:text-purple-600">
                  Blog
               </Link>
               <Link to="/contactme" className="text-gray-600 hover:text-purple-600">
                  Our Plan
               </Link>
               <Link to="/Tooto" className="text-gray-600 hover:text-purple-600">
                  Contact
               </Link>
               <Link to="/Lastest" className="text-gray-600 hover:text-purple-600">
                  Contact
               </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg/ :flex space-x-4 items-center">
               <Link to="/login" className="text-black hover:underline">
                  Log In
               </Link>
               <Link
                  to="/signup"
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
               >
                  Sign Up
               </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
               className="lg:hidden text-purple-600 focus:outline-none"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               ☰
            </button>
         </nav>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="md:hidden bg-white shadow-md p-5 space-y-4">
               <Link to="/Features" className="block text-gray-600 hover:text-purple-600">
                  Features
               </Link>
               <Link to="/about" className="block text-gray-600 hover:text-purple-600">
                  About Us
               </Link>
               <Link to="/Pricing" className="block text-gray-600 hover:text-purple-600">
                  Pricing
               </Link>
               <Link to="/contact" className="block text-gray-600 hover:text-purple-600">
                  Blog
               </Link>
               <Link to="/contactme" className="block text-gray-600 hover:text-purple-600">
                  Our Plan
               </Link>
               <Link to="/Tooto" className="block text-gray-600 hover:text-purple-600">
                  Contact
               </Link>
               <Link to="/Lastest" className="block text-gray-600 hover:text-purple-600">
                  Contact
               </Link>

               {/* Mobile Actions */}
               <div className="flex flex-col space-y-3 mt-3">
                  <Link to="/login" className="text-black hover:underline">
                     Log In
                  </Link>
                  <Link
                     to="/signup"
                     className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                  >
                     Sign Up
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
}

export default Navbar;
