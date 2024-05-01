"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  row?: number;
  placeholder?: string;
  rules?: any;
  textArea?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  rules = {},
  row = 3,
  textArea = false,
  className = "",
  onChange,
  defaultValue,
  value,
  required = false,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      {(textArea && onChange && (
        <textarea
          id={name}
          rows={row}
          defaultValue={defaultValue}
          className={`${
            errorMessage && "border border-red-200 bg-red-50"
          } ${className} w-full p-2 border rounded-md drop-shadow-sm`}
          placeholder={placeholder}
          onChange={(e: any) => onChange(e)}
          disabled={disabled}
          {...rules}
          required
        />
      )) ||
        (textArea && (
          <textarea
            id={name}
            rows={row}
            defaultValue={defaultValue}
            className={`${
              errorMessage && "border border-red-200 bg-red-50"
            } ${className} w-full p-2 border rounded-md drop-shadow-sm`}
            placeholder={placeholder}
            {...register(name, rules)}
            disabled={disabled}
          />
        )) ||
        (onChange && (
          <input
            className={`${className} ${
              errorMessage && "border border-red-200 bg-red-50"
            }  w-full p-2 border border-gray-300 rounded-md  outline-none  `}
            type={type}
            defaultValue={defaultValue}
            value={value}
            id={name}
            placeholder={placeholder}
            onChange={(e: any) => onChange(e)}
            required
            {...rules}
          />
        )) ||
        (!textArea && !onChange && (
          <input
            className={`${className} ${
              errorMessage && "border border-red-200 bg-red-50"
            }  w-full p-2 border border-gray-300 rounded-md outline-none drop-shadow-sm `}
            type={type}
            defaultValue={defaultValue}
            value={value}
            id={name}
            placeholder={placeholder}
            {...register(name, rules)}
            disabled={disabled}
          />
        ))}

      {errorMessage && (
        <p className="text-red-600 text-sm">
          {typeof errorMessage === "string"
            ? errorMessage
            : (errorMessage as FieldError).message}
        </p>
      )}
    </div>
  );
};

export default Input;
