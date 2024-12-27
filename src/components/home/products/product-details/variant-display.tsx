"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ColorSelector from "./color-selector";
import CustomTooltip from "@/components/common/custom-tooltip";

const VariantDisplay = ({
  product,
  setVariantPrice,
  setSelectedVariantOptions,
  selectedColor,
  setViewImage,
  setSelectedColor,
}: any) => {
  const optionTypes = Array.from(
    new Set(
      product?.variants.flatMap((variant: any) =>
        variant?.options.map((opt: any) => opt?.name)
      )
    )
  );

  //check variant image
  const hasImages = product?.variants?.some(
    (variant: any) =>
      Array.isArray(variant?.images) && variant?.images?.length > 0
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
    setSelectedColor(value);
    optionTypes.includes("Color") && handleOptionChange("Color", value);
    optionTypes.includes("color") && handleOptionChange("color", value);
  };

  useEffect(() => {
    setVariantPrice(selectedVariant);
    setViewImage(selectedVariant?.images?.[0]);
    setSelectedVariantOptions(selectedOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedVariant,
    setVariantPrice,
    selectedOptions,
    setSelectedVariantOptions,
  ]);

  return (
    <section>
      {optionTypes.some((option: any) => option.toLowerCase() === "color") &&
        !hasImages && (
          <ColorSelector
            variations={product?.variations}
            selectedColor={selectedColor}
            onColorSelect={handleColorVariant}
          />
        )}

      <div className="mt-4">
        {optionTypes?.map(
          (option: any) =>
            (hasImages || (option !== "color" && option !== "Color")) && (
              <div key={option} className="mb-4 flex">
                <h3 className="font-medium w-[30%] md:w-[15%]">{option}:</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Check for 'Color' option and render color selector if images are available */}
                  {option.toLowerCase() === "color" && hasImages
                    ? product?.variants
                        .flatMap((variant: any) =>
                          variant?.options
                            .filter(
                              (opt: any) => opt.name.toLowerCase() === "color"
                            )
                            .map((opt: any) => opt.value)
                        )
                        .filter(
                          (value: any, index: number, self: any) =>
                            self.indexOf(value) === index
                        )
                        ?.map((colorValue: any, index: number) => (
                          <CustomTooltip
                            key={index}
                            contentText={`${colorValue}`}
                            triggerText={
                              <button
                                className={`w-8 h-8 rounded-full ${
                                  selectedColor === colorValue
                                    ? "ring-2 ring-_dark-color"
                                    : ""
                                }`}
                                style={{
                                  backgroundColor: colorValue.toLowerCase(),
                                }}
                                onClick={() => {
                                  handleColorVariant(colorValue);
                                }}
                              />
                            }
                          />
                        ))
                    : // If the option is not color and doesn't require images, render other options
                      product?.variants
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
                            size={"sm"}
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
              Price: TK. {selectedVariant?.offer_price ||selectedVariant?.price}
            </h2>
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
