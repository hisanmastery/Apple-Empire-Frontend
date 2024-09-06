import toast from "react-hot-toast";
const useToaster = () => {
  const showToast = (type?: string, message?: string, description?: string) => {
    const content = (
      <div>
        <strong>{message}</strong>
        {description && <div>{description}</div>}
      </div>
    );
    if (type === "success") {
      toast.success(content);
    } else if (type === "error") {
      toast.error(content);
    } else if (type === "warning") {
      toast(content, {
        icon: "⚠️",
        style: {
          background: "#ffcc00",
          color: "#000",
        },
      });
    } else {
      toast(content);
    }
  };

  return showToast;
};

export default useToaster;
