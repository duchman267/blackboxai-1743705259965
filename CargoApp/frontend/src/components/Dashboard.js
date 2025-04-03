import React from 'react';

const Dashboard = () => {
  // Sample data for dashboard
  const stats = [
    { title: 'Active Shipments', value: '156', icon: 'fa-truck-moving', trend: '+12%', color: 'text-green-600' },
    { title: 'Pending Invoices', value: '43', icon: 'fa-file-invoice', trend: '-5%', color: 'text-red-600' },
    { title: 'Monthly Revenue', value: '$45,678', icon: 'fa-coins', trend: '+8%', color: 'text-green-600' },
    { title: 'Active Customers', value: '289', icon: 'fa-users', trend: '+3%', color: 'text-green-600' }
  ];

  const recentShipments = [
    { id: 'SH001', customer: 'Tech Corp', destination: 'Jakarta', status: 'In Transit', date: '2024-01-15' },
    { id: 'SH002', customer: 'Global Trade', destination: 'Surabaya', status: 'Delivered', date: '2024-01-14' },
    { id: 'SH003', customer: 'Indo Express', destination: 'Bandung', status: 'Processing', date: '2024-01-14' },
    { id: 'SH004', customer: 'Mega Logistics', destination: 'Medan', status: 'In Transit', date: '2024-01-13' }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <button className="btn-primary">
          <i className="fas fa-plus mr-2"></i>
          New Shipment
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`rounded-full p-3 bg-gray-50`}>
                <i className={`fas ${stat.icon} text-xl ${stat.color}`}></i>
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${stat.color} font-medium`}>
                {stat.trend}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Shipment Status Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipment Status</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Shipment status chart will be displayed here</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Revenue chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Recent Shipments */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Shipments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tracking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentShipments.map((shipment, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {shipment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shipment.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shipment.destination}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shipment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-sm font-medium text-green-600 hover:text-green-500">
            View all shipments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;