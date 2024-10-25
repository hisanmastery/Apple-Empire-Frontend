import Image from "next/image";
import OrderTracking from "./OrderTracking";
import Link from "next/link";

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
      <h4 className="text-md font-semibold mb-2">Products:</h4>
      <ul className="space-y-3">
        {order?.productsInfo.map((product: any, index: number) => (
          <li key={index} className="flex items-center space-x-4">
            <div className="relative w-14 h-14">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <p className="text-gray-700 font-semibold text-sm">
                {product.title}
              </p>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-md font-semibold mb-2">Order Tracking:</h4>
      <OrderTracking deliveryStatus={order.deliveryStatus} />
    </div>
    <Link
      href={`/order-details/${order?._id}`}
      className="px-4 py-2 bg-_orange text-white rounded-md flex justify-center"
    >
      View Details
    </Link>
  </div>
);

export default OrderCard;
