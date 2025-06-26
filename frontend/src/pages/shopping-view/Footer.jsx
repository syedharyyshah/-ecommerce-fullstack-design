import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import { FaApple } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" mt-10 text-gray-700 ">
      <div className=" mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 md:px-21 md:py-3">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="Company Logo" className="h-16 mr-2" />
              
            </div>
            <p className="text-sm mb-4">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/find-store" className="hover:text-blue-600">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-blue-600">Categories</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-600">Blogs</Link></li>
            </ul>
          </div>

          {/* Partnership Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/find-store" className="hover:text-blue-600">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-blue-600">Categories</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-600">Blogs</Link></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/money-refund" className="hover:text-blue-600">Money Refund</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-600">Shipping</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact us</Link></li>
            </ul>
          </div>

          {/* For Users & Get App Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">For users</h3>
              <ul className="space-y-2">
                <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
                <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
                <li><Link to="/settings" className="hover:text-blue-600">Settings</Link></li>
                <li><Link to="/orders" className="hover:text-blue-600">My Orders</Link></li>
              </ul>
            </div>
            <div className="flex space-x-2 mt-4">
              <a href="#" className="bg-black text-white px-2 py-1 rounded flex items-center">
                <FaApple className="mr-1" />
                <span className="text-xs">Get it on</span><br />
                <span className="font-semibold">App Store</span>
              </a>
              <a href="#" className="bg-black text-white px-2 py-1 rounded flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </a>
            </div>
          </div>
        </div>

       {/* Bottom Section */}
<div className="border-t border-gray-300 p-8 bg-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
  <div className="mb-4 md:mb-0">
    <p className="text-sm">© 2023 Ecommerce.</p>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm">English</span>
    <img 
      src="https://flagcdn.com/us.svg" 
      alt="United States" 
      className="w-5 h-auto"
    />
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;