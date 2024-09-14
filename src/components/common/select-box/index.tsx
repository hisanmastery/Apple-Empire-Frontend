"use client";
import React from "react";
import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (selectedOption:any) => void;
  defaultValue?: any;
  value?:any
  required?: boolean;
  disabled?: boolean;
  valueOptions: OptionType[];
  isMulti?: any;
  setSearchText:any
}

const customStyles: StylesConfig<OptionType, true> = {
  control: (provided) => ({
    ...provided,
    borderColor: '#d1d5db',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#a1a1a1',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#f3f4f6',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#374151',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#ef4444',
    ':hover': {
      backgroundColor: '#fef2f2',
      color: '#ef4444',
    },
  }),
};

const SelectBox: React.FC<InputProps> = ({
  name,
  placeholder = "",
  className = "",
  onChange,
  defaultValue,
  value,
  required = false,
  disabled = false,
  valueOptions = [],
  isMulti = false,
  setSearchText
}) => {

    const filterOptions = (inputValue: string, valueOptions: OptionType[]) => {
     setSearchText(inputValue);
     return valueOptions.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  };
  
  const promiseOptions = (inputValue: string, valueOptions: OptionType[]) =>
    new Promise<OptionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue, valueOptions));
      }, 1000);
    });

  return (
    <div className={`relative ${className}`}>
      <AsyncSelect 
        className="w-full outline-none"
        isMulti={isMulti}
        defaultValue={defaultValue}
        value={value}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        styles={customStyles}
        aria-required={required}
        aria-disabled={disabled}
        loadOptions={(inputValue) => promiseOptions(inputValue, valueOptions)}
        defaultOptions={valueOptions}
      />
    </div>
  );
};

export default SelectBox;
