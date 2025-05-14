import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold text-white">Healthify</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your companion for a healthier lifestyle with specialized Indian nutrition tracking.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/food-database" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Food Database
                </Link>
              </li>
              <li>
                <Link to="/health-tips" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Health Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/health-tips" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Nutrition Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-400 transition duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-400 transition duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-400 transition duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@healthify.com" 
                className="text-gray-400 hover:text-green-400 transition duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div>
              <Link 
                to="/contact" 
                className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Healthify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};