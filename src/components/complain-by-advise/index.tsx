"use client"

import React, { useState } from 'react';

const ComplainByAdvise: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    type: 'Advice',
    details: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      type: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Complain / Advice</h2>
      <p className="text-gray-600 mb-6">
        We value your feedback! If you have any advice or complaints, please reach out to us. Our team will promptly review your message to better serve you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
            Phone No. <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Type <span className="text-red-500">*</span></label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="type"
                value="Advice"
                checked={formData.type === 'Advice'}
                onChange={handleRadioChange}
                className="mr-1"
              />
              Advice
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Complain"
                checked={formData.type === 'Complain'}
                onChange={handleRadioChange}
                className="mr-1"
              />
              Complain
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="details">
            Details (Write your feedback) <span className="text-red-500">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplainByAdvise;
