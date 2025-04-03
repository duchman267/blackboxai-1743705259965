import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Invoice from './components/Invoice';
import CRM from './components/CRM';
import Finance from './components/Finance';
import Tracking from './components/Tracking';
import ShippingOptions from './components/ShippingOptions';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/invoice/*" element={<Invoice />} />
              <Route path="/crm/*" element={<CRM />} />
              <Route path="/finance/*" element={<Finance />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/shipping" element={<ShippingOptions />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Notification Container */}
      <div className="fixed bottom-4 right-4 z-50" id="notification-container"></div>
    </div>
  );
}

export default App;