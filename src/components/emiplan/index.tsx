import React from 'react';
import CustomModal from '../common/model';

const Emiplan = ({ isOpen, setIsOpen }: any) => {
  return (
    <div>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} title="EMI Options">
        <div className="grid grid-cols-12 h-[500px]">
          {/* Left sidebar with buttons */}
          <div className="col-span-4 border-r-2 border-gray-200 overflow-y-auto">
            <div className="flex flex-col space-y-2 p-2">
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                AB Bank
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                AB Bank - Online
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                Al-Arafah
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                Al-Arafah Islami Bank - Online
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                Bank Asia
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                Bank Asia - Online
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                Brac Bank
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                CBBL - Online
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                City Bank
              </button>
              <button className="w-full p-2 bg-gray-100 text-left hover:bg-gray-200 rounded">
                City Bank (AMEX) - Online
              </button>
              {/* Add more buttons as needed */}
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-8 p-4">
            {/* Amount Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-semibold" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="0"
              />
            </div>

            {/* EMI Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Plan (Monthly)</th>
                    <th className="p-2 border">EMI</th>
                    <th className="p-2 border">Effective Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row data */}
                  <tr>
                    <td className="p-2 border text-center">3</td>
                    <td className="p-2 border text-center">₹1000</td>
                    <td className="p-2 border text-center">₹3000</td>
                  </tr>
                  <tr>
                    <td className="p-2 border text-center">6</td>
                    <td className="p-2 border text-center">₹500</td>
                    <td className="p-2 border text-center">₹6000</td>
                  </tr>
                  {/* Add more rows dynamically */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Emiplan;
