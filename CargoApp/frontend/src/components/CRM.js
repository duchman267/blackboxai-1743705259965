import React, { useState } from 'react';

const CRM = () => {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample customer data
  const customers = [
    {
      id: 'CUS001',
      name: 'Tech Corp',
      email: 'contact@techcorp.com',
      phone: '+62 812-3456-7890',
      address: 'Jakarta, Indonesia',
      type: 'Corporate',
      status: 'Active',
      totalShipments: 45,
      lastShipment: '2024-01-15'
    },
    {
      id: 'CUS002',
      name: 'Global Trade',
      email: 'info@globaltrade.com',
      phone: '+62 813-9876-5432',
      address: 'Surabaya, Indonesia',
      type: 'Corporate',
      status: 'Active',
      totalShipments: 32,
      lastShipment: '2024-01-14'
    }
  ];

  const AddCustomerModal = () => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Add New Customer</h3>
          <button 
            onClick={() => setShowAddCustomer(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Customer Name</label>
              <input type="text" className="input-field" placeholder="Enter customer name" />
            </div>
            <div>
              <label className="form-label">Customer Type</label>
              <select className="input-field">
                <option value="">Select customer type</option>
                <option value="corporate">Corporate</option>
                <option value="individual">Individual</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="input-field" placeholder="Enter email address" />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input type="tel" className="input-field" placeholder="Enter phone number" />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="form-label">Address</label>
            <textarea 
              className="input-field" 
              rows="3" 
              placeholder="Enter complete address"
            ></textarea>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Tax ID</label>
              <input type="text" className="input-field" placeholder="Enter tax ID" />
            </div>
            <div>
              <label className="form-label">Payment Terms</label>
              <select className="input-field">
                <option value="">Select payment terms</option>
                <option value="net15">Net 15</option>
                <option value="net30">Net 30</option>
                <option value="net45">Net 45</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="form-label">Notes</label>
            <textarea 
              className="input-field" 
              rows="3" 
              placeholder="Enter any additional notes"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowAddCustomer(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Customer Management</h1>
        <button 
          onClick={() => setShowAddCustomer(true)}
          className="btn-primary"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Customer
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="form-label">Search</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="fas fa-search text-gray-400"></i>
              </span>
              <input
                type="text"
                className="input-field pl-10"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="form-label">Customer Type</label>
            <select className="input-field">
              <option value="">All Types</option>
              <option value="corporate">Corporate</option>
              <option value="individual">Individual</option>
            </select>
          </div>
          <div>
            <label className="form-label">Status</label>
            <select className="input-field">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Shipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.totalShipments}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastShipment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="btn-secondary">Previous</button>
              <button className="btn-secondary">Next</button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">2</span> of{' '}
                  <span className="font-medium">2</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomer && <AddCustomerModal />}
    </div>
  );
};

export default CRM;