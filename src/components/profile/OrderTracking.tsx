import { FaCheckCircle, FaClock } from "react-icons/fa";

const OrderTracking = ({ deliveryStatus }: { deliveryStatus: string }) => {
  // Create a function to generate future dates
  const getFutureDate = (daysFromNow: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date;
  };

  const steps = [
    { name: "Order Placed", date: getFutureDate(0) },
    { name: "Processing", date: getFutureDate(1) },
    { name: "Shipped", date: getFutureDate(2) },
    { name: "Out for Delivery", date: getFutureDate(4) },
    { name: "Delivered", date: getFutureDate(5) },
  ];

  const currentStepIndex = steps.findIndex(
    (step) => step.name === deliveryStatus
  );

  const getStatusClass = (index: number) =>
    index <= currentStepIndex ? "bg-blue-500" : "bg-gray-300";

  const getIcon = (index: number) =>
    index <= currentStepIndex ? (
      <FaCheckCircle className="w-6 h-6 text-blue-500" />
    ) : (
      <FaClock className="w-6 h-6 text-gray-300" />
    );

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => (
        <div key={step.name} className="flex-1 flex items-center">
          {/* Step Icon and Text */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index <= currentStepIndex
                  ? "border-blue-500"
                  : "border-gray-300"
              } bg-white shadow-md`}
            >
              {getIcon(index)}
            </div>
            <p className="text-xs font-semibold text-center mt-2">
              {step.name}
            </p>
            <p className="text-xs text-gray-500">{formatDate(step.date)}</p>
          </div>

          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${getStatusClass(
                index + 1
              )} mx-2 rounded-full`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;
