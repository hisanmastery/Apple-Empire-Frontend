import React, { useEffect, useState } from 'react';
import CustomModal from '../common/model';
import { bankOptions } from '@/data/bank-data';
import { useGetEmiplanQuery } from '@/store/features/emi/emiApi';

const Emiplan = ({ isOpen, setIsOpen ,price}: any) => {
  const [selectedName, setSelectedName] = useState("AB Bank")
  const [inputPrice,setInputPrice]=useState(price)
  const { data }: any = useGetEmiplanQuery({ price: inputPrice, bankName: selectedName })
  const emiData = data?.data
  useEffect(() => {
   setInputPrice(price)
 },[price])
  return (
    <div>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} title="EMI Options">
        <div className="grid grid-cols-12 h-[500px]">
          {/* Left sidebar with dynamic bank buttons */}
          <div className="col-span-4 border-r-2 border-gray-200 overflow-y-auto">
            <div className="flex flex-col space-y-2 p-2">
              {bankOptions?.map((bank) => (
                <button
                  key={bank.id}
                  className={`w-full p-2 text-left hover:bg-_primary ${selectedName === bank.name? "bg-_primary text-_white":"bg-_light-blue"} hover:text-_white rounded`}
                  onClick={()=>setSelectedName(bank.name)}
                >
                  {bank.name}
                </button>
              ))}
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
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                placeholder="0"
                value={inputPrice}
                onChange={(e:any)=>setInputPrice(e.target.value)}
              />
            </div>

            {/* EMI Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Plan (Monthly)</th>
                    <th className="p-2 border">EMI</th>
                    <th className="p-2 border">EMI Charge</th>
                    <th className="p-2 border">Effective Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row data */}
                  {emiData?.map((item: any, index: number) => {
                  return (
                     <tr key={index}>
                     <td className="p-2 border text-center">{item?.months}</td>
                      <td className="p-2 border text-center">₹{item?.emi}</td>
                      <td className="p-2 border text-center">₹{item?.emiCharge}</td>
                       <td className="p-2 border text-center">₹{item?.effectiveCost}</td>
                      </tr>
                      );
                    })}
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
