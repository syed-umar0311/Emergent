"use client"; 
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    area: '',
    frostDepth: '',
    duration: '',
    deliveryPickup: 'No',
    powerAvailability: 'No',
    insulatedTarps: 'No',
    groundThawSetup: 'No',
  });

  const [cost, setCost] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const calculateCost = () => {
    // Placeholder for cost calculation logic
    setCost(Math.floor(Math.random() * 1000));
  };

  return (
    <div className="bg-back text-white p-16 md:p-16 ">
      {/* Title */}
      <h2 className="text-lg font-medium uppercase">Estimate Your Project Costs</h2>
      <h1 className="text-3xl md:text-4xl font-medium font-poppins text-custom-orange mt-2">
        Quick Cost Estimator
      </h1>
      <p className="text-white mt-4">
        Use our simple calculator to estimate the cost of renting the E3000 Hydronic Heater
        for your specific project needs. Enter your project details below to receive an
        instant preliminary quote.
      </p>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div>
          <input
            type="text"
            name="area"
            placeholder="30x60"
            className="w-full p-3 bg-white  focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.area}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="frostDepth"
            placeholder="Enter frost depth"
            className="w-full p-3 bg-white  focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.frostDepth}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="duration"
            placeholder="Enter duration"
            className="w-full p-3 bg-white  focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-custom-orange font-poppins font-bold">Delivery/Pickup</label>
            <div className="flex gap-4">
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.deliveryPickup === 'No'
                    ? 'bg-transparent border border-white'
                    : 'bg-transparent text-white'
                }`}
                onClick={() => handleToggle('deliveryPickup', 'No')}
              >
                No
              </button>
              <button
                className={`py-1 px-1 w-11 h-11  ${
                  formData.deliveryPickup === 'Yes'
                    ? 'bg-custom-orange text-white'
                    : 'bg-custom-orange border-white'
                }`}
                onClick={() => handleToggle('deliveryPickup', 'Yes')}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-custom-orange font-poppins font-bold">Power Availability</label>
            <div className="flex gap-4">
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.powerAvailability === 'No'
                    ? 'bg-transparent border border-white'
                    : 'bg-transparent text-white'
                }`}
                onClick={() => handleToggle('powerAvailability', 'No')}
              >
                No
              </button>
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.powerAvailability === 'Yes'
                    ? 'bg-custom-orange text-white'
                    : 'bg-custom-orange border-white'
                }`}
                onClick={() => handleToggle('powerAvailability', 'Yes')}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-custom-orange font-poppins font-bold">Insulated Tarps</label>
            <div className="flex gap-4">
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.insulatedTarps === 'No'
                    ? 'bg-transparent border border-white'
                    : 'bg-transparent text-white'
                }`}
                onClick={() => handleToggle('insulatedTarps', 'No')}
              >
                No
              </button>
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.insulatedTarps === 'Yes'
                    ? 'bg-custom-orange text-white'
                    : 'bg-custom-orange border-white'
                }`}
                onClick={() => handleToggle('insulatedTarps', 'Yes')}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-custom-orange font-poppins font-bold">Setup of the Ground Thaw Equipment</label>
            <div className="flex gap-4">
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.groundThawSetup === 'No'
                    ? 'bg-transparent border border-white'
                    : 'bg-transparent text-white'
                }`}
                onClick={() => handleToggle('groundThawSetup', 'No')}
              >
                No
              </button>
              <button
                className={`py-1 px-1 w-11 h-11   ${
                  formData.groundThawSetup === 'Yes'
                    ? 'bg-custom-orange text-white'
                    : 'bg-custom-orange border-white'
                }`}
                onClick={() => handleToggle('groundThawSetup', 'Yes')}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cost and Calculate Button */}
      <div className="mt-8 text-center">
        <div className="text-4xl font-medium  text-custom-orange">${cost.toFixed(2)}</div>
        <button
          className="bg-custom-orange hover:bg-orange-600 text-white py-1 px-3  text-sm  font-bold mt-4 h-10 font-poppins "
          onClick={calculateCost}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Form;
