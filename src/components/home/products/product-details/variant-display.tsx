"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ColorSelector from "./color-selector";

const VariantDisplay = ({
  product,
  setVariantPrice,
  setSelectedVariantOptions,
  selectedColor,
  handleColorButtonClick,
}: any) => {
  const optionTypes = Array.from(
    new Set(
      product?.variants.flatMap((variant: any) =>
        variant?.options.map((opt: any) => opt?.name)
      )
    )
  );
  const defaultVariant = product?.variants?.[0] || null;

  // State for storing the selected options, initialized based on the default variant
  const [selectedOptions, setSelectedOptions]: any = useState(
    defaultVariant
      ? defaultVariant.options.reduce(
          (acc: any, option: any) => ({ ...acc, [option.name]: option.value }),
          {}
        )
      : optionTypes.reduce(
          (acc: any, option: any) => ({ ...acc, [option]: "" }),
          {}
        )
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

  const handleColorVariant = (value: any) => {
    handleColorButtonClick(value);
    optionTypes.includes("Color") && handleOptionChange("Color", value);
    optionTypes.includes("color") && handleOptionChange("color", value);
  };

  useEffect(() => {
    setVariantPrice(selectedVariant);
    setSelectedVariantOptions(selectedOptions);
  }, [
    selectedVariant,
    setVariantPrice,
    selectedOptions,
    setSelectedVariantOptions,
  ]);

  return (
    <section>
      {optionTypes.includes("Color") && (
        <ColorSelector
          variations={product?.variations}
          selectedColor={selectedColor}
          onColorSelect={handleColorVariant}
        />
      )}
      {optionTypes.includes("color") && (
        <ColorSelector
          variations={product?.variations}
          selectedColor={selectedColor}
          onColorSelect={handleColorVariant}
        />
      )}
      {!optionTypes.includes("color") && !optionTypes.includes("Color") && (
        <ColorSelector
          variations={product?.variations}
          selectedColor={selectedColor}
          onColorSelect={handleColorButtonClick}
        />
      )}
      <div className="mt-4">
        {optionTypes.map(
          (option: any) =>
            option !== "color" &&
            option !== "Color" && (
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
                    )
                    ?.map((value: any) => (
                      <Button
                        key={value}
                        variant={
                          selectedOptions[option] === value
                            ? "default"
                            : "outline"
                        }
                        onClick={() => handleOptionChange(option, value)}
                      >
                        {value}
                      </Button>
                    ))}
                </div>
              </div>
            )
        )}
      </div>

      <div className="mt-6">
        {selectedVariant ? (
          <>
            <h2 className="text-xl font-bold">
              Price: TK. {selectedVariant?.price}
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
