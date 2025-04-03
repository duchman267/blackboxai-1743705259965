import React, { useState } from 'react';

const Finance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showTaxCalculator, setShowTaxCalculator] = useState(false);

  // Sample financial data
  const financialOverview = {
    totalRevenue: 125000.00,
    pendingPayments: 45000.00,
    taxLiability: 12500.00,
    operatingCosts: 65000.00
  };

  const recentTransactions = [
    {
      id: 'TRX001',
      date: '2024-01-15',
      description: 'Invoice Payment - Tech Corp',
      type: 'Income',
      amount: 2500.00,
      status: 'Completed'
    },
    {
      id: 'TRX002',
      date: '2024-01-14',
      description: 'Customs Duty Payment',
      type: 'Expense',
      amount: 1200.00,
      status: 'Completed'
    }
  ];

  const TaxCalculatorModal = () => {
    const [cargoValue, setCargoValue] = useState('');
    const [shippingCost, setShippingCost] = useState('');
    const [cargoType, setCargoType] = useState('');
    const [calculatedTax, setCalculatedTax] = useState(null);

    const calculateTax = (e) => {
      e.preventDefault();
      // Indonesian cargo tax calculation (simplified example)
      const value = parseFloat(cargoValue);
      const shipping = parseFloat(shippingCost);
      const baseValue = value + shipping;
      
      // Example tax rates (adjust according to actual Indonesian regulations)
      const taxRates = {
        'general': 0.10,  // 10% for general cargo
        'luxury': 0.15,   // 15% for luxury items
        'essential': 0.05 // 5% for essential goods
      };

      const taxRate = taxRates[cargoType] || taxRates.general;
      const tax = baseValue * taxRate;
      
      setCalculatedTax({
        baseValue,
        taxRate: taxRate * 100,
        taxAmount: tax,
        totalAmount: baseValue + tax
      });
    };

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Indonesian Cargo Tax Calculator</h3>
            <button 
              onClick={() => setShowTaxCalculator(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form onSubmit={calculateTax} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Cargo Value (IDR)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter cargo value"
                  value={cargoValue}
                  onChange={(e) => setCargoValue(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Shipping Cost (IDR)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter shipping cost"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">Cargo Type</label>
              <select
                className="input-field"
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                required
              >
                <option value="">Select cargo type</option>
                <option value="general">General Cargo</option>
                <option value="luxury">Luxury Items</option>
                <option value="essential">Essential Goods</option>
              </select>
            </div>

            <button type="submit" className="btn-primary w-full">
              Calculate Tax
            </button>

            {calculatedTax && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tax Calculation Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Value:</span>
                    <span className="font-medium">IDR {calculatedTax.baseValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Rate:</span>
                    <span className="font-medium">{calculatedTax.taxRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Amount:</span>
                    <span className="font-medium">IDR {calculatedTax.taxAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-900 font-semibold">Total Amount:</span>
                    <span className="text-gray-900 font-semibold">
                      IDR {calculatedTax.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Financial Management</h1>
        <button 
          onClick={() => setShowTaxCalculator(true)}
          className="btn-primary"
        >
          <i className="fas fa-calculator mr-2"></i>
          Tax Calculator
        </button>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${financialOverview.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full p-3 bg-green-50">
              <i className="fas fa-dollar-sign text-xl text-green-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Payments</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${financialOverview.pendingPayments.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full p-3 bg-yellow-50">
              <i className="fas fa-clock text-xl text-yellow-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Tax Liability</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${financialOverview.taxLiability.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full p-3 bg-blue-50">
              <i className="fas fa-receipt text-xl text-blue-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Operating Costs</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${financialOverview.operatingCosts.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full p-3 bg-red-50">
              <i className="fas fa-chart-line text-xl text-red-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`${
                activeTab === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`${
                activeTab === 'reports'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`${
                activeTab === 'settings'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
            >
              Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${transaction.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tax Calculator Modal */}
      {showTaxCalculator && <TaxCalculatorModal />}
    </div>
  );
};

export default Finance;