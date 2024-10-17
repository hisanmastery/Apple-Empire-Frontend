import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FilterSection = ({
  title,
  options,
  selectedOption,
  handleChange,
}: any) => {
  const handleCheckboxChange = (option: string) => {
    if (selectedOption === option) {
      handleChange({ label: title, value: "" });
    } else {
      handleChange({ label: title, value: option });
    }
  };
  return (
    <AccordionItem
      value={`item-${title}`}
      className="border-[1px] border-[#dfedeb] rounded-md px-2 my-3"
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        {options.map((option: string, index: number) => (
          <div key={index} className="mb-3">
            <input
              className={`mr-2 form-checkbox h-4 w-4`}
              type="checkbox"
              name={title}
              checked={selectedOption === option}
              onChange={() => handleCheckboxChange(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterSection;
