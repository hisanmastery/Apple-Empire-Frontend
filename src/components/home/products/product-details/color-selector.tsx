const ColorSelector = ({ variations, selectedColor, onColorSelect }: any) => {
  return (
    <div className="flex justify-between items-center mx-1 mt-8">
      <span className="w-[50px] mr-2">Color :</span>
      <div className="flex gap-2">
        {variations?.map((variant: any, index: number) => (
          <button
            key={index}
            onClick={() => onColorSelect(variant.color)}
            className={`w-8 h-8 rounded-full ${
              variant.color === selectedColor
                ? "border-2 border-blue-500"
                : "border"
            } transition-all duration-300`}
            style={{ backgroundColor: variant.color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
