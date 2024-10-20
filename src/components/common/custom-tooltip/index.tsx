import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CustomTooltip = ({ triggerText, contentText }: any) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{triggerText}</TooltipTrigger>
        <TooltipContent>
          <p>{contentText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
