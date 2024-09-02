import { icons } from "@/constants/icons";
import { toast } from "sonner";
const useToaster = () => {
  const showToast = (type?: string, message?: string, description?: string) => {
    if (type === "success") {
      toast.success(message, {
        description: description,
        action: {
          label: "❌",
          onClick: () => {},
        },
      });
    } else if (type === "error") {
      toast.error(message, {
        description: description,
        action: {
          label: "❌",
          onClick: () => {},
        },
      });
    } else if (type === "warning") {
      toast.warning(message, {
        description: description,
        action: {
          label: "❌",
          onClick: () => {},
        },
      });
    }
  };

  return showToast;
};

export default useToaster;
