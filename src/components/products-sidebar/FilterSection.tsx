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
              className="mr-2"
              type="checkbox"
              name={title}
              checked={selectedOption === option}
              onChange={() => handleChange({ label: title, value: option })}
            />
            <label>{option}</label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterSection;
