import OrderTracking from "./OrderTracking";

const OrderCard = ({ order }: { order: any }) => (
  <div
    className={`${
      order.deliveryStatus === "Delivered"
        ? "bg-green-100"
        : order.deliveryStatus === "Canceled"
        ? "bg-red-100"
        : "bg-gray-50"
    } p-4 rounded-md shadow flex flex-col space-y-4 border`}
  >
    <div>
      <h3 className="text-lg font-semibold">Order #{order._id}</h3>
      <p className="text-gray-600">
        Date: {new Date(order.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-600">Payment Status: {order.paymentStatus}</p>
      <p className="text-gray-600">Transaction Id: {order.transactionId}</p>
      <p className="text-gray-600">Delivery Status: {order.deliveryStatus}</p>
    </div>
    <div>
      <h4 className="text-md font-semibold mb-2">Order Tracking:</h4>
      <OrderTracking deliveryStatus={order.deliveryStatus} />
    </div>
    <button className="px-4 py-2 bg-_orange text-white rounded-md">
      View Details
    </button>
  </div>
);

export default OrderCard;
