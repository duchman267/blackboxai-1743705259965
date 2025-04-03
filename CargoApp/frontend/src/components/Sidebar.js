import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const navItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'fas fa-tachometer-alt'
    },
    {
      path: '/invoice',
      name: 'Invoice',
      icon: 'fas fa-file-invoice'
    },
    {
      path: '/crm',
      name: 'CRM',
      icon: 'fas fa-users'
    },
    {
      path: '/finance',
      name: 'Finance',
      icon: 'fas fa-coins'
    },
    {
      path: '/tracking',
      name: 'Tracking',
      icon: 'fas fa-truck-moving'
    },
    {
      path: '/shipping',
      name: 'Shipping',
      icon: 'fas fa-ship'
    }
  ];

  return (
    <div 
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-800 h-screen transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 bg-gray-900">
        {isOpen ? (
          <h1 className="text-white text-2xl font-bold">CargoApp</h1>
        ) : (
          <h1 className="text-white text-2xl font-bold">CA</h1>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="mt-8">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                ${isActive ? 'bg-gray-700 text-white' : ''}
              `}
            >
              <i className={`${item.icon} w-6`}></i>
              {isOpen && (
                <span className="ml-4 font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4">
        <button 
          className="flex items-center w-full px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          onClick={() => {
            // Add logout logic here
            window.location.reload();
          }}
        >
          <i className="fas fa-sign-out-alt w-6"></i>
          {isOpen && (
            <span className="ml-4 font-medium">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;