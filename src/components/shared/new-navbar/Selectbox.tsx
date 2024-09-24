import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const SelectBox = ({ options }: any) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: any) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">{selected}</span>
          <FaCaretDown className="ml-2" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full mt-2 origin-top-right bg-white z-50">
          <div className="py-1">
            {options?.map((option: any) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
