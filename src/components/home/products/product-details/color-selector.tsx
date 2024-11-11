import CustomTooltip from "@/components/common/custom-tooltip";

const ColorSelector = ({ variations, selectedColor, onColorSelect }: any) => {
  return (
    <div className="flex items-center mt-8">
      <p className="font-medium mr-2 w-[28%] md:w-[14%]">Color :</p>
      <div className="flex flex-wrap gap-2">
        {variations?.map((variant: any, index: number) => (
          <CustomTooltip
            key={index}
            triggerText={
              <button
                onClick={() => onColorSelect(variant?.color)}
                className={`w-8 h-8 rounded-full ${
                  variant.color === selectedColor
                    ? "border-2 border-blue-500"
                    : "border"
                } transition-all duration-300`}
                style={{ backgroundColor: variant?.colorCode }}
              ></button>
            }
            contentText={`${variant.color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
