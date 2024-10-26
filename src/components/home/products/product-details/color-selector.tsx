import CustomTooltip from "@/components/common/custom-tooltip";

const ColorSelector = ({ variations, selectedColor, onColorSelect }: any) => {
  return (
    <div className="flex justify-between items-center mx-1 mt-8">
      <span className="w-[50px] mr-2">Color :</span>
      <div className="flex gap-2">
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
