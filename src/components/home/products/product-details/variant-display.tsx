"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const VariantDisplay = ({ product }: any) => {
  const optionTypes = ["Color", "Storage", "Display"];
  // State for storing the selected options
  const [selectedOptions, setSelectedOptions]: any = useState(
    optionTypes.reduce((acc, option) => ({ ...acc, [option]: "" }), {})
  );

  const [availableVariants, setAvailableVariants]: any = useState(
    product.variants
  );

  // Update available variants whenever selected options change
  useEffect(() => {
    const filteredVariants = product?.variants?.filter((variant: any) =>
      variant.options.every(
        (variantOption: any) =>
          !selectedOptions[variantOption.name] || // If no option is selected, consider it a match
          selectedOptions[variantOption.name] === variantOption?.value
      )
    );
    setAvailableVariants(filteredVariants);
  }, [selectedOptions, product]);

  // Handle option selection
  const handleOptionChange = (name: string, value: string) => {
    setSelectedOptions((prevState: any) => ({ ...prevState, [name]: value }));
  };

  // Find the variant that matches the selected options
  const selectedVariant: any =
    availableVariants.length > 0 ? availableVariants[0] : null;

  return (
    <section className="p-4">
      <div className="mt-4">
        {optionTypes.map((option: any) => (
          <div key={option} className="mb-4 flex items-center gap-5">
            <h3 className="font-medium">{option}</h3>
            <div className="flex space-x-2">
              {/* Extract available values for the current option */}
              {product?.variants
                .flatMap((variant: any) =>
                  variant?.options
                    .filter((opt: any) => opt.name === option)
                    .map((opt: any) => opt.value)
                )
                .filter(
                  (value: any, index: number, self: any) =>
                    self.indexOf(value) === index
                ) // Remove duplicates
                ?.map((value: any) => (
                  <Button
                    key={value}
                    variant={
                      selectedOptions[option] === value ? "default" : "outline"
                    }
                    onClick={() => handleOptionChange(option, value)}
                  >
                    {value}
                  </Button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {selectedVariant ? (
          <>
            <h2 className="text-xl font-bold">
              Price: ${selectedVariant?.price}
            </h2>
            <p className="text-gray-600">Stock: {selectedVariant?.stock}</p>
          </>
        ) : (
          <p className="text-red-500">
            No variant matches the selected options.
          </p>
        )}
      </div>
    </section>
  );
};

export default VariantDisplay;
