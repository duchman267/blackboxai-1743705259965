import React, { useState } from 'react';

const Tracking = () => {
  const [smuNumber, setSmuNumber] = useState('');
  const [showTrackingDetails, setShowTrackingDetails] = useState(false);

  // Sample tracking data
  const trackingData = {
    smuNumber: 'SMU123456789',
    status: 'In Transit',
    origin: 'Jakarta, Indonesia',
    destination: 'Surabaya, Indonesia',
    estimatedDelivery: '2024-01-20',
    customer: 'Tech Corp',
    shipmentType: 'Land Freight',
    weight: '500 kg',
    trackingHistory: [
      {
        date: '2024-01-15 14:30',
        location: 'Jakarta Sorting Center',
        status: 'Departed',
        description: 'Shipment has left the facility'
      },
      {
        date: '2024-01-15 10:15',
        location: 'Jakarta Warehouse',
        status: 'Processed',
        description: 'Shipment processed and ready for dispatch'
      },
      {
        date: '2024-01-15 08:00',
        location: 'Jakarta Port',
        status: 'Received',
        description: 'Shipment received at facility'
      }
    ]
  };

  const handleTrackShipment = (e) => {
    e.preventDefault();
    setShowTrackingDetails(true);
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Cargo Tracking</h1>
        <p className="text-gray-600">Track your shipment using the SMU number</p>
      </div>

      {/* Tracking Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <form onSubmit={handleTrackShipment} className="max-w-2xl">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                className="input-field"
                placeholder="Enter SMU Number"
                value={smuNumber}
                onChange={(e) => setSmuNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary px-8">
              Track
            </button>
          </div>
        </form>
      </div>

      {/* Tracking Results */}
      {showTrackingDetails && (
        <div className="space-y-6">
          {/* Shipment Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">SMU Number</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{trackingData.smuNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="mt-1">
                  <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {trackingData.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Delivery</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{trackingData.estimatedDelivery}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Shipment Type</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{trackingData.shipmentType}</p>
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Origin</p>
                <p className="mt-1 text-gray-900">{trackingData.origin}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Destination</p>
                <p className="mt-1 text-gray-900">{trackingData.destination}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Customer</p>
                <p className="mt-1 text-gray-900">{trackingData.customer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Weight</p>
                <p className="mt-1 text-gray-900">{trackingData.weight}</p>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Tracking History</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-8 h-full w-0.5 bg-gray-200"></div>

              {/* Timeline events */}
              <div className="space-y-8">
                {trackingData.trackingHistory.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-8 -ml-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white">
                        <i className="fas fa-circle text-xs text-white"></i>
                      </div>
                    </div>

                    {/* Event content */}
                    <div className="ml-16">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">{event.date}</span>
                        <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${event.status === 'Departed' ? 'bg-green-100 text-green-800' :
                            event.status === 'Processed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{event.location}</p>
                      <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="btn-primary">
              <i className="fas fa-print mr-2"></i>
              Print Details
            </button>
            <button className="btn-secondary">
              <i className="fas fa-share-alt mr-2"></i>
              Share Tracking
            </button>
          </div>
        </div>
      )}

      {/* Quick Track Multiple Shipments */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Track Multiple Shipments</h3>
        <p className="text-gray-600 mb-4">Enter multiple SMU numbers (one per line) to track multiple shipments at once</p>
        <div className="space-y-4">
          <textarea
            className="input-field"
            rows="4"
            placeholder="Enter SMU numbers (one per line)"
          ></textarea>
          <button className="btn-primary">
            Track Multiple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;