import React, { useState } from 'react';

const ShippingOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);

  // Sample shipping methods data
  const shippingMethods = [
    {
      id: 'air',
      name: 'Air Freight',
      icon: 'fa-plane',
      description: 'Fastest shipping method with 2-3 days delivery time',
      features: [
        'Door-to-door delivery',
        'Real-time tracking',
        'Express customs clearance',
        'Insurance included'
      ],
      baseRate: 25.00, // per kg
      restrictions: 'Maximum weight: 500kg per package'
    },
    {
      id: 'sea',
      name: 'Sea Freight',
      icon: 'fa-ship',
      description: 'Most economical for large shipments with 15-20 days delivery',
      features: [
        'Container shipping',
        'Port-to-port service',
        'Bulk cargo handling',
        'Flexible scheduling'
      ],
      baseRate: 5.00, // per kg
      restrictions: 'Minimum weight: 1000kg'
    },
    {
      id: 'land',
      name: 'Land Freight',
      icon: 'fa-truck',
      description: 'Reliable domestic shipping with 5-7 days delivery',
      features: [
        'Door-to-door delivery',
        'Multiple vehicle types',
        'GPS tracking',
        'Nationwide coverage'
      ],
      baseRate: 10.00, // per kg
      restrictions: 'Available for domestic routes only'
    }
  ];

  const QuoteCalculatorModal = () => {
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    const [calculatedQuote, setCalculatedQuote] = useState(null);

    const calculateQuote = (e) => {
      e.preventDefault();
      const method = shippingMethods.find(m => m.id === selectedMethod);
      if (!method) return;

      const weightNum = parseFloat(weight);
      const distanceNum = parseFloat(distance);
      
      // Basic quote calculation (can be made more complex based on requirements)
      const basePrice = weightNum * method.baseRate;
      const distanceFactor = distanceNum * 0.1; // $0.10 per km
      const total = basePrice + distanceFactor;

      setCalculatedQuote({
        basePrice,
        distanceCost: distanceFactor,
        total,
        estimatedDays: method.id === 'air' ? '2-3' : method.id === 'sea' ? '15-20' : '5-7'
      });
    };

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Shipping Quote Calculator</h3>
            <button 
              onClick={() => setShowQuoteCalculator(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form onSubmit={calculateQuote} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Cargo Weight (kg)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter weight in kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Distance (km)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter distance in km"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Calculate Quote
            </button>

            {calculatedQuote && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quote Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-medium">${calculatedQuote.basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance Cost:</span>
                    <span className="font-medium">${calculatedQuote.distanceCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-900 font-semibold">Total Cost:</span>
                    <span className="text-gray-900 font-semibold">
                      ${calculatedQuote.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-md">
                    <p className="text-blue-800">
                      <i className="fas fa-info-circle mr-2"></i>
                      Estimated delivery time: {calculatedQuote.estimatedDays} days
                    </p>
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
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Shipping Options</h1>
        <p className="text-gray-600">Choose the best shipping method for your cargo</p>
      </div>

      {/* Shipping Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {shippingMethods.map((method) => (
          <div
            key={method.id}
            className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 ${
              selectedMethod === method.id ? 'ring-2 ring-green-500' : ''
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl text-green-600">
                  <i className={`fas ${method.icon}`}></i>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  From ${method.baseRate}/kg
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <ul className="space-y-2">
                {method.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">{method.restrictions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className="btn-primary"
          onClick={() => {
            if (selectedMethod) {
              setShowQuoteCalculator(true);
            }
          }}
          disabled={!selectedMethod}
        >
          <i className="fas fa-calculator mr-2"></i>
          Get Quote
        </button>
        <button className="btn-secondary">
          <i className="fas fa-question-circle mr-2"></i>
          Compare Methods
        </button>
      </div>

      {/* Additional Information */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-xl text-blue-600 mb-4">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cargo Insurance</h3>
          <p className="text-gray-600 text-sm">
            All shipments are automatically insured up to $1000. Additional coverage available.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-xl text-blue-600 mb-4">
            <i className="fas fa-clock"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
          <p className="text-gray-600 text-sm">
            Track your shipment 24/7 with our advanced tracking system.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-xl text-blue-600 mb-4">
            <i className="fas fa-headset"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
          <p className="text-gray-600 text-sm">
            Our support team is available 24/7 to assist you with your shipping needs.
          </p>
        </div>
      </div>

      {/* Quote Calculator Modal */}
      {showQuoteCalculator && <QuoteCalculatorModal />}
    </div>
  );
};

export default ShippingOptions;