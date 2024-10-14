import React from "react";

interface PaymentAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userInfo: {
    password: string;
    email: string;
  } | null;
}

const PaymentAlert: React.FC<PaymentAlertProps> = ({
  isOpen,
  onClose,
  onConfirm,
  userInfo,
}) => {
  if (!isOpen) return null;

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!"); // Notify user of successful copy
      },
      (err) => {
        console.error("Failed to copy: ", err); // Handle errors
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold">Registration Successful!</h2>
        <p className="mt-3">Your account has been created successfully.</p>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={userInfo?.email}
              readOnly
              className="border rounded p-2 w-full focus:outline-none"
            />
            <button
              onClick={() => copyToClipboard(userInfo?.email || "")}
              className="ml-2 bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <input
              type="text"
              value={userInfo?.password}
              readOnly
              className="border rounded p-2 w-full focus:outline-none"
            />
            <button
              onClick={() => copyToClipboard(userInfo?.password || "")}
              className="ml-2 bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentAlert;
