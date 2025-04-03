import React, { useState } from 'react';

const Navbar = ({ onMenuClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            
            {/* Search Bar */}
            <div className="ml-4 md:ml-8">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="fas fa-search text-gray-400"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {/* Sample notifications */}
                    <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm text-gray-700">New shipment request received</p>
                      <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm text-gray-700">Invoice #1234 has been paid</p>
                      <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                    </a>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <a href="#" className="text-sm text-green-600 hover:text-green-700">View all notifications</a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">Admin User</span>
                <i className="fas fa-chevron-down text-gray-500 text-sm"></i>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <i className="fas fa-user mr-2"></i> Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <i className="fas fa-cog mr-2"></i> Settings
                  </a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;