import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, BarChart2, Utensils, Heart, Mail, Home, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleLogout = () => {
    logout();
    closeMenu();
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Heart className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Healthify</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') 
                  ? 'text-green-600 border-b-2 border-green-500' 
                  : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive('/dashboard') 
                      ? 'text-green-600 border-b-2 border-green-500' 
                      : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <BarChart2 className="mr-1 h-4 w-4" />
                  Dashboard
                </Link>
                <Link 
                  to="/food-database" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive('/food-database') 
                      ? 'text-green-600 border-b-2 border-green-500' 
                      : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <Utensils className="mr-1 h-4 w-4" />
                  Food Database
                </Link>
                <Link 
                  to="/profile" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive('/profile') 
                      ? 'text-green-600 border-b-2 border-green-500' 
                      : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <User className="mr-1 h-4 w-4" />
                  Profile
                </Link>
              </>
            )}
            
            <Link 
              to="/health-tips" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/health-tips') 
                  ? 'text-green-600 border-b-2 border-green-500' 
                  : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              <Heart className="mr-1 h-4 w-4" />
              Health Tips
            </Link>
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 border-b-2 border-green-500' 
                  : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              <Mail className="mr-1 h-4 w-4" />
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <button 
                onClick={handleLogout}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                <LogOut className="mr-2 h-4 w-4" /> 
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={closeMenu}
            >
              <Home className="inline-block mr-2 h-5 w-5" />
              Home
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/dashboard') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <BarChart2 className="inline-block mr-2 h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/food-database"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/food-database') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <Utensils className="inline-block mr-2 h-5 w-5" />
                  Food Database
                </Link>
                <Link
                  to="/profile"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/profile') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <User className="inline-block mr-2 h-5 w-5" />
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/login') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/register') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
            
            <Link
              to="/health-tips"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/health-tips') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={closeMenu}
            >
              <Heart className="inline-block mr-2 h-5 w-5" />
              Health Tips
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={closeMenu}
            >
              <Mail className="inline-block mr-2 h-5 w-5" />
              Contact
            </Link>
            
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-700 hover:text-red-900 hover:bg-red-50"
              >
                <LogOut className="inline-block mr-2 h-5 w-5" />
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};