import React, { useState, useEffect } from 'react';

interface AttributesProps<T> {
  label: string;
  items: T[];
  handleSelection: (selectedItem: T) => void;
  handleVariants:()=>void,
  defaultValue?: T;
  data?:any
}

const Attributes = <T,>({ label, items, handleSelection,handleVariants, defaultValue }: AttributesProps<T>) => {
  const initialSelected = defaultValue !== undefined ? defaultValue : items[0];
  const [selected, setSelected] = useState<T | null>(initialSelected);

  useEffect(() => {
    if (initialSelected !== undefined) {
      handleSelection(initialSelected);
    }
  }, [initialSelected, handleSelection]);

  const handleClick = (item: T) => {
    setSelected(item);
    handleSelection(item);
    handleVariants()
  };

  return (
    <div className="flex gap-[5rem] items-start">
      <span className='w-[10%]'>{label}:</span>
      <div className="flex flex-wrap gap-2">
        {items?.map((item, index) => (
          <button
            onClick={() => handleClick(item)}
            key={index}
            className={`inline-flex items-center rounded-md px-4 py-2 text-xs font-medium cursor-pointer border ${
              selected === item
                ? 'bg-_black text-_white border-_black'
                : 'bg-_white text-_black border-_black'
            }`}
          >
            {String(item)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Attributes;
